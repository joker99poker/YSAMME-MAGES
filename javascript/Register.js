let email = document.getElementById("email")
let pass = document.getElementById("pass")
let pass2 = document.getElementById("pass2")
let Sumbit = document.getElementById("submit")
function check2() {
    if ( email.value === "" && pass.value === "" && pass2.value === "") {
        email.style.borderColor = "red"
        pass.style.borderColor = "red"
        pass2.style.borderColor = "red"
    }
    else if ( email.value !== "" && pass.value === "" && pass2.value === "") {
        email.style.borderColor = "blue"
        pass.style.borderColor = "red" 
        pass2.style.borderColor = "red"
    }
    else if ( email.value !== "" && pass.value !== "" && pass2.value === "") {
        email.style.borderColor = "blue"
        pass.style.borderColor = "blue" 
        pass2.style.borderColor = "red"
    }
    else if ( email.value !== "" && pass.value === "" && pass2.value !== "") {
        email.style.borderColor = "blue"
        pass.style.borderColor = "red" 
        pass2.style.borderColor = "blue"
    }
    else if ( email.value === "" && pass.value !== "" && pass2.value !== "") {
        email.style.borderColor = "red"
        pass.style.borderColor = "blue" 
        pass2.style.borderColor = "blue"
    }
    else if ( pass.value !== pass2.value)
    {
        Sumbit.textContent = "The Passwords Aren't Equal"
    }
    else {
        window.location.replace("YsammeMages.html");
    }
}

// similar behavior as an HTTP redirect
//window.location.replace("http://YsammeMages.html");
    
// similar behavior as clicking on a link
//window.location.href = "http://YsammeMages.html";
