var slideIndex = 1;

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides[slideIndex - 1].style.display = "block";
}

showSlides(1);

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

setInterval(plusSlides, 3000, 1);

function toggleInfo(carId){
    info = document.getElementById("skoda-fabia");
    if(info.style.display === "block"){
        info.style.display = "none";
    } else{
        info.style.display = "block";
    }
}

function toggleInfo(carId){
    info = document.getElementById(carId);
    if(info.style.display === "block"){
        info.style.display = "none";
    } else{
        info.style.display = "block";
    }
}

function toggleInfo(carId){
    info = document.getElementById(carId);
    if(info.style.display === "block"){
        info.style.display = "none";
    } else{
        info.style.display = "block";
    }
}

function toggleInfo(carId){
    info = document.getElementById(carId);
    if(info.style.display === "block"){
        info.style.display = "none";
    } else{
        info.style.display = "block";
    }
}

function toggleInfo(carId){
    info = document.getElementById(carId);
    if(info.style.display === "block"){
        info.style.display = "none";
    } else{
        info.style.display = "block";
    }
}


function validateform(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message");
    var formMessage = document.getElementById("formMessage");
    var formMessageSuccess = document.getElementById("formMessageSuccess");

    var nameRegex = /^[a-zA-Z]+$/;
    var emailRegex = /^\w+@\w+\.\w+$/;

    if(!nameRegex.test(name)){
        message.textContent = "Please enter a valid name (letters only).";
    }
    else if(!emailRegex.test(email)){
        message.textContent = "Please enter a valid email address.";
    }
    else{
        message.textContent = "Form submitted successfully!";
    }

    

    if(message.textContent === "Form submitted successfully!"){
        formMessageSuccess.textContent = "Form submitted successfully!";
        formMessage.textContent = "";
    }

    
}

