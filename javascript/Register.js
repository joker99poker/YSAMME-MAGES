function check2() {
    if (document.getElementById("pass").value === "" || document.getElementById("pass2").value === "" && document.getElementById("email").value !== "") {
        alert("Please type in the password");
    }
    else if (document.getElementById("email").value === "") {
        alert("Please type in the Email");
    }
    else if (document.getElementById("email").value === "" && document.getElementById("pass2").value === "" || document.getElementById("pass").value === "" ) {
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
