const form = document.querySelector("#contact-form");
const firstName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

function validateForm(event) {
    event.preventDefault();

    // nameError.style.display = this.name.value.trim().length < 1 ? "block" : "none";
    nameError.style.display = checkLength(firstName.value, 0) ? "none" : "block";
    subjectError.style.display = checkLength(subject.value, 5) ? "none" : "block";
    emailError.style.display = validateEmail(email.value) ? "none" : "block";
    messageError.style.display = checkLength(message.value, 25) ? "none" : "block";
}

function checkLength (value, len) {
    return (value.trim().length > len ? true : false)
}

const validateEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    const expressionMatches = regEx.test(email);
    return expressionMatches;
}

form.addEventListener ("submit", validateForm);

// function messageSentAlert() {
//     alert("Thank you for contacting us. A copy of your message has been sent to your email.")
// }