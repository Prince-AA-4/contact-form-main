let contactForm = document.querySelector('#contactForm')

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let firstName = document.querySelector('#firstName').value.trim();
    let lastName = document.querySelector('#lastName').value.trim();
    let email = document.querySelector('#email-input').value.trim();
    let queryType = document.querySelector('.queryType');
    let message = document.querySelector('#textarea').value.trim();
    let checkbox = document.querySelector('#checkbox');


    let firstNameErr = document.querySelector('#firstname-error');
    let lastNameErr = document.querySelector('#lastname-error');
    let emailErr = document.querySelector('#email-error');
    let queryTypeErr = document.querySelector('#queryType-error');
    let messageErr = document.querySelector('#textarea-error');
    let checkboxErr = document.querySelector('#checkbox-error');
    

    firstNameErr.textContent = "";
    lastNameErr.textContent = "";
    emailErr.textContent = "";
    queryTypeErr.textContent = "";
    messageErr.textContent = "";
    checkboxErr.textContent = "";


    let isValid = true;

    const errorMessage = (selector, message)=>{
        selector.textContent = message;
        selector.style.color = "red";
        selector.style.fontSize = "0.5rem";
        selector.style.fontFamily = "Karla";
    }


    if(!firstName){
        errorMessage(firstNameErr,"This field is required");
        isValid = false;
    }

    if(!lastName){
        errorMessage(lastNameErr, "This field is require");
        isValid = false;
    }

    if(!email){
        errorMessage(emailErr, "Please enter a valid email address");
        isValid = false;
    }

    if(!queryType.checked){
        errorMessage(queryTypeErr, "Please select type");
        isValid = false;
    }

    if(!message){
        errorMessage(messageErr, "This field is required");
        isValid = false;

    }

    if(!checkbox.checked){
        errorMessage(checkboxErr, "Please consent to be contacted");
        isValid = false;
    }

    if(isValid){
        alert("Message Sent!\n Thanks for completing this form. We will contact you soon")
    }

});