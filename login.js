       //form 1

	function vfun(){
				var uname=document.forms["Login"]["email"].value;
				var upswd=document.forms["Login"]["password"].value;

		if(email==null || email=="" ){
				document.getElementById("errorBox").innerHTML =
				"enter the user name";
			return false;
		}

		if(password==null || password==""){
				document.getElementById("errorBox").innerHTML =
			    "enter the password";
			 return false;
		}

		if (email != '' && password != '' ){
	 		alert("Login successfully");
							}

	}
