const form = document.querySelector("#contact-form");
const firstName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

function submitForm(event) {
    event.preventDefault();

    if(validate()) {
        messageSentAlert()
    }
    else showError()
}

function showError() {
    nameError.style.display = checkLength(firstName.value, 1) ? "none" : "block";
    subjectError.style.display = checkLength(subject.value, 5) ? "none" : "block";
    emailError.style.display = validateEmail(email.value) ? "none" : "block";
    messageError.style.display = checkLength(message.value, 25) ? "none" : "block";
}

function checkLength (value, len) {
    return value.trim().length >= len ? true : false
}

const validateEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    const expressionMatches = regEx.test(email);
    return expressionMatches;
}

function validate() {
    if(!checkLength(firstName.value, 1)) return false 
    if(!checkLength(subject.value, 5)) return false
    if(!validateEmail(email.value)) return false
    if(!checkLength(message.value, 25)) return false
    return true
}

form.addEventListener ("submit", submitForm);

function messageSentAlert() {
    alert("")
}