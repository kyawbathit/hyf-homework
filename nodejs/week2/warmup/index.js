const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

//localhost:3000/numbers/add?first=3&second=7
app.get("/numbers/add", (req, res) => {
    const { first } = req.query;
    const { second } = req.query;
    res.send(first + second);
});
  

//http://localhost:3000/numbers/multiply/1/3
app.get("/numbers/multiply/:first/:second", (req, res) => {
    const first = req.params.first;
    const second = req.params.second;
    res.send(`${first * second}
    `);
});
  
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));