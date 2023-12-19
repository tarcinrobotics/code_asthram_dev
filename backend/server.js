var express = require("express");
var app = express();
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var cors = require("cors");
var multer = require("multer"),
  bodyParser = require("body-parser"),
  path = require("path");

const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://tarcinrobotics301:tarcinrobotics301@cluster0.kpaipm9.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
const User = require('./userModel.js');

async function insert() {
  const usersToAdd = [
    {
      username: 'admin@tarcin.com',
      password: await bcrypt.hash('tarcin301', 10),
      isSuperuser: true,
    },
    {
      username: 'tarcinadmin',
      password: await bcrypt.hash('tarcinadmin', 10),
      isSuperuser: true,
    },
    // Add more users as needed
    // { username: 'alcarsath@gmail.com', password: await bcrypt.hash('arsath', 10) }
  ];

  for (const user of usersToAdd) {
    try {
      const existingUser = await User.findOne({ username: user.username });
      if (!existingUser) {
        await User.create(user);
        console.log(`User added successfully: ${user.username}`);
      } else {
        console.log(`User already exists: ${user.username}`);
      }
    } catch (err) {
      console.error(`Error adding user ${user.username}:`, err);
    }
  }
}

insert();


mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB Atlas");
});

mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

var fs = require("fs");
var product = require("./model/product.js");
var user = require("./model/user.js");

var dir = "./uploads";
var upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      callback(null, "./uploads");
    },
    filename: function (req, file, callback) {
      callback(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  }),

  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      return callback(/*res.end('Only images are allowed')*/ null, false);
    }
    callback(null, true);
  },
});
app.use(cors());
app.use(express.static("uploads"));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: false,
  })
);

app.use("/", (req, res, next) => {
  try {
    if (req.path === "/login" || req.path === "/register" || req.path === "/") {
      next();
    } else {
      /* decode jwt token if authorized*/
      jwt.verify(req.headers.token, "shhhhh11111", function (err, decoded) {
        console.log('Decoded token:', decoded); // Add this line for debugging
      
        if (decoded && decoded.user) {
          req.user = decoded;
          // Check if the user is a superuser
          if (decoded.isSuperuser !== undefined) {
            if (decoded.isSuperuser) {
              next();
            } else {
              return res.status(401).json({
                errorMessage: "User unauthorized!",
                status: false,
              });
            }
          } else {
            return res.status(401).json({
              errorMessage: 'User unauthorized!',
              status: false,
            });
          }
        } else {
          return res.status(401).json({
            errorMessage: 'User unauthorized!',
            status: false,
          });
        }        

        
      });
    }
  } catch (e) {
    res.status(400).json({
      errorMessage: "Something went wrong!",
      status: false,
    });
  }
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    title: "Apis",
  });
});

/* login api */
/* login api */
app.post("/login", async (req, res) => {
  console.log('Received login request:', req.body);
  try {
    if (req.body && req.body.username && req.body.password) {
      // Query MongoDB to find the user
      const foundUser = await user.findOne({ username: req.body.username });

      console.log('Found user:', foundUser);

      if (foundUser && bcrypt.compareSync(req.body.password, foundUser.password)) {
        console.log('Password matched');

        // Generate token
        jwt.sign(
          {
            user: foundUser.username,
            id: foundUser._id,
            isSuperuser: foundUser.isSuperuser || false,
          },
          "shhhhh11111",
          { expiresIn: "1d" },
          (err, token) => {
            if (err) {
              console.error('Token generation error:', err);
              res.status(400).json({
                status: false,
                errorMessage: err,
              });
            } else {
              console.log('Generated token:', token);
              res.json({
                message: "Login Successfully.",
                token: token,
                status: true,
              });
            }
          }
        );
      } else {
        console.error("Incorrect username or password");
        res.status(400).json({
          errorMessage: "Username or password is incorrect!",
          status: false,
        });
      }
    } else {
      console.error("Invalid request parameters");
      res.status(400).json({
        errorMessage: "Add proper parameters first!",
        status: false,
      });
    }
  } catch (e) {
    console.error("Unexpected error:", e);
    res.status(400).json({
      errorMessage: "Something went wrong!",
      status: false,
    });
  }
});


/* register api */
app.post("/register", (req, res) => {
  try {
    if (req.body && req.body.username && req.body.password) {
      user.find({ username: req.body.username }, async (err, data) => {
        if (data.length == 0) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);

          let User = new user({
            username: req.body.username,
            password: hashedPassword,
          });
          User.save((err, data) => {
            if (err) {
              res.status(400).json({
                errorMessage: err,
                status: false,
              });
            } else {
              res.status(200).json({
                status: true,
                title: "Registered Successfully.",
              });
            }
          });
        } else {
          res.status(400).json({
            errorMessage: `UserName ${req.body.username} Already Exist!`,
            status: false,
          });
        }
      });
    } else {
      res.status(400).json({
        errorMessage: "Add proper parameter first!",
        status: false,
      });
    }
  } catch (e) {
    res.status(400).json({
      errorMessage: "Something went wrong!",
      status: false,
    });
  }
});

