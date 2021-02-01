const btn = document.querySelector('.btn');
const emailInput = document.querySelector('#email');
const invaild = document.querySelectorAll('.invaild')
const regexPatten = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
btn.addEventListener('click', e => {
    if (!emailInput.value.match(regexPatten)) {
        invaild.forEach(elm => elm.style.display = 'block')
        e.preventDefault()
    }
});