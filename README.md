# CloudNote
CNG 495 Cloud Note Project  

**CloudNote** is a simple note-taking app that lets users create, update, view, and delete notes. The project uses Firebase for storing notes and handling user authentication. The app's backend is built using Firebase Cloud Functions, and the frontend is developed with HTML, CSS, and JavaScript.  

## Project Structure  

### 1) Backend (Server):  
- Hosted on Firebase using **Cloud Functions**.  
- Uses **Firebase Firestore** for storing and managing notes.  
- API Endpoints:  
  - `POST /notes`: Create a new note.  
  - `GET /notes?user_id=<user_id>`: Get notes for a specific user.  
  - `PUT /notes/<note_id>`: Update a note.  
  - `DELETE /notes/<note_id>`: Delete a note.  

### 2) Frontend:  
- Developed using **HTML**, **CSS**, and **JavaScript**.  
- Allows users to create, view, update, and delete notes.  
- Connects to the backend using Fetch API to perform CRUD operations on notes.  
- Deployed using Firebase Hosting.  

## How to Deploy and Run the Project  

### Backend:  
1. Set up Firebase CLI:  
npm install -g firebase-tools firebase login

2. Initialize Firebase in your project folder:  
firebase init

Select `Functions` and `Hosting` when prompted.  

3. Navigate to the `functions` directory, install dependencies, and deploy the backend:  
cd functions npm install firebase deploy --only functions


4. Once deployed, Firebase provides the hosting URL for your backend services.  

### Frontend:  
1. Place your frontend code (HTML, CSS, JavaScript) in the `public/` folder created by Firebase Hosting.  

2. Deploy the frontend:  

firebase deploy --only hosting


3. The app will be accessible at the provided Firebase Hosting URL.  

## Features  

- **Create a Note:** Enter a title and content, then click the "Add Note" button.  
- **View Notes:** View your saved notes displayed on the page.  
- **Edit a Note:** Click the "Edit" button next to a note to update its title or content.  
- **Delete a Note:** Click the "Delete" button next to a note to remove it.  

## Requirements  

1. **Node.js** (for Firebase Functions).  
2. Firebase Account.  

## Technologies  

### Frontend:  
- HTML  
- CSS  
- JavaScript  

### Backend:  
- Firebase Cloud Functions  
- Firebase Admin SDK  
- Firestore  

## Deployment Notes  
Initially, a Python-based backend with Flask was used. However, the backend was later migrated to **Firebase Cloud Functions** to simplify deployment and scalability.  

### Database:  
- **Type:** NoSQL (Firestore).  
- **Features:** Real-time syncing, scalability, and easy integration with Firebase Authentication.  

### Hosting:  
- Hosted on Firebase Hosting for seamless integration with the backend and database services.  

## How to Access the Project  

- Visit the deployed app at: [https://cloudnote-60e49.web.app](https://cloudnote-60e49.web.app)  
