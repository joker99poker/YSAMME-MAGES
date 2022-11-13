let email = document.getElementById("email")
let pass = document.getElementById("pass")
function check2() {
    if ( email.value === "" && pass.value === "") {
        email.style.borderColor = "red"
        pass.style.borderColor = "red"
    }
    else if ( email.value !== "" && pass.value === "") {
        email.style.borderColor = "blue"
        pass.style.borderColor = "red" 
    }
    else if ( email.value === "" && pass.value !== "") {
        email.style.borderColor = "red"
        pass.style.borderColor = "blue" 
    }
    else {
        window.location.replace("YsammeMages.html");
    }
}

// similar behavior as an HTTP redirect
//window.location.replace("http://YsammeMages.html");
    
// similar behavior as clicking on a link
//window.location.href = "http://YsammeMages.html";
