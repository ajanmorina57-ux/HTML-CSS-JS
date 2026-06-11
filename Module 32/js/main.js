function validateform(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message");
    var password = document.getElementById("password").value;

    var nameRegex = /^[a-zA-Z]+$/;
    var ageRegex = /^[1-9][0-9]?$/;
    var emailRegex = /^\w+@\w+\.\w+$/;
    var passwordRegex = /^.{6,}$/;


    if(!nameRegex.test(name)){
        message.textContent = "Please enter a valid name (letters only).";
    }
    else if(!ageRegex.test(age)){
        message.textContent = "Please enter a valid age (1-99).";
    }
    else if(!emailRegex.test(email)){
        message.textContent = "Please enter a valid email address.";
    }
    else if (!passwordRegex.test(password)){
        message.textContent = "Please enter a valid password (at least 6 characters).";
    }
    else{
        message.textContent = "Form submitted successfully!";
    }

    message.setAttribute("class" , "error");

    if(message.textContent === "Form submitted successfully!"){
        message.setAttribute("class" , "success");
    }   







}