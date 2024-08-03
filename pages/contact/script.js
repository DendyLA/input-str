const inputTel = document.querySelector("#phone");
const form = document.querySelector("#form");
const message = document.querySelector("#message");

const inputLogin = document.querySelector('#loginInput');
const inputText = document.querySelector('.input__text');

const inputName = document.querySelector('#input__name')
const messageName = document.querySelector('.message__name')
const search = document.querySelector('.search');

const emailInput = document.querySelector('#emailInput')
const emailInputWrapper = document.querySelector('.email__input')

const otherInput = document.querySelector('#otherInput');
const otherInputWrapper = document.querySelector('.other__input');

const dropdownButtonThird = document.querySelector('.dropdown__button_third');
const dropdownMenuThird = document.querySelector('.dropdown__menu_third');


let validName = false;
//validate Name
inputName.addEventListener('input', e => {
    // Регулярное выражение для имени
    const namePattern = /^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{1,50})$/;

    if (namePattern.test(e.target.value)) {
        messageName.textContent = "";
        validName = true;
    } else {
        messageName.textContent = "Введите верное имя";
        messageName.style.color = "red";
        validName = false;
    }
})


//inputs with select - Third()

for(let i of dropdownMenuThird.children){
	i.addEventListener('click', (e) => {
		e.preventDefault();
		if(e.target.tagName === 'A'){
			dropdownButtonThird.innerHTML = e.target.innerHTML;
		}else if(e.target === search){
			return
		}else{
			dropdownButtonThird.innerHTML = e.target.parentElement.innerHTML;
		}

        if(dropdownButtonThird.innerText.trim() === 'Email'){
            otherInputWrapper.classList.add('hide');
            emailInputWrapper.classList.remove('hide');
            inputLogin.classList.add("hide");
            inputIti.classList.add("hide");
            inputText.classList.add('hide');
        }else if(dropdownButtonThird.innerText.trim() === 'Другое'){
            otherInputWrapper.classList.remove('hide');
            emailInputWrapper.classList.add('hide');
            inputLogin.classList.add("hide");
            inputIti.classList.add("hide");
            inputText.classList.add('hide');
        }else if(dropdownButtonThird.innerText.trim() === 'WhatsApp'){
            otherInputWrapper.classList.add('hide');
            emailInputWrapper.classList.add('hide');
            inputLogin.classList.add("hide");
            inputIti.classList.remove("hide");
            inputText.classList.add('hide');
            inputTel.removeEventListener('keydown', backSpace);
        }else{
            otherInputWrapper.classList.add('hide');
            emailInputWrapper.classList.add('hide');
            inputLogin.classList.remove("hide");
            inputIti.classList.add("hide");
            inputText.classList.remove('hide');
            inputTel.addEventListener('keydown', backSpace);
        }
	})
}
//validate Email
function validateEmail(e) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(e.target.value)) {
        message.innerHTML = "";
        submitButton.removeAttribute('disabled');
    } else {
        message.style = 'color:red;';
        message.innerHTML = "Введите правильный Email ";
    }
}
emailInput.addEventListener('input', validateEmail);
//other Input validate
function validateOther(e) {

    if (e.target.value.length > 1) {
        message.innerHTML = "";
        submitButton.removeAttribute('disabled');
    } else {
        message.style = 'color:red;';
        message.innerHTML = "Введите верный способ связи ";
    }
}
otherInput.addEventListener('input', validateOther);

//iti phone number input !!!!!!!!!!!!!!!!!!!!!!!
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

//Validate from Itti

// form.onsubmit = (e) => {
//     if (!iti.isValidNumber() ) {
//         if(inputLogin.value.length >= 5 && !inputLogin.classList.contains('hide')){
//             return true
//         }else if(inputLogin.value.length < 5 && !inputLogin.classList.contains('hide')){
//             // message.style = 'color:red;';
//             // message.innerHTML = "Введите правильный Логин ";
//             return false;
//         }
//         message.style = 'color:red;';
//         message.innerHTML = "Неправильный номер введите верный";
//         return false;
//     }
// };

//name
const loginParams = new URLSearchParams(window.location.search);
const nameActive = loginParams.get('name')
if (nameActive) {
    message.style = 'color:grey;';
    message.innerHTML = `Спасибо что оставили заявку: ${nameActive}`;
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
        emailInputWrapper.classList.add('hide')
        otherInputWrapper.classList.add('hide');
        //text in top of  input
        inputText.classList.remove('hide');
        inputLogin.focus();
    } else if (digitPlusRegex.test(firstCharLogin) && !digitPlusRegex.test(firstCharTel)) {
        // If inputA has digits or + first or inputB has digits or + first
        inputLogin.value = '';
        inputLogin.classList.add("hide");
        inputIti.classList.remove("hide");
        emailInputWrapper.classList.add('hide')
        otherInputWrapper.classList.add('hide');
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
        //input text top of input
        inputText.classList.remove('hide');
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


//validate Form

form.addEventListener('submit', e => {
    if(validName){
        return true
    }else {
        e.preventDefault();
        messageName.textContent = "Введите имя";
        messageName.style.color = "red";
        submitButton.removeAttribute('disabled');
        return false
    }

})

window.onload = function() {
    inputName.value = '';
    inputTel.value = '';
    inputLogin.value = '';
}