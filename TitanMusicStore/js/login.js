function validate(){
'use strict';
	var email = document.getElementById('email');
	var password = document.getElementById('password');
	if((email.value.length > 0) && (password.value.length > 0)){
		if((email.value == 'admin@titanmusicstore.com') || (email.value == "adefran83@gmail.com")){
			if((email.value == 'admin@titanmusicstore.com') && (password.value === 'LogMeIn')){
			return true;
			} else if ((email.value == 'adefran83@gmail.com') && (password.value === 'Pa$$word1')){
			return true;
			} else {
			alert('Invalid password');
			return false;
			}
		} else {
		alert('Invalid email');
		return false;
		}
	} else {
	alert('Please enter an email and password');
	return false;
	}
}
function init(){
document.getElementById('loginform').onsubmit = validate;
}
window.onload = init;