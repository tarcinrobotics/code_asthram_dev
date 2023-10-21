
from flask import Flask 
from flask import render_template, send_from_directory
  
# creates a Flask application 
app = Flask(__name__, static_folder="static", template_folder="templates") 

  
@app.route("/") 
def hello(): 
    js_files = []
    return render_template('codeasthram.html')

@app.route('/static/style_css.css')
def serve_css(style_css):
    return send_from_directory('static', style_css)



# Serving Language files
@app.route('/static/style_js.js')
def serve_js(style_js):
    return send_from_directory('static', style_js)



## run the application 
if __name__ == "__main__": 
    app.run(debug=True)