const express = require("express");

const app = express();

app.listen(3333);

app.get("/", (require, response) => {
    return response.json({ message: "Olá Mundo" });
});
