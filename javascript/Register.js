let email = document.getElementById("email").value
let pass = document.getElementById("pass").value
let pass2 = document.getElementById("pass2").value

function check2() {
    if ( email === "" && pass2 === "" && pass === "") {
        alert("Please type in the Email and Password!");
    }
    else if (pass !== pass2) {
        alert("The two Passwords are not equal! ");
    }
    else {
        window.location.replace("YsammeMages.html");
    }
}

// similar behavior as an HTTP redirect
//window.location.replace("http://stackoverflow.com");
    
// similar behavior as clicking on a link
//window.location.href = "http://stackoverflow.com";
