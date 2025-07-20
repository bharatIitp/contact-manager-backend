# Contact Manager Backend API

A Node.js + Express RESTful API for managing personal contacts with secure user authentication. Built as part of an internship project with production-quality architecture, validations, and user access control.

## Features

- **JWT-based User Authentication**: Secure Register/Login endpoints.
- **CRUD Operations for Contacts**: Full control over contact management.
- **Input Validation**: Using `express-validator` for robust data validation.
- **Auth Middleware**: Protects private routes from unauthorized access.
- **Search**: Find contacts by name or email.
- **Pagination**: Scalable listing for large datasets.
- **Centralized Error Handling**: Consistent and clean error responses.
- **Modular Project Structure**: Follows the MVC pattern for maintainability.
- **MongoDB Atlas Integration**: Uses Mongoose for elegant object data modeling.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with MongoDB Atlas)
- **ODM**: Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **Validation**: express-validator
- **Environment Variables**: dotenv





## Setup and Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/bharatIitp/contact-manager-backend.git
    cd contact-manager-backend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**

    Create a `.env` file in the root directory and add the following variables. Use `.env.example` as a template.

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_atlas_connection_uri
    JWT_SECRET=your_super_secret_jwt_key
    NODE_ENV=development
    ```

4.  **Run the server**

    The server will start in development mode with `nodemon`, which automatically restarts on file changes.

    ```bash
    npm run dev
    ```

##  Author

- **Bharat**
- B.sc CS @ IIT Patna
- Backend Developer Intern

## Future Enhancements
- [ ] Docker support for containerization
- [ ] Swagger/OpenAPI for interactive API documentation
- [ ] Cloud deployment scripts (e.g., for Render/EC2)
