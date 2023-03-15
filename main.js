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
    let result = eval(display.value);
    if (isNaN(result)) {
        display.value = 'Error';
        setTimeout(clear,1500)
    } else {
        display.value = result;
    }
});
function clear() {
    display.value = '';
}
clearBtn.addEventListener('click', () => {
    display.value = '';
})

let checkbox = document.getElementById('checkTHEME')

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        console.log(mudarTema())
    } else{
        console.log(mudarTemaGreen())
    }
})
function emBreve(){
    console.log('erro')
    window.alert('ERRO 😢 - Ainda não tenho essa funcionalidade!!!')
}

function mudarTema() {
    document.body.style.setProperty('--BG', '#FFFBFA');
    document.body.style.setProperty('--text', '#2e2827');
    document.body.style.setProperty('--displayBG', '#F4DED7');
    document.body.style.setProperty('--numBTN', '#FBF0ED');
    document.body.style.setProperty('--numOPE', '#FFDACF');
    document.body.style.setProperty('--numAC', '#FAE191');
    document.body.style.setProperty('--equalBTN', '#ffc3b1');

    document.body.style.setProperty('--numHOV', '#e4d5d1');
    document.body.style.setProperty('--opeHOV', '#ebc7bc');
    document.body.style.setProperty('--acHOV', '#e9d287');
    document.body.style.setProperty('--equalHOV', '#ecb3a2');
}
function mudarTemaGreen() {
    document.body.style.setProperty('--BG', '#FDFEF7');
    document.body.style.setProperty('--text', '#373D34');
    document.body.style.setProperty('--displayBG', '#E2E8DF');
    document.body.style.setProperty('--numBTN', '#F3F5ED');
    document.body.style.setProperty('--numOPE', '#DAE7D1');
    document.body.style.setProperty('--numAC', '#D7EBEF');
    document.body.style.setProperty('--equalBTN', '#C7EFBB');

    document.body.style.setProperty('--numHOV', '#e6e9df');
    document.body.style.setProperty('--opeHOV', '#cedbc4');
    document.body.style.setProperty('--acHOV', '#c7dce0');
    document.body.style.setProperty('--equalHOV', '#bae0ae');
}