const formButton = document.querySelector('.form_button');

const nameInput = document.querySelector('#input__name');
const reqInput = document.querySelector('#loginInput')

const message = document.querySelector('.message')
const messageName = document.querySelector('.message__name')

const link = document.querySelector('.btn__link');

formButton.addEventListener('click', e => {

    if(nameInput.value === '' && reqInput.value === ''){
        e.preventDefault()
        messageName.textContent = "Введите имя";
        messageName.style.color = "red";
        message.textContent = 'Введите верные данные'
        message.style.color = "red";
        return false
    }else if(nameInput.value === ''){
        e.preventDefault()
        messageName.textContent = "Введите имя";
        messageName.style.color = "red";
        return false
    }else if(reqInput.value === ''){
        e.preventDefault()
        message.textContent = 'Введите верные данные'
        message.style.color = "red";
        return false
    }else{
        messageName.textContent = "";
        return true
    }
})

nameInput.addEventListener('input', e => {
    if(e.target.value !== ''){
        messageName.textContent = ''
    }else{
        messageName.textContent = "Введите имя";
        messageName.style.color = "red";
    }
})

reqInput.addEventListener('input', e => {
    if(e.target.value !== ''){
        message.textContent = ''
    }else{
        message.textContent = "Введите верные данные";
        message.style.color = "red";
    }

})


window.onload = () => {

    if(localStorage.getItem('sendCurrency') === 'RUB'){
        link.setAttribute('href', '../instruction/instruction.html')
    }else if(localStorage.getItem('sendCurrency') === 'USD' || localStorage.getItem('sendCurrency') === 'EUR'){
        link.setAttribute('href', '../instructionUSD/instruction.html')
    }else if(localStorage.getItem('sendCurrency') === 'BTC' || localStorage.getItem('sendCurrency') === 'USDT'){
        link.setAttribute('href', '../instructionCrypto/instruction.html')
    }
}