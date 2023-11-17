# User Management Dashboard - Backend

This is the backend repository for the User Management Dashboard, built using Node.js, Express, MongoDB, and other technologies.

## Tech Stack

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user information.
- **bcryptjs**: Library for hashing passwords securely.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **Nodemon**: Development dependency for automatically restarting the server.
- **dotenv**: Zero-dependency module to load environment variables.

## Project Structure

The backend project follows a simple structure:

- **server.js**: Entry point for the Express application.

- **routes**: Contains route handlers for different endpoints.
  - **adminRoutes.js**: Handles Admin-related API routes.
  - **userRoutes.js**: Handles User-related API routes.

- **controllers**: Logic for handling business operations.
  - **adminControllers.js**: Functions for Admin-related operations.
  - **userControllers.js**: Functions for User-related operations.

- **models**: Defines Mongoose models for interacting with the MongoDB database.
  - **AdminModel.js**: Model for Admin data.
  - **UserModel.js**: Model for User data.

- **config**: Configuration files, including database connection setup.

## API Endpoints

### Users

- **POST /api/users/create**: Create a new user.
- **GET /api/users/all**: Get all users.

### Admins

- **POST /api/admin/createadmin**: Create a new admin.
- **GET /api/admin/getadmins**: Get all admins.

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd backend

2. Install dependencies:

   ```bash
   npm install

3. Set up environment variables:
    Create a .env file with the following content:

     ```bash
    PORT=5000
    DATABASE_URL=<your_mongodb_uri>

4. Run the server :

   ```bash
   npm start
