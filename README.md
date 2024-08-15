Rule Engine Application
Overview
The Rule Engine Application allows users to create, evaluate, and combine rules using a web-based interface. It provides functionalities to manage rules and see the results in real-time.

Features
Create Rule: Users can input a new rule and click "Create Rule" to add it to the system. The newly created rule will be displayed in the results area.
Evaluate Rule: Users can evaluate a rule by entering its ID and providing input. The system will determine if the rule is valid and display the result.
Combine Rules: Users can combine multiple rules into a single rule. The combined rule will be generated and displayed in the results area.
Manage Rules: Users can fetch and delete rules by their ID through backend routes.
Dependencies
Backend Dependencies
Express: ^4.19.2
Mongoose: ^8.5.2
Cors: ^2.8.5
Nodemon: ^3.1.4
Frontend Dependencies
React: ^18.3.1
React-DOM: ^18.3.1
React-Scripts: 5.0.1
Axios: ^1.7.3
@testing-library/jest-dom: ^5.17.0
@testing-library/react: ^13.4.0
@testing-library/user-event: ^13.5.0
Web-vitals: ^2.1.4
Setup Instructions
Backend Setup
Clone the Repository:

bash
Copy code
git clone <repository-url>
Navigate to Backend Directory:

bash
Copy code
cd backend
Install Dependencies:

bash
Copy code
npm install
Start the Backend Server:

bash
Copy code
nodemon server.js
Frontend Setup
Navigate to Frontend Directory:

bash
Copy code
cd frontend
Install Dependencies:

bash
Copy code
npm install
Start the Frontend Application:

bash
Copy code
npm start
Usage
Access the Application: Open the web browser and navigate to http://localhost:3000 (or the port specified by your frontend setup).

Create a Rule:

Enter the rule details in the provided input field.
Click "Create Rule" to add the rule.
View the created rule in the results area.
Evaluate a Rule:

Enter the rule ID and input data.
Click "Evaluate Rule" to check if the rule is valid.
The result will be displayed in the results area.
Combine Rules:

Enter the specific rules to be combined.
Click "Combine Rule" to generate the combined rule.
View the combined rule in the results area.
Manage Rules:

Use the backend routes to fetch or delete rules by ID.
Additional Notes
Ensure MongoDB is running and properly configured for the application.
The project setup assumes that you have both backend and frontend running concurrently.
