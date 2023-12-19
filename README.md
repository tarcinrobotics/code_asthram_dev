
<p align="center">
  <a href="https://tarcinacademy.in.io">
    <img src="https://github.com/tarcinrobotics/code_asthram_dev/blob/v3/Asthram.png?raw=true" height="100px">
  </a>
</p>

&nbsp;

# Contributors

Whether you're a student, teacher, hobbyist, or professional, CodeAsthram is your ultimate destination for exploring the realms of Python and Arduino coding. Join our growing community and embark on a coding adventure that will unlock your creativity.

Discover the limitless possibilities of coding with CodeBlocks – Where Creativity Finds Expression in Code!

### instructions

git clone https://github.com/tarcinrobotics/code_asthram_dev.git -b v3-dev

cd code_asthram_dev

(Just npm install is enough for both frontend and backend as he dependencies are added to the json file.)

In order to run the build file:

npx serve -s build

### Backend dependencies:

cd backend
Ensure all the dependencies mentioned below are installed
npm install blockly, 
npm install react-spinners.
npm start (port 2000).

#### Install all the dependencies mentioned below

npm install axios
npm install @material-ui/core
npm install bcryptjs
npm install react-router-dom
npm install sweetalert

npm start     # (by default the backend code runs on port 2000)

### Frontend dependencies:

cd frontend
Ensure all the dependencies below are installed:
npm install axios, 
npm install @material-ui/core, 
npm install bcryptjs, 
npm install react-router-dom, 
npm install sweetalert, 
npm install --save @fortawesome/fontawesome-free, 
npm install react-icons.


#### Install all the dependencies below

npm install blockly
npm install react-spinners

#### starting front end code

npm start 


## Changes made in this branch --> v3-dev (By --> Mohamed Arsath)

Completed as of 01/12/23 (Arsath) 

* Complete UI of Code-Asthram is completed with workspace added to it
* Added a loading screen with simple animation as of now
* Code preview button function is added (More to be added soon)
* Created a login page using MongoDB and added it before the login screen
* Used libraries for the login page includes: " axios, @material-ui/core, bcryptjs, react-router-dom, sweetalert "
* Brought the entire code into a structure by splitting frontend and backend. 
* Both backend and frontend has to be started individually using npm start.
* Backend is set to start at port 2000 and the frontend will run in default port 3000.
* In order for the backend to run, ensure that all the above mentioned libraries.  

## Changes made as of 07/12/23 (Arsath) -

* Completed setting functions to all the buttons.
* Removed the register page and it's reference point's completely from the app.
* Since registration is removed. bcrypt library is also removed which was used to encrypt the registered passwords to the database.
* Removed all the data in the database.
* Dependencies are clearly attached to the package.json.
* Navigated and found the css files to change the style of the side bar. (blockino.css)

## Buttons -

* btn_new : (New const derived as handleNewButtonClick) - Refreshes the page and gives a new workspace.
* btn_fakeload : (New const derived as handleOpenButtonClick) - Opens up file manager to select files.
* btn_savexml : (New const derived as saveXmlFile) - Saves the current workspace as .xml file.
* btn_print : (New const derived as takeScreenshot) , Used a library called "html2canvas" that assists in converting the workspace into an image.
* btn_preview : Toggles he texarea where the codes get generated.
* btn_logout : Used "useNavigate" hook from "react-router-dom" to switch the route from "/dashboard" to login page.
               useNavigate hook is used because react-router-dom version is 6.20.0. 
               If the react-router-dom version is below 6 then "useHistory" hook should be used instead.
* btn_saveino : (New const derived as saveInoFile) - Saves the generated code as .ino file.
* btn_copy : (New const derived as copyToClipboard) - Copies the code to the clipboard.


## Changes as of 13/12/2023 (Arsath) : 

* Navigated and Removed the dotted background and gave a white fill.
* Fixed the side tool bar and added border to it.
* Login fix is done and onsync with the Atlas.
* created a proper schema and added a new file to backend - "userModel.js"
* For Data insertion brought back bcrypt library to hash the passwords.
* As of now added three methods for inserting data to the database: 
* #1 - Directly through the code in Server.js. For this, Used an Async insert function to database and also added a feature to the function for checking if the data already exists in the database and if so then it will skip that data thus duplication will be avoided.
* #2 - There's a tool called bcrypt hash generator online, We can directly type the password of our and it will provide us with a hashed password which we can directly insert into our Database and the pre-installed dependency in our project "bcrypt" will decrypt it automatically.
* #3 - Final solution is the most optimal and hassle free method. Created a new Register.js which will handle the data insertion and it will be accessible only by a certain super user (Had set up a authentication middleware for this) and also added a table to display the inserted data in the same page for better experience. The data registered here will also get hashed and the encrypted password will be stored in our database intantly.
* For the 3rd solution also added a library for displaying password strenth meter in our register page.
* Added the package.lock.json file to the .gitignore in both frontend and backend folders.
* Spl route cases are yet to implemented in the paths even after defining superusers, as it was not in the plan when i was elaborated about the project.