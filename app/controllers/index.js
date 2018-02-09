function doClick(e) {
	alert($.label.text);
}

function CheckLogIn(){
	
	var usernameText = $.textField1.text;
	var passwordText = $.textField2.text;
	var correctpassword = "iOS Developer";
	var correctusername = "Dinesh2910";
	
	if(usernameText.toLowerCase() == correctusername.toLowerCase() && passwordText.toLowerCase() == correctpassword.toLowerCase());{
		alert("Both are Matching");
	} 
	else {
		alert("Both are not Matching");
	}
	
} 

$.index.open();
