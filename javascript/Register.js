function check2() {
    if (document.getElementById("pass").value === "") {
        alert("Invaild Email or password");
    } else {
        window.location.replace("YsammeMages.html");
    }
}

// similar behavior as an HTTP redirect
//window.location.replace("http://stackoverflow.com");
    
// similar behavior as clicking on a link
//window.location.href = "http://stackoverflow.com";
