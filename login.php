<?php
if(!isset($_POST['submit']))
{
    $mail=$_POST['email'];
    $pass=$_POST['password'];
    $con=mysqli_connect("localhost","root","","code asthram login");
    $sql="SELECT * from login WHERE email='$mail' AND password='$pass' ";
    $result=mysqli_query($con,$sql);
    $resultcheck=mysqli_num_rows($result);
    if($resultcheck>0) {
        include('codeasthram.html');
    }
    else {
        echo "Invalid Mail or Password" ;
    }
}
?>
