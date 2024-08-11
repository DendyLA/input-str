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

//take data
async function getExchange(currency){
	const getData = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;
	try{
		const res = await fetch(getData);
		if(!res.ok){
			throw new Error(`Response status: ${res.status}`)
		}
		const data = await res.json();
		return data[currency]
	}catch(error){
		console.error(error.message);
	}

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


minus.addEventListener('click', async e => {
    // if( parseInt(removeSpaces(amountNumber.value)) <= 10000){
    //     amountNumber.value = formatNumber(10000);
    //     window.localStorage.setItem('total', 10000);
    //     return
    // }
    amountNumber.value = formatNumber(window.localStorage.getItem('take'));
    amountCurrency.innerHTML = window.localStorage.getItem('takeCurrency');
    let val = parseInt(removeSpaces(amountNumber.value));
    val--
    amountNumber.value = formatNumber(val);
    
    window.localStorage.setItem('take', parseInt(removeSpaces(amountNumber.value)));

    const commision = window.localStorage.getItem('commision');
    const data = await getExchange(window.localStorage.getItem('takeCurrency').toLowerCase());
    const exchange = data[window.localStorage.getItem('sendCurrency').toLowerCase()];

    let takeMount = parseInt(removeSpaces(amountNumber.value)) * parseFloat(exchange);
    let percent = parseInt(takeMount)  * parseFloat(removeSpaces(commision));
    percent = parseInt(takeMount) + percent;
    
    window.localStorage.setItem('total', percent.toFixed());

    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('total') + ' ' + window.localStorage.getItem('sendCurrency'));
})

plus.addEventListener('click', async e => {
    amountNumber.value = formatNumber(window.localStorage.getItem('take'));
    amountCurrency.innerHTML = window.localStorage.getItem('takeCurrency');
    let val = parseInt(removeSpaces(amountNumber.value));
    val++
    amountNumber.value = formatNumber(val);
    
    window.localStorage.setItem('take', parseInt(removeSpaces(amountNumber.value)));

    const commision = window.localStorage.getItem('commision');
    const data = await getExchange(window.localStorage.getItem('takeCurrency').toLowerCase());
    const exchange = data[window.localStorage.getItem('sendCurrency').toLowerCase()];

    let takeMount = parseInt(removeSpaces(amountNumber.value)) * parseFloat(exchange);
    let percent = parseInt(takeMount)  * parseFloat(removeSpaces(commision));
    percent = parseInt(takeMount) + percent;
    
    window.localStorage.setItem('total', percent.toFixed());

    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('total') + ' ' + window.localStorage.getItem('sendCurrency'));
})

amountNumber.addEventListener('change', async e=>{
    if(isNaN(  parseInt(removeSpaces(e.target.value)) )){
        amountNumber.value = formatNumber(window.localStorage.getItem('take'));
        return
    }
    // else if( parseInt(removeSpaces(e.target.value)) <= 9999){
    //     amountNumber.value = formatNumber(10000);
    //     window.localStorage.setItem('total', 10000);
    // }
    
    amountNumber.value = formatNumber(amountNumber.value);
    amountCurrency.innerHTML = window.localStorage.getItem('takeCurrency');
    let val = parseInt(removeSpaces(amountNumber.value));
    amountNumber.value = formatNumber(val);
    
    window.localStorage.setItem('take', parseInt(removeSpaces(amountNumber.value)));

    const commision = window.localStorage.getItem('commision');
    const data = await getExchange(window.localStorage.getItem('takeCurrency').toLowerCase());
    const exchange = data[window.localStorage.getItem('sendCurrency').toLowerCase()];

    let takeMount = parseInt(removeSpaces(amountNumber.value)) * parseFloat(exchange);
    let percent = parseInt(takeMount)  * parseFloat(removeSpaces(commision));
    percent = parseInt(takeMount) + percent;
    
    window.localStorage.setItem('total', percent.toFixed());

    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('total') + ' ' + window.localStorage.getItem('sendCurrency'));
})


const toBank = document.querySelector('.toBank');
const fromCard = document.querySelector('.fromCard');
const payPal = document.querySelector('.payPal');
const crypto = document.querySelector('.crypto');
const cash = document.querySelector('.cash');
const other = document.querySelector('.other');



window.onload = async function() {
    amountNumber.value = formatNumber(window.localStorage.getItem('take'));
    amountCurrency.innerHTML = window.localStorage.getItem('takeCurrency');
    let val = parseInt(removeSpaces(amountNumber.value));
    amountNumber.value = formatNumber(val);
    
    window.localStorage.setItem('take', parseInt(removeSpaces(amountNumber.value)));

    const commision = window.localStorage.getItem('commision');
    const data = await getExchange(window.localStorage.getItem('takeCurrency').toLowerCase());
    const exchange = data[window.localStorage.getItem('sendCurrency').toLowerCase()];

    let takeMount = parseInt(removeSpaces(amountNumber.value)) * parseFloat(exchange);
    let percent = parseInt(takeMount)  * parseFloat(removeSpaces(commision));
    percent = parseInt(takeMount) + percent;
    
    window.localStorage.setItem('total', percent.toFixed());

    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('total') + ' ' + window.localStorage.getItem('sendCurrency'));




    if(localStorage.getItem('sendCurrency') === 'RUB'){
        fromCard.classList.add('hide')
        crypto.classList.add('hide')

        toBank.classList.add('active')
        document.querySelector('.toBank input').setAttribute('checked', true)
    }else if(localStorage.getItem('sendCurrency') === 'USD' || localStorage.getItem('sendCurrency') === 'EUR'){
        toBank.classList.add('hide')
        crypto.classList.add('hide')
        payPal.classList.add('hide')
        
        fromCard.classList.add('active')
        document.querySelector('.fromCard input').setAttribute('checked', true)
    }
}


