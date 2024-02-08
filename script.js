function add(num1, num2)
{
    let sum = 0; 
    sum = num1 + num2; 
    return sum; 
}

function subtract(num1, num2)
{
    let sum = 0; 
    sum = num1 - num2; 
    return sum; 
}

function multiply(num1, num2)
{
    let sum = 0; 
    sum = num1 * num2; 
    return sum; 
}

function divide(num1, num2)
{
    let sum = 0; 
    sum = num1 / num2 * 1.0; 
    return sum; 
}

function operate(num1, op, num2)
{
    if(op == "+")
    {
        return add(num1, num2); 
    }
    else if(op == "-")
    {
        return subtract(num1, num2); 
    }
    else if(op == "*")
    {
        return multiply(num1, num2); 
    }
    else if(op == "/")
    {
        return divide(num1, num2); 
    }
}

const display = document.querySelector(".display"); 
display.textContent = ""; 

const clear = document.querySelector(".delete1"); 
clear.addEventListener('click', () => 
{
    display.textContent = ""; 
})

const numbers = document.querySelectorAll(".op");
for(let i = 0; i < numbers.length; i++)
{
    numbers[i].addEventListener('click', () => 
    {
        display.textContent += numbers[i].textContent; 
    })
}

const equals = document.getElementById("equal"); 
let formulaText; 
let result = 0; 
equals.addEventListener('click', () => 
{
    if(display.textContent.includes("+"))
    {
        formulaText = display.textContent.split("+"); 
        result = operate(parseInt(formulaText[0]), "+", parseInt(formulaText[1])); 
        display.textContent = result; 

    }
    else if(display.textContent.includes("-"))
    {
        formulaText = display.textContent.split("-"); 
        result = operate(parseInt(formulaText[0]), "-", parseInt(formulaText[1])); 
        display.textContent = result; 

    }
    else if(display.textContent.includes("*"))
    {
        formulaText = display.textContent.split("*"); 
        result = operate(parseInt(formulaText[0]), "*", parseInt(formulaText[1])); 
        display.textContent = result; 
    }
    else if(display.textContent.includes("/"))
    {
        formulaText = display.textContent.split("/");
        result = operate(parseInt(formulaText[0]), "/", parseInt(formulaText[1])); 
        display.textContent = result; 
    }
})