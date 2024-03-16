/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    let sum = add(addNumber1, addNumber2);
    document.querySelector('#sum').value = sum;

}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    let difference = subtract(subtractNumber1, subtractNumber2);
    document.querySelector('#difference').value = difference;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    let product = multiply(factor1, factor2);
    document.querySelector('#product').value = product;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}
function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    let quotient = divide(dividend, divisor);
    document.querySelector('#quotient').value = quotient;
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

// Event listener for Get Total Due button

document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    if (document.querySelector('#member').checked) {
        subtotal *= 0.8; //20% discount
    }

    const total = subtotal.toFixed(2);
    document.querySelector('#total').innerText = `$ ${total}`;

});


/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
document.querySelector('#array').innerText = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerText = numbersArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */
document.querySelector('#evens').innerText = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerText = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerText = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerText = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
