const borderInputEl = document.querySelector('#validation-input');

borderInputEl.addEventListener('blur', (event) => {
    if (event.currentTarget.value.trim().length === Number(borderInputEl.getAttribute('data-length'))){
    borderInputEl.classList.add('valid') 
    borderInputEl.classList.remove('invalid')
}else {
     borderInputEl.classList.add('invalid') 
      borderInputEl.classList.remove('valid');}
}
);
