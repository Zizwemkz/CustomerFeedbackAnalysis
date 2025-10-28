<div align="center">
  <h1>
       Client Review Analysis Application 
       A full-stack application for collecting, analyzing, and visualizing user feedback.  
  </h1>
  <p>
     In this Solution we are demonstrating end to end flowf of a client review application that intergrate with OpenAI to provide sentiment analysis reports.
  </p>
</div>

**Tech Stack:**
- **Backend:** .NET 8 Web API  
- **Frontend:** React + TypeScript  
- **Architecture:** RESTful API principles, SOLID design, AI-powered sentiment analysis  

---

## Overview

The **Product Review Analysis Platform** allows users to:

- Submit product feedback (with optional email)  
- Automatically analyze that feedback using an AI model to extract:
  - **Summary**
  - **Sentiment** (positive / neutral / negative)
  - **Tags**
  - **Priority** (P0–P3)
  - **Next Recommended Action**
- View, filter, and paginate all submitted feedback through a modern React interface.

This project demonstrates **production-grade full-stack design** featuring:
- Modular, testable architecture
- SOLID and clean design patterns
- RESTful API structure with separation of concerns
- TypeScript-based React UI with reusable, composable components

---

## Repository Structure
```bash
CustomerFeedbackAnalysis/
│
├── backend/
│ ├── src/
│ │ ├── ProductReviewAnalysis.sln
│ │ ├── ProductReviewAnalysis/ # Web API project (controllers, startup, middleware)
│ │ ├── ProductReviewAnalysis.Data/ # Entities, DbContext, DTOs
│ │ ├── ProductReviewAnalysis.Repository/ # EF Core repositories
│ │ ├── ProductReviewAnalysis.Service/ # Business logic, AI integration
│ │ ├── ProductReviewAnalysis.Common/ # Shared interfaces & contracts
│ │ ├── ProductReviewAnalysis.Tests/ # Unit tests (Service, Repository, Controller)
│ └── README.md
│ 
│
├── frontend/
│ └── product-review-ui/
│ ├── src/
│ │ ├── api/ # Axios setup for API calls
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Form, Table, and Detail views
│ │ ├── services/ # Data service layer (feedbackService)
│ ├── public/
│ └── README.md
│ 
```
---

## Quick Start

###  Prerequisites
- Node.js **v20+**
- .NET **8 SDK**
- Docker (Desktop or CLI)
- Valid **OpenAI API key** (or use mock AI mode)

---

###  Running the Full Stack (Docker Compose)

# Steps for to run Backend:

```bash
2. **Restore and Build the Solution**
    
    cd backend/src

    dotnet restore
    dotnet build
    

3. **Apply Database Migrations**
   
    dotnet ef database update --project ProductReviewAnalysis.Infrastructure
   

4. **Run the Application**
   
    dotnet run --project ProductReviewAnalysis.API
```


# Steps for to run FrontEnd

```bash

1. cd frontend/product-review-ui
    
2  npm install

3  npm start
```

# Services:

**BackEnd**
```bash
API → https://localhost:44334

Swagger → https://localhost:44334/swagger
```
**Frontend:**
```bash
Frontend UI → http://localhost:3000
```


| Layer                    | Description           | Link                                                           |
|--------------------------|-----------------------|----------------------------------------------------------------|
| Backend (.NET 8) | REST API + AI integration     | [Backend README →](./Backend/README.md)                        |
| Frontend (React) | UI feedback  review dashboard | [Frontend README →](./Frontend/product-review-ui/README.md)    |


## Architectural Reasoning

Why RESTful API Principles?

<div align="center">
  <p>
   
# The backend adheres to REST standards for clarity, scalability, and maintainability.

Key Concepts:

* Uniform Interface: /api/feedback, /api/feedback/{id}
* Stateless Communication: Each request is independent.
* Layered System: Controllers → Services → Repositories.
* HTTP Verbs: GET / POST / PUT / DELETE map to CRUD.
* Error Handling: Middleware ensures consistent 400/404/500 responses.
  
  **Additional Features:**
* Structured error handling
* Optional mock mode for offline testing
* Unit tests for Repository CRUD operations
* FeedbackService logic validation
* Controller endpoint integration tests
  </p>
</div>


##     Application Design

![Design diagrame](./designAnalysis/Componentdiagrame.png)</a>




## API Endpoints Overview

| Method   | Endpoint             | Description                                                 |
| -------- | -------------------- | ----------------------------------------------------------- |
| **POST** | `/api/feedback`      | Submit new feedback (runs AI analysis and stores it)        |
| **GET**  | `/api/feedback`      | Paginated list of feedback (supports sentiment/tag filters) |
| **GET**  | `/api/feedback/{id}` | Retrieve full feedback record with AI analysis              |


## AI Integration (google OpenAI )
  **The backend includes a modular AI analysis service**

# Functionality: Calls OpenAI for text analysis

```bash
Returns structured JSON:

{
  "summary": "User found the UI intuitive.",
  "sentiment": "positive",
  "tags": ["ui", "experience"],
  "priority": "P2",
  "nextAction": "Monitor for further user feedback."
}
```

