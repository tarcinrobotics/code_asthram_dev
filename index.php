<?php
// Get the requested URL
$request_uri = $_SERVER['REQUEST_URI'];

// Remove any query string from the URL
$request_uri = strtok($request_uri, '?');

// Define custom routes
$routes = [
    '/' => 'login.php',

];

// Check if the requested URL matches a route
if (array_key_exists($request_uri, $routes)) {
    // Load the corresponding file
    include($routes[$request_uri]);
} else {
    // Handle 404 error
    http_response_code(404);
    #echo "Page not found";
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Code Asthram</title>
	<link rel="stylesheet" href="login.css"> 
	<script type="text/javascript" src="login.js"></script>
	<script type="text/javascript" src="rightclick.js"></script>

	
</head>
<body>
	<div class="container" id="container">
		<div class="form-container sign-in-container">
			<img src="Asthram.png" class="user">
			<form method="POST" action="login.php" name="Login" onsubmit="return vfun()">
				<h1 type="text">Code Asthram !</h1>
				<input type="email" name ="email" placeholder="Email" />
				<input type="password" name = "password" placeholder="Password" />
				<input type="submit" name="" value="Sign In">
				<div id="errorBox"></div>
			</form>
		</div>
		<div class="overlay-container">
			<div class="overlay">
				<div class="overlay-panel overlay-right">
					<h1>Get Sign UP!</h1>
					<p> Make Subscription With Us
						Get Collaboration with us </p>
					<a href="https://wa.me/917904321356"><button class="ghost" id="signUp">Whatsapp</button></a>
				</div>
			</div>
		</div>
	</div>
	
	<footer>
		<p>
			A Product <i class="fa fa-heart"></i> of
			<a target="_blank" href="https://tarcin.in/">Tarcin</a>
		</p>
	</footer>
	
</body>
</html>
