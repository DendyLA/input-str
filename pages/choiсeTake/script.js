const minus = document.querySelector('.amount__minus');
const plus = document.querySelector('.amount__plus');
const amountNumber = document.querySelector('.amount__number');
const amountCurrency = document.querySelector('.amount__currency');

const takeNumber = document.querySelector('.take__number');

const btn = document.querySelector('.btn');
const link = document.querySelector('.btn__link');

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

//take data
async function getExchange(from, to){
	const crypto = `https://api.coinbase.com/v2/prices/${from}-${to}/spot`
	const getData = `https://api.tinkoff.ru/v1/currency_rates?from=${from}&to=${to}`;
	if(from === 'BTC' || from === 'USDT' || to === 'BTC' || to === 'USDT'){
		try{
			const res = await fetch(crypto);
			if(!res.ok){
				throw new Error(`Response status: ${res.status}`)
			}
			const data = await res.json();
			const final = data;
			return final.data.amount
		}catch(error){
			console.error(error.message);
		}
	}else{
		try{
			const res = await fetch(getData);
			if(!res.ok){
				throw new Error(`Response status: ${res.status}`)
			}
			const data = await res.json();
			const final = data.payload.rates[0].buy;
			return final
		}catch(error){
			console.error(error.message);
		}
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
            btn.removeAttribute('disabled')
        }

        if(cash.classList.contains('active') || other.classList.contains('active')){
            link.setAttribute('href', '../chat/chat.html')
        }else{
            link.setAttribute('href', '../takeInfo/takeInfo.html')
        }
    });
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
    amountNumber.value = formatNumber(window.localStorage.getItem('take'));
    amountCurrency.innerHTML = window.localStorage.getItem('takeCurrency');
    let val = parseInt(removeSpaces(amountNumber.value));
    val--
    amountNumber.value = formatNumber(val);
    
    const data = await getExchange(window.localStorage.getItem('sendCurrency'), window.localStorage.getItem('takeCurrency'));
    const dataRever = await getExchange(window.localStorage.getItem('takeCurrency'), window.localStorage.getItem('sendCurrency'));
    amountNumber.value = formatNumber(amountNumber.value);
    amountCurrency.innerHTML = window.localStorage.getItem('takeCurrency');
    
    
    window.localStorage.setItem('take', parseInt(removeSpaces(amountNumber.value)));

    let formul = formulData.a * parseInt(val) / formulData.b * formulData.c * formulData.d * formulData.e - (formulData.f - formulData.g) * dataRever / formulData.h;
    
    
    const cur = formul;

    let takeMount = parseInt(cur) * parseFloat(dataRever);
    let commision = val - formul;
    commision = commision * parseFloat(dataRever);
    let percent =  takeMount + commision + commision;

    window.localStorage.setItem('total', percent.toFixed());

    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('total') + ' ' + window.localStorage.getItem('sendCurrency'));
})

plus.addEventListener('click', async e => {
    let formulData = null;
	await fetch('/input/pages/formulManage/getFormul.php')
    .then(response => response.json()) // Преобразуем ответ в формат JSON
    .then(data => {
       formulData = data; // Выводим данные в консоль
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
    amountNumber.value = formatNumber(window.localStorage.getItem('take'));
    amountCurrency.innerHTML = window.localStorage.getItem('takeCurrency');
    let val = parseInt(removeSpaces(amountNumber.value));
    val++
    amountNumber.value = formatNumber(val);
    
    const data = await getExchange(window.localStorage.getItem('sendCurrency'), window.localStorage.getItem('takeCurrency'));
    const dataRever = await getExchange(window.localStorage.getItem('takeCurrency'), window.localStorage.getItem('sendCurrency'));
    amountNumber.value = formatNumber(amountNumber.value);
    amountCurrency.innerHTML = window.localStorage.getItem('takeCurrency');
    
    
    window.localStorage.setItem('take', parseInt(removeSpaces(amountNumber.value)));

    let formul = formulData.a * parseInt(val) / formulData.b * formulData.c * formulData.d * formulData.e - (formulData.f - formulData.g) * dataRever / formulData.h;
    
    
    const cur = formul;

    let takeMount = parseInt(cur) * parseFloat(dataRever);
    let commision = val - formul;
    commision = commision * parseFloat(dataRever);
    let percent =  takeMount + commision + commision;

    window.localStorage.setItem('total', percent.toFixed());

    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('total') + ' ' + window.localStorage.getItem('sendCurrency'));
})

amountNumber.addEventListener('change', async e=>{
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
        amountNumber.value = formatNumber(window.localStorage.getItem('take'));
        return
    }
    // else if( parseInt(removeSpaces(e.target.value)) <= 9999){
    //     amountNumber.value = formatNumber(10000);
    //     window.localStorage.setItem('total', 10000);
    // }
    const data = await getExchange(window.localStorage.getItem('sendCurrency'), window.localStorage.getItem('takeCurrency'));
    const dataRever = await getExchange(window.localStorage.getItem('takeCurrency'), window.localStorage.getItem('sendCurrency'));
    amountNumber.value = formatNumber(amountNumber.value);
    amountCurrency.innerHTML = window.localStorage.getItem('takeCurrency');
    let val = parseInt(removeSpaces(amountNumber.value));
    amountNumber.value = formatNumber(val);
    
    window.localStorage.setItem('take', parseInt(removeSpaces(amountNumber.value)));

    let formul = formulData.a * parseInt(val) / formulData.b * formulData.c * formulData.d * formulData.e - (formulData.f - formulData.g) * dataRever / formulData.h;
    
    
    const cur = formul;

    let takeMount = parseInt(cur) * parseFloat(dataRever);
    let commision = val - formul;
    commision = commision * parseFloat(dataRever);
    let percent =  takeMount + commision + commision;

    
    window.localStorage.setItem('total', percent.toFixed());

    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('total') + ' ' + window.localStorage.getItem('sendCurrency'));
})






window.onload = async function() {
    let formulData = null;
	await fetch('/input/pages/formulManage/getFormul.php')
    .then(response => response.json()) // Преобразуем ответ в формат JSON
    .then(data => {
       formulData = data; // Выводим данные в консоль
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
    amountNumber.value = formatNumber(window.localStorage.getItem('take'));
    amountCurrency.innerHTML = window.localStorage.getItem('takeCurrency');
    let val = window.localStorage.getItem('total');;

    

    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('total') + ' ' + window.localStorage.getItem('sendCurrency'));




    if(localStorage.getItem('sendCurrency') === 'RUB'){
        fromCard.classList.add('hide')
        crypto.classList.add('hide')


    }else if(localStorage.getItem('sendCurrency') === 'USD' || localStorage.getItem('sendCurrency') === 'EUR'){
        toBank.classList.add('hide')
        crypto.classList.add('hide')
        payPal.classList.add('hide')
        

    }
}


