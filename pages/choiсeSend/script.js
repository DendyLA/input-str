const minus = document.querySelector('.amount__minus');
const plus = document.querySelector('.amount__plus');
const amountNumber = document.querySelector('.amount__number');
const amountCurrency = document.querySelector('.amount__currency');

const takeNumber = document.querySelector('.take__number');

const btn = document.querySelector('.btn');
const link = document.querySelector('.btn__link')

const switches = document.querySelectorAll('.switch__input');

const toBank = document.querySelector('.toBank');
const fromCard = document.querySelector('.fromCard');
const payPal = document.querySelector('.payPal');
const crypto = document.querySelector('.crypto');
const cash = document.querySelector('.cash');
const other = document.querySelector('.other');


function formatNumber(number) {
	return  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
function removeSpaces(str) {
	return str.replace(/\s+/g, '');
}
// Function to handle the checkbox change event
function handleSwitchChange(event) {
    // Если текущий чекбокс уже активен и его пытаются отключить, ничего не делаем
    if (event.target.checked === false) {
        event.target.checked = true;
        return;
    }
    
    // Проход по всем switch элементам
    switches.forEach((switchElement) => {
        if (switchElement !== event.target) {
            // Убираем чек у других switch
            switchElement.checked = false;
            // Убираем класс 'active' у других switch
            switchElement.closest('.choice__switch').classList.remove('active');
        } else {
            // Добавляем класс 'active' текущему switch
            switchElement.closest('.choice__switch').classList.add('active');
            btn.removeAttribute('disabled')
        }
    });

    if(cash.classList.contains('active') || other.classList.contains('active')){
        link.setAttribute('href', '../chat/chat.html')
    }else{
        link.setAttribute('href', '../choiсeTake/choiсe.html')
    }

}
// Attach event listener to each switch
switches.forEach((switchElement) => {
    // Слушатель для изменения состояния чекбокса
    switchElement.addEventListener('change', handleSwitchChange);

    // Слушатель для клика на родительский элемент
    switchElement.closest('.choice__switch').addEventListener('click', () => {
        switchElement.checked = !switchElement.checked; // Переключаем состояние чекбокса
        handleSwitchChange({ target: switchElement }); // Вызываем функцию обработки
    });
});


minus.addEventListener('click', async e => {
    //take data from formul
	let formulData = null;
	await fetch('/input/pages/formulManage/getFormul.php')
    .then(response => response.json()) // Преобразуем ответ в формат JSON
    .then(data => {
       formulData = data; // Выводим данные в консоль
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
    // if( parseInt(removeSpaces(amountNumber.value)) <= 10000){
    //     amountNumber.value = formatNumber(10000);
    //     window.localStorage.setItem('total', 10000);
    //     return
    // }
    let val = parseInt(removeSpaces(amountNumber.value));
    val--;
    amountNumber.value = formatNumber(val);

    window.localStorage.setItem('total', amountNumber.value);

    const exchange = window.localStorage.getItem('exchange');
    let formul = formulData.a * parseInt(val) / formulData.b * formulData.c * formulData.d * formulData.e - (formulData.f - formulData.g) * exchange / formulData.h;
    
    let total = formul * exchange;
    window.localStorage.setItem('take', total.toFixed(2));
    window.localStorage.setItem('formul', formul);
    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('take') + ' ' + window.localStorage.getItem('takeCurrency'));
})

plus.addEventListener('click', async e => {
    //take data from formul
	let formulData = null;
	await fetch('/input/pages/formulManage/getFormul.php')
    .then(response => response.json()) // Преобразуем ответ в формат JSON
    .then(data => {
       formulData = data; // Выводим данные в консоль
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
    let val = parseInt(removeSpaces(amountNumber.value));
    val++;
    amountNumber.value = formatNumber(val);
    
    window.localStorage.setItem('total', parseInt(removeSpaces(amountNumber.value)));

    const exchange = window.localStorage.getItem('exchange');
    let formul = formulData.a * parseInt(val) / formulData.b * formulData.c * formulData.d * formulData.e - (formulData.f - formulData.g) * exchange / formulData.h;
    
    let total = formul * exchange;
    window.localStorage.setItem('take', total.toFixed(2));
    window.localStorage.setItem('formul', formul);
    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('take') + ' ' + window.localStorage.getItem('takeCurrency'));
})

amountNumber.addEventListener('change', async e=>{
    //take data from formul
	let formulData = null;
	await fetch('/input/pages/formulManage/getFormul.php')
    .then(response => response.json()) // Преобразуем ответ в формат JSON
    .then(data => {
       formulData = data; // Выводим данные в консоль
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
    if(isNaN(  parseInt(removeSpaces(e.target.value)) )){
        amountNumber.value = window.localStorage.getItem('total');
        return
    }
    // else if( parseInt(removeSpaces(e.target.value)) <= 9999){
    //     amountNumber.value = formatNumber(10000);
    //     window.localStorage.setItem('total', 10000);
    // }
    let val = parseInt(removeSpaces(amountNumber.value));
    amountNumber.value = formatNumber(val);
    
    window.localStorage.setItem('total', parseInt(removeSpaces(amountNumber.value)));

    const exchange = window.localStorage.getItem('exchange');
    let formul = formulData.a * parseInt(val) / formulData.b * formulData.c * formulData.d * formulData.e - (formulData.f - formulData.g) * exchange / formulData.h;
    
    let total = formul * exchange;
    window.localStorage.setItem('take', total.toFixed(2));
    window.localStorage.setItem('formul', formul);
    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('take') + ' ' + window.localStorage.getItem('takeCurrency'));
})



window.onload = async function() {
    //take data from formul
	let formulData = null;
	await fetch('/input/pages/formulManage/getFormul.php')
    .then(response => response.json()) // Преобразуем ответ в формат JSON
    .then(data => {
       formulData = data; // Выводим данные в консоль
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
    amountNumber.value = formatNumber(window.localStorage.getItem('total'));
    amountCurrency.innerHTML = window.localStorage.getItem('sendCurrency');
    let val = parseInt(removeSpaces(amountNumber.value));
    amountNumber.value = formatNumber(val);
    

    window.localStorage.setItem('total', parseInt(removeSpaces(amountNumber.value)));

    
    const exchange = window.localStorage.getItem('exchange');
    let formul = formulData.a * parseInt(val) / formulData.b * formulData.c * formulData.d * formulData.e - (formulData.f - formulData.g) * exchange / formulData.h;
    
    let total = formul * exchange;
    window.localStorage.setItem('take', total.toFixed(2));
    
    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('take') + ' ' + window.localStorage.getItem('takeCurrency'));


    window.localStorage.setItem('formul', formul);
    if(localStorage.getItem('sendCurrency') === 'RUB'){
        toBank.classList.add('hide')
        payPal.classList.add('hide')
        crypto.classList.add('hide')

    }else if(localStorage.getItem('sendCurrency') === 'USD' || localStorage.getItem('sendCurrency') === 'EUR'){
        fromCard.classList.add('hide')
        crypto.classList.add('hide')

    }

}


