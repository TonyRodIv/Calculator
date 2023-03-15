const numbersBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const clearBtn = document.querySelector('[data-clear]');
const equalsBtn = document.querySelector('[data-equals]');
const display = document.querySelector('#display');

numbersBtn.forEach((i) => {
    i.addEventListener('click', () => {
        display.value += i.innerHTML;
        console.log(display.value)
    });
});

operationBtn.forEach((i) => {
    i.addEventListener('click', () => {
        display.value += i.innerHTML;
        console.log(display.value)
    });
});


equalsBtn.addEventListener('click', () => {
    display.value  = eval(display.value);
    console.log(display.value)
});

clearBtn.addEventListener('click', () => {
    display.value = '';
})