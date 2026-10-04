const express = require("express");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./authMiddleware");

const app = express();

app.use(express.json());

const JWT_SECRET = "mysecretkey";

// API login
app.post("/api/login", (req, res) => {

    const { username, password } = req.body;

    if (username === "admin" && password === "123456") {

        const token = jwt.sign(
            {
                username: username
            },
            JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        return res.json({
            message: "Dang nhap thanh cong",
            token: token
        });
    }

    res.status(401).json({
        message: "Sai username hoac password"
    });
});


// API auth
app.get("/auth", (req, res) => {
    res.json({
        message: "Auth API dang hoat dong"
    });
});


// API hello
app.get("/hello", authMiddleware, (req, res) => {

    res.json({
        message: "Hello World",
        user: req.user
    });

});


app.listen(3000, () => {
    console.log("Server dang chay tai http://localhost:3000");
});