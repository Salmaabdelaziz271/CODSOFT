document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("inputField");
    const buttons = document.querySelectorAll("input[type='button']");

    var flag = false;
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.value;

            if (value === "AC") {
                input.value = "";
            } 
            else if (value === "DE") {
                input.value = input.value.slice(0, -1);
            } 
            else if (value === "=") {
                try {
                    input.value = evaluateExpression(input.value);
                    flag = true;
                } catch (error) {
                    input.value = "Error";
                }
            } 
            else {
                if (flag === true && !["+","-","*","/","%"].includes(value)) {
                    input.value = value;
                    flag = false;
                }    
                else {
                    input.value += value;
                    flag = false;
                }
                    
            }
        });
    });

    function evaluateExpression(expression) {
        try {
            return eval(expression);
        } 
        catch (error) {
            throw new Error("Invalid expression");
        }
    }
});

