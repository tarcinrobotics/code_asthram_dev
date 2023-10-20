<?php

// starting the session
session_start();
// timeout
// post action after clicking the submit

if(!isset($_POST['submit']))
    {
        $mail=$_POST['email'];
        $pass=$_POST['password'];
        $con=mysqli_connect("localhost","ca","Tarcin@123","code_asthram");
        $sql="SELECT * from login WHERE email='$mail' AND password='$pass' ";
        $result=mysqli_query($con,$sql);
        $resultcheck=mysqli_num_rows($result);

        if($resultcheck>0) {
            // validating the login information using session cache
            $_SESSION['user_id'] = $mail;
            include('codeasthram.html');
            echo '<form action="logout.php" method="post">
                    <input type="submit" value="Logout">
                    </form>';
        } 
        else {
            include ('location: index.php');
            echo "Invalid Mail or Password";
        }
    } 

else {
        
        if (isset($_SESSION['user_id'])) 
        {
            // User is already logged in, display a logout button
            echo "Welcome, " . $_SESSION['user_id'] . "!";
            echo '<form action="logout.php" method="post">
                    <input type="submit" value="Logout">
                    </form>';
            include('location:codeasthram.html');
        } 
        else 
        {
            // User is not logged in, display the login form
            include ('index.php');
            echo "Please log in.";
            // Add your login form here
        }
    }
?>
