function validate() {
    'use strict';
    var value;
    var expire = new Date();
    expire.setDate(expire.getDate() + 7);
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    if ((email.value.length > 0) && (password.value.length > 0)) {
        if ((email.value == 'admin@titanmusicstore.com') || (email.value == "adefran83@gmail.com")) {
            if ((email.value == 'admin@titanmusicstore.com') && (password.value === 'LogMeIn')) {
                value = email;
                COOKIE.setCookie('loginCookie', value, expire);
                return true;
            } else if ((email.value == 'adefran83@gmail.com') && (password.value === 'Pa$$word1')) {
                value = email;
                COOKIE.setCookie('loginCookie', value, expire);
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


window.onload = function () {
    'use strict';
    U.addEvent(U.$('loginform').onclick = validate);
    if (COOKIE.getCookie('loginCookie')) {
        alert('test');
    }
    //else {
    //    window.location = "login.html";
    //}
}