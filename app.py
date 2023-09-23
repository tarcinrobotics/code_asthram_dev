from flask import Flask, request, render_template, redirect, url_for
import mysql.connector

app = Flask(__name__)

# MySQL database connection configuration
db_config = {
    'host': 'localhost',
    'user': 'tarcin',
    'password': 'Tarcin@123',
    'database': 'code_asthram',
}

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        username = request.form['email']
        password = request.form['password']

        # Connect to the MySQL database
        try:
            conn = mysql.connector.connect(**db_config)
            cursor = conn.cursor()

            # Query to check login credentials
            cursor.execute("SELECT * FROM login WHERE email = %s AND password = %s", (username, password))
            user = cursor.fetchone()

            if user:
                # Successful login
                return render_template('codeasthram.html')
            else:
                # Failed login
                return "Login failed. Please check your credentials."

        except mysql.connector.Error as e:
            # Handle database connection or query errors here
            return "Error: {}".format(e)

        finally:
            # Close the database connection
            conn.close()

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)