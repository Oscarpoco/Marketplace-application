

<container>
# CodeTribe Academy Online Marketplace (Server)

## Project Overview
The backend (server) part of the CodeTribe Academy online marketplace project is built using **NodeJS** and **Express**. It provides a RESTful API that handles product listing, user authentication, and data storage.
## The project link
https://marketplace-application-4shx.vercel.app/

## Dependencies
The project uses the following dependencies:

```json
{
  "name": "server",
  "version": "1.0.0",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "npx nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "express-validator": "^7.2.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.8.0",
    "nodemon": "^3.1.7",
    "server": "file:",
    "validator": "^13.12.0"
  }
}
```

## Getting Started
To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in the project directory.
3. Create a `.env` file in the project root directory and add the necessary environment variables (e.g., database connection string, JWT secret).
4. Start the development server by running `npm run dev`.

## Project Structure
The project structure is as follows:

```
server/
├── controllers/
│   └── productsController.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── utils/
│   └── auth.js
├── server.js
└── package.json
```

- `controllers/`: Contains the controller functions for handling product-related operations.
- `models/`: Contains the Mongoose model definition for the `Product` document.
- `routes/`: Contains the route definitions for the product-related endpoints.
- `utils/`: Contains utility functions, such as the authentication middleware.
- `server.js`: The entry point of the server application.

## API Endpoints
The server provides the following API endpoints:

1. **Create Product**:
   - Endpoint: `POST /api/products`
   - Description: Create a new product.

2. **Get All Products**:
   - Endpoint: `GET /api/products`
   - Description: Retrieve a list of all products with pagination support.

3. **Get Product by ID**:
   - Endpoint: `GET /api/products/:id`
   - Description: Retrieve a specific product by its ID.

4. **Update Product by ID**:
   - Endpoint: `PUT /api/products/:id`
   - Description: Update an existing product by its ID.

5. **Delete Product by ID**:
   - Endpoint: `DELETE /api/products/:id`
   - Description: Delete a specific product by its ID.

## Contribution Guidelines
If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Create a pull request to the original repository.

## License
This project is licensed under the [MIT License](LICENSE).
</container>
