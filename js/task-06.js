const borderInputEl = document.querySelector('#validation-input');

borderInputEl.addEventListener('blur', (event) => {
    (event.currentTarget.value.length === +borderInputEl.getAttribute('data-length')) ? 
    borderInputEl.classList.add('valid') && borderInputEl.classList.remove('invalid') :
     borderInputEl.classList.add('invalid') && borderInputEl.classList.remove('valid');
}
);
