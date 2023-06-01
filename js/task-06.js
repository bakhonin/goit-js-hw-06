const borderInputEl = document.querySelector('#validation-input');

borderInputEl.addEventListener('blur', (event) => {
    if (event.currentTarget.value.trim().length === +borderInputEl.getAttribute('data-length')){
    borderInputEl.classList.add('valid') && borderInputEl.classList.remove('invalid')
}else {
     borderInputEl.classList.add('invalid') && borderInputEl.classList.remove('valid');}
}
);
