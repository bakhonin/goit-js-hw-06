let counterValue = 0;

const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
};

const spanEl = document.querySelector('#value');


refs.incrementBtn.addEventListener('click', onIncrementBtn);
refs.decrementBtn.addEventListener('click', onDecrementBtn);

function onIncrementBtn() {
  counterValue += 1;
  spanEl.textContent = counterValue;
}

function onDecrementBtn() {
 counterValue -= 1;
 spanEl.textContent = counterValue;
}
