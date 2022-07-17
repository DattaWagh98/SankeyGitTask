function check() {
    let email = document.getElementById("em").value;
    let password = document.getElementById("pass").value;

    if(email == "sankey901@solutions.com" && password == "mindset") {
        window.location.assign("/info.html");
    } else if(email != "sankey901@solutions.com") {
        console.log("inside else if block");
        document.getElementById("error").innerHTML = "Invalid username/email";
    }else{
        document.getElementById("error").innerHTML = "Invalid password";
    }

}