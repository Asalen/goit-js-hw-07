let input = document.querySelector('#name-input');
input.addEventListener('input', inputChange);

let output = document.querySelector('#name-output');

function inputChange(event) {
    input = event.currentTarget.value;
    input !== ' ' ? (output.innerText = input) : 'незнакомец';
}