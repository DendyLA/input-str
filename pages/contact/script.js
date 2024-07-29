const inputTel = document.querySelector("#phone");
const form = document.querySelector("#form");
const message = document.querySelector("#message");
const inputLogin = document.querySelector('#loginInput');
const inputText = document.querySelector('.input__text');
const iti = window.intlTelInput(inputTel, {
    initialCountry: "ru",
    separateDialCode: true,
    hiddenInput: () => ({ phone: "full_phone", country: "country_code" }),
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.1.0/build/js/utils.js" // just for formatting/placeholders etc
});
// inputLogin.addEventListener('DOMSubtreeModified', (e) => {
//     if(inputLogin.classList.contains('hide')){
//         inputText.classList.add('hide')
//     }else{
//         inputText.classList.remove('hide')
//     }
// })


form.onsubmit = (e) => {
    if (!iti.isValidNumber() ) {
        if(inputLogin.value.length >= 5 && !inputLogin.classList.contains('hide')){
            return true
        }else if(inputLogin.value.length < 5 && !inputLogin.classList.contains('hide')){
            // message.style = 'color:red;';
            // message.innerHTML = "Введите правильный Логин ";
            return false;
        }
        message.style = 'color:red;';
        message.innerHTML = "Неправильный номер введите верный";
        return false;
    }
};

//login
const loginParams = new URLSearchParams(window.location.search);
const loginActive = loginParams.get('login')
if (loginActive) {
    message.style = 'color:grey;';
    message.innerHTML = `Спасибо что оставили заявку: ${loginActive}`;
}

//phone
const urlParams = new URLSearchParams(window.location.search);
const fullPhone = urlParams.get('full_phone')
if (fullPhone) {
    message.style = 'color:grey;';
    message.innerHTML = `Спасибо что оставили заявку: ${fullPhone}`;
}




// Hide and show

const inputIti = document.querySelector('.phone__number_wrapper');

function hideToggle(e){
    const firstCharLogin = inputLogin.value.charAt(0);
    const firstCharTel = inputTel.value.charAt(0);
    
    // // Handle backspace for inputA
    // if (e.keyCode === '8' && inputTel.value === "") {
    //     inputLogin.classList.remove("hide");
    //     inputIti.classList.add("hide");
    //     inputLogin.focus();
    //     return;
    // }

    // Regular expressions for validation
    const alphaRegex = /^[a-zA-Z]$/;
    const digitPlusRegex = /^[0-9\+]$/;

    // Check first characters only
    if (alphaRegex.test(firstCharTel) && !alphaRegex.test(firstCharLogin)) {
        // If inputA has only letters first and inputB doesn't
        inputTel.value = '';
        inputLogin.classList.remove("hide");
        inputIti.classList.add("hide");
        //text in top of  input
        inputText.classList.remove('hide');
        inputLogin.focus();
    } else if (digitPlusRegex.test(firstCharLogin) && !digitPlusRegex.test(firstCharTel)) {
        // If inputA has digits or + first or inputB has digits or + first
        inputLogin.value = '';
        inputLogin.classList.add("hide");
        inputIti.classList.remove("hide");
        //text in top of  input
        inputText.classList.add('hide');
        inputTel.focus();
        const submitButton = document.getElementById("btn");
        submitButton.setAttribute('disabled', 'true'); // Disable button initially
    }
}
function backSpace(e){
    if (e.keyCode === 8 && inputTel.value === "") {
        inputLogin.classList.remove("hide");
        inputIti.classList.add("hide");
        inputLogin.focus();
        return;
    }
}
inputLogin.addEventListener('keyup', hideToggle);
inputTel.addEventListener('keyup', hideToggle);
inputTel.addEventListener('keydown', backSpace);



//login check

function toggleHideClass(event) {
    const submitButton = document.getElementById("btn"); // Assuming you have a submit button with id "submitButton"
    const firstCharLogin = inputLogin.value.charAt(0);
    const digitPlusRegex = /^[0-9\+]$/
    // Check inputA value length and update button state
    
    if (inputLogin.value.length < 5 && !inputLogin.classList.contains('hide') && !digitPlusRegex.test(firstCharLogin)) {
        submitButton.setAttribute('disabled', 'true');// Disable button if less than 5 characters
        message.style = 'color:red;';
        message.innerHTML = "Введите правильный Логин ";
        console.log(message.innerHTML);
    } else {
        submitButton.removeAttribute('disabled'); // Enable button if 5 or more characters
        message.innerHTML = "";
    }
    
    if (!iti.isValidNumber() && inputLogin.classList.contains('hide')) {
        submitButton.setAttribute('disabled', 'true');
        message.style = 'color:red;';
        message.innerHTML = "Введите верный номер";
        return false;
    }else if(iti.isValidNumber() && inputLogin.classList.contains('hide')){
        submitButton.removeAttribute('disabled'); // Enable button if 5 or more characters
        message.innerHTML = "";
    }
}
const submitButton = document.getElementById("btn");
submitButton.setAttribute('disabled', 'true'); // Disable button initially



inputLogin.addEventListener("input", toggleHideClass);
inputTel.addEventListener("input", toggleHideClass);