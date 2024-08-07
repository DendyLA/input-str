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
    // Loop through all switches
    switches.forEach((switchElement) => {
        if (switchElement !== event.target) {
            // Uncheck other switches
            switchElement.checked = false;
            // Remove 'active' class from other switches
            switchElement.closest('.choice__switch').classList.remove('active');
        } else {
            // Add 'active' class to the current switch
            switchElement.closest('.choice__switch').classList.add('active');
        }
    });
}
// Attach event listener to each switch
switches.forEach((switchElement) => {
    switchElement.addEventListener('change', handleSwitchChange);
});


minus.addEventListener('click', e => {
    let val = removeSpaces(amountNumber.innerHTML);
    val--;
    amountNumber.innerHTML = formatNumber(val);

    window.localStorage.setItem('total', amountNumber.innerHTML);

    const commision = window.localStorage.getItem('commision');
    const exchange = window.localStorage.getItem('exchange');

    let takeMount = (removeSpaces(amountNumber.innerHTML) - commision) * exchange;

    window.localStorage.setItem('take', takeMount.toFixed(2));

    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('take') + ' ' + window.localStorage.getItem('takeCurrency'));
})

plus.addEventListener('click', e => {
    let val = removeSpaces(amountNumber.innerHTML);
    val++;
    amountNumber.innerHTML = formatNumber(val);
    
    window.localStorage.setItem('total', amountNumber.innerHTML);

    const commision = window.localStorage.getItem('commision');
    const exchange = window.localStorage.getItem('exchange');

    let takeMount = (removeSpaces(amountNumber.innerHTML) - commision) * exchange;

    window.localStorage.setItem('take', takeMount.toFixed(2));

    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('take') + ' ' + window.localStorage.getItem('takeCurrency'));
})


window.onload = function() {
    amountNumber.innerHTML = formatNumber(window.localStorage.getItem('total'));
    amountCurrency.innerHTML = window.localStorage.getItem('sendCurrency');

    takeNumber.innerHTML = formatNumber(window.localStorage.getItem('take') + ' ' + window.localStorage.getItem('takeCurrency'));
}


