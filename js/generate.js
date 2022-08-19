// generate section 
document.getElementById('generate-btn').addEventListener('click', function () {
    document.getElementById('generate-input').value = setRandomNumber();
})
// calculate section 
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number === 'C') {
            document.getElementById('calc-input').value = '';
            document.getElementById('wrong').style.display = 'none';
            document.getElementById('right').style.display = 'none';
        }
        else if (number === '<') {
            document.getElementById('calc-input').value = document.getElementById('calc-input').value.slice(0, -1);
            document.getElementById('wrong').style.display = 'none';
            document.getElementById('right').style.display = 'none';
        }
    }
    else {
        document.getElementById('calc-input').value = document.getElementById('calc-input').value + number;
    }
});
// submit button 
document.getElementById('submit').addEventListener('click', function () {
    const generateInputValue = document.getElementById('generate-input').value;
    const calculateInputValue = document.getElementById('calc-input').value;
    if (generateInputValue === calculateInputValue) {
        document.getElementById('right').style.display = 'block';
        document.getElementById('wrong').style.display = 'none';
    }
    else if (generateInputValue !== calculateInputValue) {
        document.getElementById('wrong').style.display = 'block';
        document.getElementById('right').style.display = 'none';
    }
})