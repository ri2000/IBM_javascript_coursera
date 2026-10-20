function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result = operations(num1, num2);

        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function operations(a, b){
    var results = [];

    debugger;

    // Multiplication
    results.push(a * b);

    try{
        // Division
        results.push(a / b);
    }
    catch(error){
        console.log(error.message);
    }
    // Subtraction
    results.push(a - b);

    // Addition
    results.push(a + b);

    return results;
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    if (!isNaN(result)){
        // Display the result in the paragraph element
        resultElement.textContent = `The result is: ${result}`;
    }
    else{
        if (result.length == 4){
            resultElement.textContent = `Multiplication: ${result[0]}\nDivision: ${result[1]}\nSubstraction: ${result[2]}\nAddition: ${result[3]}\n`;
        }
        else{
            resultElement.textContent = `Multiplication: ${result[0]}\n
                                         Substraction: ${result[1]}\n
                                         Addition: ${result[2]}\n`;
        }
    }
}
        
