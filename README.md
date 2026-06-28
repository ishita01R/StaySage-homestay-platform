\# StaySage – Smart Solutions for Modern Homestays



StaySage is an AI-assisted full stack web application for homestays, boutique hotels, guest houses, and small resorts. It helps hotel teams understand guest reviews, manage QR-based guest requests, and convert complaints into trackable staff tasks.



\## Project Structure



StaySage/

\- frontend/  React + Vite frontend

\- backend/   Node.js + Express REST API



\## How to run frontend locally



1\. Open terminal in the frontend folder:



cd frontend



2\. Install dependencies:



npm install



3\. Start frontend:



npm run dev



Frontend will run on:



http://localhost:5173



\## How to run backend locally



1\. Open terminal in the backend folder:



cd backend



2\. Install dependencies:



npm install



3\. Create a `.env` file inside the backend folder and add:



PORT=5000

CLIENT\_ORIGIN=http://localhost:5173



4\. Start backend server:



npm run dev



Backend will run on:



http://localhost:5000



\## Backend API Endpoints



| Method | Endpoint | Description |

|---|---|---|

| GET | /api/health | Check if backend is running |

| GET | /api/stats | Get dashboard statistics |

| GET | /api/reviews | Get all guest reviews |

| GET | /api/reviews/:id | Get a single review by ID |

| POST | /api/reviews | Create a new review |

| PUT | /api/reviews/:id | Update a review |

| DELETE | /api/reviews/:id | Delete a review |

| GET | /api/reviews/search?q=hot | Search reviews |

| GET | /api/requests | Get QR guest requests |

| GET | /api/tasks | Get staff tasks |

| PUT | /api/tasks/:id/status | Update task status |



\## Week 4 Backend Features



\- Express.js backend server

\- REST API with more than 6 endpoints

\- CRUD operations for guest reviews

\- Search endpoint for reviews

\- Dashboard stats endpoint

\- QR guest requests endpoint

\- Staff task endpoint

\- Proper HTTP status codes

\- Basic error handling middleware

\- Environment variables using `.env`

\- `.env.example` added for setup reference

