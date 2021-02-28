const input = document.querySelector('#validation-input');

const number = input.getAttribute('data-length');

const inputChange = e => {
    if (e.target.value.length === Number(number)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}

input.addEventListener('change', inputChange);