function checkUserAndGenerateToken(data, req, res) {
  if (data.isSuperuser) {
    jwt.sign(
      {
        user: foundUser.username,
        id: foundUser._id,
        isSuperuser: foundUser.isSuperuser || false,
      },
      "shhhhh11111",
      { expiresIn: "1d" },
      (err, token) => {
        if (err) {
          console.error('Token generation error:', err);
          res.status(400).json({
            status: false,
            errorMessage: err,
          });
        } else {
          console.log('Generated token:', token);
          res.json({
            message: "Login Successfully.",
            token: token,
            status: true,
          });
        }
      }
    );
  }}


/* Api to add Product */
app.post("/add-product", upload.any(), (req, res) => {
  try {
    if (
      req.files &&
      req.body &&
      req.body.name &&
      req.body.desc &&
      req.body.price &&
      req.body.discount
    ) {
      let new_product = new product();
      new_product.name = req.body.name;
      new_product.desc = req.body.desc;
      new_product.price = req.body.price;
      new_product.image = req.files[0].filename;
      new_product.discount = req.body.discount;
      new_product.user_id = req.user.id;
      new_product.save((err, data) => {
        if (err) {
          res.status(400).json({
            errorMessage: err,
            status: false,
          });
        } else {
          res.status(200).json({
            status: true,
            title: "Product Added successfully.",
          });
        }
      });
    } else {
      res.status(400).json({
        errorMessage: "Add proper parameter first!",
        status: false,
      });
    }
  } catch (e) {
    res.status(400).json({
      errorMessage: "Something went wrong!",
      status: false,
    });
  }
});

/* Api to update Product */
app.post("/update-product", upload.any(), (req, res) => {
  try {
    if (
      req.files &&
      req.body &&
      req.body.name &&
      req.body.desc &&
      req.body.price &&
      req.body.id &&
      req.body.discount
    ) {
      product.findById(req.body.id, (err, new_product) => {
        // if file already exist than remove it
        if (
          req.files &&
          req.files[0] &&
          req.files[0].filename &&
          new_product.image
        ) {
          var path = `./uploads/${new_product.image}`;
          fs.unlinkSync(path);
        }

        if (req.files && req.files[0] && req.files[0].filename) {
          new_product.image = req.files[0].filename;
        }
        if (req.body.name) {
          new_product.name = req.body.name;
        }
        if (req.body.desc) {
          new_product.desc = req.body.desc;
        }
        if (req.body.price) {
          new_product.price = req.body.price;
        }
        if (req.body.discount) {
          new_product.discount = req.body.discount;
        }

        new_product.save((err, data) => {
          if (err) {
            res.status(400).json({
              errorMessage: err,
              status: false,
            });
          } else {
            res.status(200).json({
              status: true,
              title: "Product updated.",
            });
          }
        });
      });
    } else {
      res.status(400).json({
        errorMessage: "Add proper parameter first!",
        status: false,
      });
    }
  } catch (e) {
    res.status(400).json({
      errorMessage: "Something went wrong!",
      status: false,
    });
  }
});

/* Api to delete Product */
app.post("/delete-product", (req, res) => {
  try {
    if (req.body && req.body.id) {
      product.findByIdAndUpdate(
        req.body.id,
        { is_delete: true },
        { new: true },
        (err, data) => {
          if (data.is_delete) {
            res.status(200).json({
              status: true,
              title: "Product deleted.",
            });
          } else {
            res.status(400).json({
              errorMessage: err,
              status: false,
            });
          }
        }
      );
    } else {
      res.status(400).json({
        errorMessage: "Add proper parameter first!",
        status: false,
      });
    }
  } catch (e) {
    res.status(400).json({
      errorMessage: "Something went wrong!",
      status: false,
    });
  }
});

/*Api to get and search product with pagination and search by name*/
app.get("/get-product", (req, res) => {
  try {
    var query = {};
    query["$and"] = [];
    query["$and"].push({
      is_delete: false,
      user_id: req.user.id,
    });
    if (req.query && req.query.search) {
      query["$and"].push({
        name: { $regex: req.query.search },
      });
    }
    var perPage = 5;
    var page = req.query.page || 1;
    product
      .find(query, {
        date: 1,
        name: 1,
        id: 1,
        desc: 1,
        price: 1,
        discount: 1,
        image: 1,
      })
      .skip(perPage * page - perPage)
      .limit(perPage)
      .then((data) => {
        product
          .find(query)
          .count()
          .then((count) => {
            if (data && data.length > 0) {
              res.status(200).json({
                status: true,
                title: "Product retrived.",
                products: data,
                current_page: page,
                total: count,
                pages: Math.ceil(count / perPage),
              });
            } else {
              res.status(400).json({
                errorMessage: "There is no product!",
                status: false,
              });
            }
          });
      })
      .catch((err) => {
        res.status(400).json({
          errorMessage: err.message || err,
          status: false,
        });
      });
  } catch (e) {
    res.status(400).json({
      errorMessage: "Something went wrong!",
      status: false,
    });
  }
});

app.listen(2000, () => {
  console.log("Server is Runing On port 2000");
});
