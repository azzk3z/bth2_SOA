const jwt = require('jsonwebtoken');

// Tai khoan mau de test
const USER = {
    idUser: 1,
    userName: 'admin',
    password: '123456'
};

// Xu ly dang nhap
const login = (req, res) => {
    const { userName, password } = req.body;

    // Kiem tra username va password
    if (userName !== USER.userName || password !== USER.password) {
        return res.status(401).json({
            message: 'Sai tai khoan hoac mat khau'
        });
    }

    // Tao JWT
    const token = jwt.sign(
        {
            idUser: USER.idUser,
            userName: USER.userName
        },
        'my_secret_key',
        {
            expiresIn: '1h'
        }
    );

    res.json({
        message: 'Dang nhap thanh cong',
        token: token
    });
};

module.exports = {
    login
};