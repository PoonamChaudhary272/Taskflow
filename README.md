# TaskFlow – Task Management Backend

TaskFlow is a beginner-friendly full-stack project built to understand how
backend systems work using Java and Spring Boot.

This repository contains the **backend** part of the application, which
provides REST APIs for managing tasks.

---

##  Features
- Create a task
- Get all tasks
- Update a task
- Delete a task
- REST API based architecture

---

## Tech Stack

### Backend
- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- H2 Database (in-memory) ,later MYSQL
- Lombok
- Maven

### Tools
- Git & GitHub
- Postman

---

##  Learning Outcome

Through this project, I learned:

### Day 1
- Spring Boot project structure
- How REST controllers work
- How to run a backend server
- How to use Git and GitHub for version control

### Day 2
- What a database is and why it is needed
- How Java classes are mapped to database tables using JPA
- How `@Entity`, `@Id`, and `@GeneratedValue` work
- How Spring Boot auto-creates tables
- How to use H2 database and H2 console
- How to verify data using SQL queries

### Day 3
- What a Repository is and why it is needed
- How Spring Data JPA provides built-in CRUD methods
- How to create REST APIs using `@GetMapping`, `@PostMapping`, and `@DeleteMapping`
- How JSON data sent from a client is converted into a Java object using `@RequestBody`
- How API requests interact with the database
- How to insert, fetch, and delete data using HTTP requests
- How to verify inserted data using the H2 database console

### Day 4
- Learned why the Service layer is important in Spring Boot applications
- Understood separation of concerns (Controller, Service, Repository)
- Moved business logic from Controller to Service
- Used `@Service` annotation to manage business logic
- Made controllers cleaner and easier to maintain
- Understood how real-world backend applications are structured



## Day 5: Update Task & Error Handling

On Day 5, I implemented the **UPDATE functionality** for tasks and understood how real backend applications handle errors and data consistency.

---

##  Features Implemented

- Update an existing task using `PUT` request
- Fetch task before updating to ensure it exists
- Proper error handling when task ID is not found
- Clean separation of Controller and Service logic

### Day 6
- Built React frontend
- Connected frontend with Spring Boot backend
- Displayed tasks dynamically
- Added task creation from UI
- Understood end-to-end data flow in full-stack apps.

### Day 7
- UI polish
- Toggle & delete functionality
- Project documentation
- GitHub showcase

