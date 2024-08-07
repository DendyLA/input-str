const minus = document.querySelector('.amount__minus');
const plus = document.querySelector('.amount__plus');
const amountNumber = document.querySelector('.amount__number');
const amountCurrency = document.querySelector('.amount__currency');

const takeNumber = document.querySelector('.take__number');


const switches = document.querySelectorAll('.switch__input');

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
        }
    });
}
// Attach event listener to each switch
switches.forEach((switchElement) => {
    switchElement.addEventListener('change', handleSwitchChange);
});


minus.addEventListener('click', e => {
    if( parseInt(removeSpaces(amountNumber.value)) <= 10000){
        amountNumber.value = formatNumber(10000);
        window.localStorage.setItem('total', 10000);
        return
    }
    let val = parseInt(removeSpaces(amountNumber.value));
    val--;
    amountNumber.value = formatNumber(val);

    window.localStorage.setItem('total', amountNumber.value);

    const commision = window.localStorage.getItem('commision');
    const exchange = window.localStorage.getItem('exchange');

    let takeMount = (parseInt(removeSpaces(amountNumber.value)) - parseInt(removeSpaces(commision))) * parseFloat(exchange);
    window.localStorage.setItem('take', takeMount.toFixed(2));

    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('take') + ' ' + window.localStorage.getItem('takeCurrency'));
})

plus.addEventListener('click', e => {
    let val = parseInt(removeSpaces(amountNumber.value));
    val++;
    amountNumber.value = formatNumber(val);
    
    window.localStorage.setItem('total', parseInt(removeSpaces(amountNumber.value)));

    const commision = window.localStorage.getItem('commision');
    const exchange = window.localStorage.getItem('exchange');

    let takeMount = (parseInt(removeSpaces(amountNumber.value)) - parseInt(removeSpaces(commision))) * parseFloat(exchange);
    window.localStorage.setItem('take', takeMount.toFixed(2));

    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('take') + ' ' + window.localStorage.getItem('takeCurrency'));
})

amountNumber.addEventListener('change', e=>{
    if(isNaN(  parseInt(removeSpaces(e.target.value)) )){
        amountNumber.value = window.localStorage.getItem('total');
        console.log('a')
        return
    }else if( parseInt(removeSpaces(e.target.value)) <= 9999){
        amountNumber.value = formatNumber(10000);
        window.localStorage.setItem('total', 10000);
    }
    let val = parseInt(removeSpaces(amountNumber.value));
    amountNumber.value = formatNumber(val);
    
    window.localStorage.setItem('total', parseInt(removeSpaces(amountNumber.value)));

    const commision = window.localStorage.getItem('commision');
    const exchange = window.localStorage.getItem('exchange');

    let takeMount = (parseInt(removeSpaces(amountNumber.value)) - parseInt(removeSpaces(commision))) * parseFloat(exchange);
    window.localStorage.setItem('take', takeMount.toFixed(2));

    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('take') + ' ' + window.localStorage.getItem('takeCurrency'));
})

window.onload = function() {
    amountNumber.value = formatNumber(window.localStorage.getItem('total'));
    amountCurrency.innerHTML = window.localStorage.getItem('sendCurrency');
    let val = parseInt(removeSpaces(amountNumber.value));
    amountNumber.value = formatNumber(val);
    
    window.localStorage.setItem('total', parseInt(removeSpaces(amountNumber.value)));

    const commision = window.localStorage.getItem('commision');
    const exchange = window.localStorage.getItem('exchange');

    let takeMount = (parseInt(removeSpaces(amountNumber.value)) - parseInt(removeSpaces(commision))) * parseFloat(exchange);
    window.localStorage.setItem('take', takeMount.toFixed(2));

    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('take') + ' ' + window.localStorage.getItem('takeCurrency'));
}


