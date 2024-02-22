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
    sum = num1 / num2; 
    if(num2 == 0)
    {
        return "DIVIDE BY 0 ERROR";
    }
    else
    {
        return sum; 
    }
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
        if(display.textContent[0] == ".")
        {
            display.textContent = "0.";
        }
    })
}

const equals = document.getElementById("equal"); 
let arr = []; 
let dis = display.textContent;
let formulaText; 
let result = 0; 

equals.addEventListener('click', () => 
{
    dis = display.textContent;
    dis = dis.split(/([+\-*\/])/g);
    for(let i = 0; i < dis.length; i++)
    {
        if(dis[i] == "*")
        {
            dis[i-1] = operate(parseFloat(dis[i-1]), "*", parseFloat(dis[i+1])); 
            dis.splice(i, 2);
            i = i-2; 
        }
    }
    for(let i = 0; i < dis.length; i++)
    {
        if(dis[i] == "/")
        {
            dis[i-1] = operate(parseFloat(dis[i-1]), "/", parseFloat(dis[i+1])); 
            dis.splice(i, 2);
            i=i-2; 
        }
    }
    for(let i = 0; i < dis.length; i++)
    {
        if(dis[i] == "+")
        {
            dis[i-1] = operate(parseFloat(dis[i-1]), "+", parseFloat(dis[i+1])); 
            dis.splice(i, 2);
            i=i-2; 
        }
    }
    for(let i = 0; i < dis.length; i++)
    {
        if(dis[i] == "-")
        {
            dis[i-1] = operate(parseFloat(dis[i-1]), "-", parseFloat(dis[i+1])); 
            dis.splice(i, 2);
            i=i-2; 
        }
    }
    display.textContent = dis[0]; 
})

const del = document.querySelector(".delete2"); 
del.addEventListener('click', () => 
{
    display.textContent = display.textContent.substring(0, display.textContent.length - 1)
})
