# Project Documentation

## Overview

This project is a modern web application built using cutting-edge technologies to deliver a seamless user experience and robust backend functionalities. The application allows user registration, login, and news management with CRUD operations.  

**Note**: The project is currently under development. This documentation will be updated as new features and improvements are implemented.

---

## Features

- **User Authentication**: Secure registration and login functionality.
- **News Management**: Add, update, view, and delete news articles.
- **Responsive Design**: Tailored for various devices using Tailwind CSS.
- **API-Driven**: A RESTful API backend for efficient data operations.

---

## Technologies Used

### Frontend
- **ReactJS**: Component-based library for building dynamic user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

### Backend
- **ASP.NET**: Powerful backend framework for web applications.
- **SQL Server**: Relational database for efficient data storage and retrieval.

---

## API Endpoints

### User Endpoints
- **GET** `api/GetAllUsers`: Retrieves a list of all users.
- **POST** `api/Register`: Registers a new user.
- **POST** `api/Login`: Authenticates a user and provides access.
- **POST** `api/Logout`: Remove user access by add Bearer token to blacklist token database.


### News Endpoints
- **GET** `api/GetNews`: Retrieves a list of all news articles.
- **GET** `api/GetNews/{id}`: Retrieves the details of a specific news article.
- **POST** `api/AddNews`: Adds a new news article.
- **PUT** `api/UpdateNews`: Updates an existing news article.
- **DELETE** `api/DeleteNews/{id}`: Deletes a news article by its ID.

---

## Models

### User Model
| Attribute | Type     | Description                       |
|-----------|----------|-----------------------------------|
| `Id`      | `int`    | Unique identifier for the user.  |
| `Username`| `string` | The username of the user.         |
| `Email`   | `string` | The email address of the user.    |
| `Password`| `string` | The hashed password of the user.  |
| `Role`    | `string` | The role assigned to the user.    |

### News Model
| Attribute    | Type     | Description                                |
|--------------|----------|--------------------------------------------|
| `Id`         | `int`    | Unique identifier for the news article.    |
| `Title`      | `string` | The title of the news article.             |
| `Description`| `string` | A brief description or body of the news.   |
| `Date`       | `Date`   | The publication date of the news article.  |
| `Author`     | `string` | The author of the news article.            |

### BlackListedToken Model
| Attribute    | Type     | Description                                 |
|--------------|----------|-------------------------------------------- |
| `Id`         | `int`    | Unique identifier for the Blacklisted Token.|
| `Token`      | `string` | The token that blacklisted.                 |
| `Expiration` | `Date`   | The Expiration date of the token.           |

---

## Setup and Installation

1. **Clone the Repository**  
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. **Backend Setup**  
   - Ensure SQL Server is installed and running.  
   - Update the database connection string in the backend project.  
   - Apply migrations and update the database:  
     ```bash
     dotnet ef database update
     ```
   - Navigate to the backend directory and run the backend server:  
     ```bash
     dotnet run
     ```

3. **Frontend Setup**  
   - Navigate to the frontend directory.  
   - Install dependencies:  
     ```bash
     npm install
     ```  
   - Start the development server:  
     ```bash
     npm run dev
     ```

---

## Roadmap

- [ ] Complete development of core features.
- [ ] Add more endpoints for additional functionalities.
- [ ] Enhance UI/UX for better usability.
- [ ] Write tests for APIs and frontend components.
- [ ] Deploy the application.
- [ ] Add advanced analytics dashboard.
- [ ] Implement push notifications.
- [ ] Add user profile customization features.


---

## Updates

This documentation will be updated as the project progresses. Stay tuned for future updates!

---

## Contact

For inquiries or support, please contact:  
**Ahmad Hamsa Pattuneri**  
**ahmadhamsa01@gmail.com**

