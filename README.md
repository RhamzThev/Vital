# Vital

## Overview

Vital is a comprehensive application built using Angular for the client side and Express.js for the server side. This project aims to provide an efficient platform for managing user authentication, food logs, and other related services.

## Project Structure

The repository is divided into two main directories:

1. **Client**: Contains the Angular application.
2. **Server**: Contains the Express.js server.

## Client

The client side is an Angular application generated with Angular CLI version 17.3.6. Below are the key commands and instructions to work with the client application:

### Development Server

Run the following command to start the development server:

```sh
ng serve
```

Navigate to `http://localhost:80/`. The application will automatically reload if you change any of the source files.

### Code Scaffolding

To generate a new component, run:

```sh
ng generate component component-name
```

You can also use the following commands to generate other constructs:

```sh
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Build

Run the following command to build the project:

```sh
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

To execute the unit tests via [Karma](https://karma-runner.github.io), run:

```sh
ng test
```

### Running End-to-End Tests

To execute the end-to-end tests via a platform of your choice, run:

```sh
ng e2e
```

Note: To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further Help

For more help on the Angular CLI, use:

```sh
ng help
```

Or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Server

The server side is an Express.js application. Below are the key commands and instructions to work with the server application:

### Starting the Server

To start the server, run:

```sh
node ./src/index.js
```

For development purposes with live reload, run:

```sh
npm run dev
```

### Project Structure

- **config**: Contains the database configuration.
- **controller**: Contains the logic for handling requests.
- **model**: Contains the Mongoose models.
- **routes**: Contains the API routes.

### Key Files

- **src/index.js**: Entry point of the server application.
- **src/app.js**: Main Express application setup.
- **src/config/database.js**: MongoDB connection configuration.
- **src/routes/auth.routes.js**: Routes for authentication operations.
- **src/routes/user.routes.js**: Routes for user-related operations.

### Dependencies

The server relies on several npm packages, including:

- **bcrypt**: For password hashing.
- **connect-mongo**: For storing sessions in MongoDB.
- **cors**: For enabling Cross-Origin Resource Sharing.
- **express**: Web framework for Node.js.
- **express-session**: For managing sessions.
- **mongoose**: For MongoDB object modeling.
- **nodemon**: For development to automatically restart the server.

To install the dependencies, run:

```sh
npm install
```

## License

This project is licensed under the MIT License.
