# CloudNote
CNG 495 Cloud Note Project

CloudNote is a simple note-taking app that lets you create, update, view, and delete notes. It uses Firebase for storing notes and handling user authentication. The app has a backend built with Flask and a frontend made with HTML, CSS, and JavaScript.

Project Structure

1) Backend (Server):

-Located in the server/ folder.
-Built with Flask.
-Uses Firebase Firestore for storing and managing notes.
-API endpoints:
	POST /notes: Create a new note.
	GET /notes/user/<user_id>: Get notes for a specific user.
	PUT /notes/<note_id>: Update a note.
	DELETE /notes/<note_id>: Delete a note.

2) Frontend:

-Located in the front-end/ folder.
-Built with HTML, CSS, and JavaScript.
-Allows users to create, view, update, and delete notes.
-Connects to the backend using Fetch API to perform CRUD operations on notes.

How to Run the Project

Backend:

1) Go to the server/ folder.

2) Install the required Python packages:

pip install -r requirements.txt

3)Run the Flask app:

python app.py

4)The backend will be available at http://127.0.0.1:5000.

Frontend:

1)Open the front-end/ folder.

2)index.html in any web browser.

3)The app will load and connect to the backend running on localhost.

How to Use

-Create a Note: Enter a title and content, then click the "Add Note" button.
-View Notes: Your saved notes will appear below the form.
-Edit a Note: Click the "Edit" button next to a note to update it.
-Delete a Note: Click the "Delete" button next to a note to remove it.

Requirements

1)Python 3.x
2)Flask
3)Firebase Account
