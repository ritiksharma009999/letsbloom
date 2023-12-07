Overview
This Library API is a RESTful web service for managing a library system. It allows users to perform basic CRUD (Create, Read, Update, Delete) operations on books. This document provides setup instructions and a guide on how to use the API.

Getting Started
#Prerequisites
Node.js
npm (Node.js package manager)
MongoDB


##Installation
Clone the repository or download the source code.
Navigate to the project directory.

cd path/to/library-api
Install the required npm packages.

npm install
Running the Application
Start your MongoDB server.
Start the application.

node server.js
The server should start on port 5000 (http://localhost:5000).

#API Endpoints
The API supports the following operations:

1. Retrieve All Books
Endpoint: GET /api/books
Description: Retrieves a list of all books in the library.
Response: An array of book objects.
Test Command:

curl http://localhost:5000/api/books

2. Add a New Book
Endpoint: POST /api/books
Description: Adds a new book to the library.
Request Body: JSON object representing the new book.

{
  "title": "Book Title",
  "author": "Author Name",
  "publishedYear": 2021,
  "isbn": "ISBN Number"
}
Test Command:

curl -Uri 'http://localhost:5000/api/books' -Method POST -ContentType 'application/json' -Body '{"title": "Book Title", "author": "Author Name", "publishedYear": 2021, "isbn": "ISBN Number"}'

3. Update Book Details
Endpoint: PUT /api/books/{id}
Description: Updates the details of a specific book.
Request Body: JSON object with updated book details.

{
  "title": "Updated Title",
  "author": "Updated Author",
  "publishedYear": 2022,
  "isbn": "Updated ISBN"
}
Test Command:
Replace {id} with the actual ID of the book.

curl -Uri 'http://localhost:5000/api/books/{id}' -Method PUT -ContentType 'application/json' -Body '{"title": "Updated Title", "author": "Updated Author", "publishedYear": 2022, "isbn": "Updated ISBN"}'



Note: Replace {id} in the PUT command with the actual ID of the book you want to update. Make sure to adjust any specific details or commands to fit your actual API implementation and environment settings.