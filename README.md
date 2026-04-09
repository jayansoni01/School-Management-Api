# School Management API

A Node.js backend application to manage school data. It allows users to add schools and retrieve a list of schools sorted by proximity using geographical distance.


##  Tech Stack Used

- Node.js
- Express.js
- MySQL
- Railway (Deployment)


## 📌 Features

- Add new schools with location data
- Fetch schools sorted by distance from user location
- Input validation using middleware
- Distance calculation using Haversine formula


## API Endpoints

### 1. Add School

POST /api/v1/addSchool

Request Body:
{
  "name": "ABC School",
  "address": "Ahmedabad",
  "latitude": 23.02,
  "longitude": 72.57
}

Response:
{
  "message": "School added successfully"
}

### 2. List Schools

GET /api/v1/listSchools?latitude=23.02&longitude=72.57

Response:
[
  {
    "id": 3,
    "name": "School name",
    "address": "School Address",
    "latitude": 22.2XXX,
    "longitude": 73.1XXX,
    "distance": 0.2960011087546209
    }
]


## 📬 Postman Collection

[Add your Postman collection link here]


## ⚙️ Environment Variables

Create a .env file and add:

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=
PORT=

## How it works

The API uses the Haversine formula to calculate the distance between user coordinates and school locations, and returns a sorted list based on proximity.