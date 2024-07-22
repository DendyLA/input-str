function updateSymbol() {
    const selectedOption = document.querySelector('.currency-selector option:selected');
    // const symbolElement = document.querySelector('.currency-symbol');
    const amountElement = document.querySelector('.currency-amount');
    const addonFixedElement = document.querySelector('.currency-addon-fixed');

    // symbolElement.textContent = selectedOption.dataset.symbol;
    amountElement.placeholder = selectedOption.dataset.placeholder;
    addonFixedElement.textContent = selectedOption.textContent;
}

document.querySelector('.currency-selector').addEventListener('change', updateSymbol);

  // Initial update on page load
updateSymbol();

// Дизайн не важен. Мы потом приведём его к фирменному.
// Нужно пока собрать функционал Чтобы при вводе цифры в ЛЮБОЕ поле, во втором поле происходил расчет.