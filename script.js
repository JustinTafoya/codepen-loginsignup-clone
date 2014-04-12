/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.api.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {

//LOGIN---SIGNUP NAV
	$(".signup-form").hide();

		$(".signup-form-btn").click(function(){		//SIGN UP BUTTON
			$(".signup-form").show();
			$(".signup-form-btn").addClass("active");
			$(".login-form-btn").removeClass("active");
			$(".login-form").hide();

	});
		$(".login-form-btn").click(function(){		//LOGIN BUTTON
			$(".login-form").show();
			$(".login-form-btn").addClass("active");
			$(".signup-form-btn").removeClass("active");
			$(".signup-form").hide();
	});

//NEW USER

	var user_object = {};	//BLANK OBJECT


	$(".btn-login").click(function(){
		user_object.username = $("#login-username-field").val(); // APPLIES USERNAME INPUT TO BLANK OBJECT user_object.username
		user_object.password = $("#login-password-field").val(); // APPLIES USERNAME INPUT TO BLANK OBJECT user_object.username
		
		codepen.api.login(user_object);
		console.log(codepen.api.login(user_object));

		alert(codepen.api.login(user_object).error);

	});









});




		// if (codepen.api.login(user_object).success = false){

		// 	alert(codepen.api.login(user_object).error);

		// }else{ 

		// 	alert("Welcome");
		// };

// $("btn-signup").submit('codepen.api.login').val();



