<?php
// starting the session
session_start();

// Destroy the session and redirect to the login page
if (isset($_SESSION['user_id'])) {
    session_unset();
    session_destroy();
}

header("Location: index.php"); // Redirect to the login page
exit();
?>
