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
