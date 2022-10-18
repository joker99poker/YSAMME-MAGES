let email = document.getElementById("email").value
let pass = document.getElementById("pass").value

function check2() {
    if ( email === "" && pass === "") {
        alert("Please type in the Email and password");
    }
    else {
        window.location.replace("YsammeMages.html");
    }
}

// similar behavior as an HTTP redirect
//window.location.replace("http://stackoverflow.com");
    
// similar behavior as clicking on a link
//window.location.href = "http://stackoverflow.com";
