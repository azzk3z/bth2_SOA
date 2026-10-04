# Express.js JWT Authentication

## 1. Giới thiệu

Bài thực hành xây dựng API sử dụng Express.js và JWT (JSON Web Token) để xác thực người dùng và bảo vệ API.

## 2. Công nghệ sử dụng

* Node.js
* Express.js
* JSON Web Token (JWT)
* Postman

## 3. Chức năng

* Đăng nhập bằng username và password
* Tạo JWT Token sau khi đăng nhập thành công
* Kiểm tra Bearer Token bằng Middleware
* Bảo vệ API `/hello`
* Từ chối request khi không có Token
* Cho phép truy cập `/hello` khi JWT hợp lệ

## 4. API

### Login

```text
POST /api/login
```

Request:

```json
{
    "username": "admin",
    "password": "123456"
}
```

### Hello

```text
GET /hello
```

API `/hello` yêu cầu Bearer Token.

Header:

```text
Authorization: Bearer <JWT_TOKEN>
```

## 5. Kết quả kiểm thử

### Đăng nhập thành công

![Login](screenshots/01-login.png)

### Không có Token

![No Token](screenshots/02-no-token.png)

### Gửi Bearer Token

![Bearer Token](screenshots/03-bearer-token.png)

### Hello World khi JWT hợp lệ

![Hello World](screenshots/04-hello-world.png)

## 6. Cách chạy

Cài đặt thư viện:

```bash
npm install
```

Chạy server:

```bash
node server.js
```

Server:

```text
http://localhost:3000
```
