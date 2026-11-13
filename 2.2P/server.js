const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Simple route to check that the server is running.
app.get("/api/health", (req, res) => {
    res.json({ message: "Express server is running" });
});

// Required task: add two numbers using a GET request.
app.get("/add/:number1/:number2", (req, res) => {
    const number1 = Number(req.params.number1);
    const number2 = Number(req.params.number2);

    if (!Number.isFinite(number1) || !Number.isFinite(number2)) {
        return res.status(400).json({ error: "Enter two valid numbers." });
    }

    res.json({
        number1,
        number2,
        result: number1 + number2
    });
});

// Extra practice: perform calculator operations using a POST request.
app.post("/calculate", (req, res) => {
    const { number1, number2, operation } = req.body;
    const first = Number(number1);
    const second = Number(number2);

    if (
        number1 === undefined || number2 === undefined ||
        number1 === "" || number2 === "" ||
        !Number.isFinite(first) || !Number.isFinite(second)
    ) {
        return res.status(400).json({ error: "Please provide two valid numbers." });
    }

    let result;

    switch (operation) {
        case "add":
            result = first + second;
            break;
        case "subtract":
            result = first - second;
            break;
        case "multiply":
            result = first * second;
            break;
        case "divide":
            if (second === 0) {
                return res.status(400).json({ error: "You cannot divide by zero." });
            }
            result = first / second;
            break;
        default:
            return res.status(400).json({ error: "Choose a valid operation." });
    }

    res.json({ number1: first, number2: second, operation, result });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
