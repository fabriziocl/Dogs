## Project Name: Dog Breed Info App

### Description:
This project is a CRUD API for managing dog breeds and their temperaments. It allows users to fetch dog breed data from an external API, create new dog breeds, and manage the data through a PostgreSQL database.

### Tech Stack:
- Node.js
- Express.js
- PostgreSQL (via Sequelize ORM)
- Axios (for external API requests)
- Jest/Mocha for testing
- Nodemon

### Installation and Setup

#### 1. Clone the repository
```bash
git clone https://github.com/fabriziocl/Dogs
cd api
npm install
```
#### 2. Set up your enviroment variables
DB_USER=yourPostgresUser
DB_PASSWORD=yourPostgresPassword
DB_HOST=localhost
DB_PORT=5432
DB_NAME=yourDatabaseName
API_KEY=yourExternalApiKey

#### 3. Set up the database:    
- Through console 
```
    psql -U [your user]
    CREATE DATABASE [my_database];
    \c my_database;
```
- Or through pgAdmin

#### 4. Start the server using Nodemon
```
nodemon
```