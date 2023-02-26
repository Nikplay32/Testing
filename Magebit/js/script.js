var input = document.getElementById("email_form");
var input2 = document.getElementById("email");
var error = document.getElementById("error");
let button = document.getElementById("arrow");
var y = document.getElementById("check");


input.addEventListener('submit', ValidateEmail);

function ValidateEmail(event) {
    const knopka = document.querySelector('.check:checked') !== null;
    let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

    if(input2.value.match(mailRegex)){
        input2.style.borderColor = '#4066A5'
        error.style.display = 'none';
    } else {
        error.innerHTML = "Please provide a valid e-mail address";
        error.style.display = 'block';
        input2.style.borderColor = '#B80808'
        button.disabled;
    }
    if(input2.value.endsWith('.co')) {
        error.innerHTML = "We are not accepting subscriptions from Colombia emails";
        error.style.display = 'block';
        input2.style.borderColor = '#B80808'
        button.disabled;
    } else if(knopka == false) {
        error.style.display = 'block';
        input2.style.borderColor = '#B80808'
        error.innerHTML = "Please accept terms and conditions";
        button.disabled;
    }
    if(input2 == "") {
        error.style.display = 'block';
        input2.style.borderColor = '#B80808'
        error.innerHTML = "Email address is required";
        button.disabled;
    }
    event.preventDefault()
}

