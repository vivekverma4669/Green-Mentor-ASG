<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--     <title>MERN Task Management Application</title> -->
</head>
<body>

<h1>MERN Task Management Application</h1>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#features">1. Features</a></li>
    <li><a href="#technologies-used">2. Technologies Used</a></li>
    <li><a href="#setup-instructions">3. Setup Instructions</a></li>
    <li><a href="#folder-structure">4. Folder Structure</a></li>
    <li><a href="#frontend-deployment">5. Front-end Deployment</a></li>
    <li><a href="#api-documentation">6. API Documentation and Endpoints</a></li>
    <li><a href="#evaluation-criteria">7. Evaluation Criteria</a></li>
    <li><a href="#license">8. License</a></li>
</ul>

<h2 id="features">1. Features</h2>
<ul>
    <li>CRUD operations on tasks (Create, Read, Update, Delete)</li>
    <li>User authentication using JWT</li>
    <li>User registration and login</li>
    <li>Pagination and filtering</li>
    <li>Profile management</li>
    <li>Form validation for task operations</li>
    <li>Proper error handling on both frontend and backend</li>
    <li>Responsive user interface</li>
    <li>Back-end Deployment on Render</li>
</ul>

<h2 id="technologies-used">2. Technologies Used</h2>
<ul>
    <li>MongoDB</li>
    <li>Express.js</li>
    <li>React</li>
    <li>Node.js</li>
    <li>JSON Web Tokens (JWT) for authentication</li>
    <li>Simple CSS</li>
</ul>

<h2 id="setup-instructions">3. Setup Instructions</h2>
<ol>
    <li>Clone the repository:</li>
</ol>
<code>
    git clone &lt;[repository_url](https://github.com/vivekverma4669/Green-Mentor-ASG.git)&gt;
</code>
<ol start="2">
    <li>Install dependencies for both frontend and backend:</li>
</ol>
<code>
    cd front-end<br>
    npm install<br>
    cd back-end<br>
    npm install<br>
</code>
<ol start="3">
    <li>Set up the environment variables:</li>
</ol>
<p>Create a <code>.env</code> file in the backend directory and define variables such as database connection URI, JWT secret, etc.</p>
<p><code>PORT=3001</code></p>
<p><code>DB_URL=mongodb://localhost:27017/your_database_name</code></p>
<ol start="4">
    <li>Start the backend server:</li>
</ol>
<code>
    cd back-end<br>
    node index.js
</code>
<ol start="5">
    <li>Start the frontend application:</li>
</ol>
<code>
    cd front-end<br>
    npm run start
</code>
<p>Access the application in your browser at <code>http://localhost:3000</code>.</p>

<h2 id="folder-structure">4. Folder Structure</h2>
<p>Describe the organization of your project's folders and files here.
  <pre>
    src   
      - Components
      - AllRoutes
      - Redux
      - Styles
  </pre>
</p>

<h2 id="frontend-deployment">5. Front-end Deployment</h2>
 deployed url [https://green-mentor-asg.vercel.app/]
<img src="https://drive.google.com/uc?id=1bTshEBjUCMad3Dse5dXIuppHpEgPyuTz" />
<img src="https://drive.google.com/uc?id=11pmaxnrlAYDtk6yJAQqEBtWtXzo_bXMX" />
<img src="https://drive.google.com/uc?id=1YDF4Nfn-13GWiAA-b3zP1aPtYX7slPnC" />
<img src="https://drive.google.com/uc?id=14k72-H26NId86CsyKgVMX04mxspn9RFd" />


<p>Explain how the frontend of the application is deployed and provide the deployment link.</p>

<h2 id="api-documentation">6. API Documentation and Endpoints</h2>
deployed api [https://green-mentor-asg.onrender.com]
<p>Provide documentation for the backend APIs including endpoint descriptions, request/response formats, etc.</p>
<ul>
  <li><code>/signup</code>: Endpoint for user registration</li>
  <li><code>/login</code>: Endpoint for user login and authentication</li>
  <li><code>/task</code>: Endpoint to retrieve all tasks</li>
  <li><code>/task/:id</code>: Endpoint to retrieve a single task by ID</li>
  <li><code>/task/create</code>: Endpoint to create a new task</li>
  <li><code>/task/update/:id</code>: Endpoint to update a task by ID</li>
  <li><code>/task/delete/:id</code>: Endpoint to delete a task by ID</li>
</ul>

<h2 id="license">8. License</h2>
<p>MIT License</p>
<p>State the license for your project if applicable.</p>

</body>
</html>
