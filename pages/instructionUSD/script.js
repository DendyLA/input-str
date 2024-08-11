const copyButton1 = document.querySelector('#copy1');
const copyButton2= document.querySelector('#copy2');
const copyButton3 = document.querySelector('#copy3');
const copyButton4 = document.querySelector('#copy4');
const copyButton5 = document.querySelector('#copy5');

const sendNumber = document.querySelector('.header__send');
const currency = document.querySelector('.header__send span');

copyButton1.addEventListener('click', e => {
    navigator.clipboard.writeText(document.querySelector(".main__item_card").innerHTML).then(function() {
        // Show the modal
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
        setTimeout(function() {
        myModal.hide();
        }, 2000);
    }).catch(function(error) {
        console.error('Error:', error);
    });
    
})
copyButton2.addEventListener('click', e => {
    navigator.clipboard.writeText(document.querySelector(".main__item_iban").innerHTML).then(function() {
        // Show the modal
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
        setTimeout(function() {
        myModal.hide();
        }, 2000);
    }).catch(function(error) {
        console.error('Error:', error);
    });
    
})
copyButton3.addEventListener('click', e => {
    navigator.clipboard.writeText(document.querySelector(".main__item_bank").innerHTML).then(function() {
        // Show the modal
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
        setTimeout(function() {
        myModal.hide();
        }, 2000);
    }).catch(function(error) {
        console.error('Error:', error);
    });
    
})
copyButton4.addEventListener('click', e => {
    navigator.clipboard.writeText(document.querySelector(".main__item_swift").innerHTML).then(function() {
        // Show the modal
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
        setTimeout(function() {
        myModal.hide();
        }, 2000);
    }).catch(function(error) {
        console.error('Error:', error);
    });
    
})
copyButton5.addEventListener('click', e => {
    navigator.clipboard.writeText(document.querySelector(".code__text span").innerHTML).then(function() {
        // Show the modal
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
        setTimeout(function() {
        myModal.hide();
        }, 2000);
    }).catch(function(error) {
        console.error('Error:', error);
    });
    
})

function formatNumber(number) {
	return  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

window.onload = function(){
    sendNumber.firstChild.nodeValue = formatNumber(window.localStorage.getItem('total')) + ' '
    currency.innerHTML = window.localStorage.getItem('sendCurrency')
}


