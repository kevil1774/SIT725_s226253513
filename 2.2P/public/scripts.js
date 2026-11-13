const calculateButton = document.getElementById("calculateButton");
const resultText = document.getElementById("result");

calculateButton.addEventListener("click", async () => {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const operation = document.getElementById("operation").value;

    if (number1 === "" || number2 === "") {
        resultText.textContent = "Please enter both numbers first.";
        return;
    }

    try {
        // Send the values to Express using a POST request.
        const response = await fetch("/calculate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ number1, number2, operation })
        });

        const data = await response.json();

        if (!response.ok) {
            resultText.textContent = data.error;
            return;
        }

        const symbols = {
            add: "+",
            subtract: "−",
            multiply: "×",
            divide: "÷"
        };

        resultText.textContent =
            `${data.number1} ${symbols[data.operation]} ${data.number2} = ${data.result}`;
    } catch (error) {
        resultText.textContent = "The server could not be reached. Please try again.";
        console.error(error);
    }
});
