<?php
// Start or resume a session
session_start();

// Unset all session variables
$_SESSION = array();

// Destroy the session
session_destroy();

// Redirect the user to the login page or any other page you prefer
header("login.php");
exit();
?>