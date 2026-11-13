# SIT725 Task 2.2P – Express Web Servers

This project was made for the SIT725 practical task. It uses Express to serve a webpage and provide calculator endpoints.

## Run the project

You need Node.js and npm installed.

1. Open a terminal in this folder.
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Open http://localhost:3000 in your browser.

## Endpoints

### GET – Add two numbers

Open `http://localhost:3000/add/10/20`.

The server returns the two numbers and their sum as JSON.

### POST – Calculator

The webpage sends a POST request to `/calculate` with two numbers and an operation. Supported operations are `add`, `subtract`, `multiply` and `divide`.

Example JSON body:

```json
{
  "number1": 15,
  "number2": 25,
  "operation": "add"
}
```

### GET – Health check

Open `http://localhost:3000/api/health` to check that the server is running.

## Folder structure

```text
2.2P/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── scripts.js
├── screenshots/
├── server.js
├── package.json
├── package-lock.json
└── README.md
```
