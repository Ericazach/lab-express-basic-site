const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

app.use(express.static("public"));

const router = require("./config/router.config");
app.use(router);

const port = 3000;
app.listen(port, () => console.log("Ready"));
