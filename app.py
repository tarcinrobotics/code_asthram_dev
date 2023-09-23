from flask import Flask, render_template, request, redirect, url_for
import mysql.connector

app = Flask(__name__)

# MySQL configuration
db = mysql.connector.connect(
    host="localhost",
    user="tarcin",
    password="Tarcin@123",
    database="code_asthram"
)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    cursor = db.cursor()
    cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
    user = cursor.fetchone()

    if user:
        return "Login successful!"  # You can redirect to Ardublock here
    else:
        return "Login failed. Invalid username or password."

if __name__ == '__main__':
    app.run(debug=True)
