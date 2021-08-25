const pad = document.querySelector('.calculator-pad');
const calculation = document.getElementById('calculation');
const clear = document.getElementById('clear');
const resultDisplay = document.getElementById('result');


pad.addEventListener('click', e => {


    switch(e.target.innerText) {
        case 'AC':
            calculation.innerText = '';
            resultDisplay.innerText = '';
            break;
        case 'del':
            if(calculation.innerText) {
                calculation.innerText = calculation.innerText.slice(0, -1);
            }
            break;
        case '=':
            try {
                let result = eval(calculation.innerText);
                resultDisplay.innerText = result.toFixed(2);
            } catch {
                resultDisplay.innerText = "Error"
            }
            break;
        default: calculation.innerText += e.target.innerText;
    }

})

//Toggle btn

const toggleBtn = document.getElementById('toggle-btn');
const calcBody = document.querySelector('.calculator-body');

toggleBtn.addEventListener('click', e => {
    calcBody.classList.toggle('light');
    calcBody.classList.toggle('dark');
    toggleBtn.classList.toggle('light');
    toggleBtn.classList.toggle('dark');
})