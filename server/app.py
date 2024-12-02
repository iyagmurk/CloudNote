from flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import credentials, firestore

# Start the Flask application
app = Flask(__name__)

# Connect to Firebase 
cred = credentials.Certificate(r"C:\CloudNote\server\firebase_config.json")  # Firebase config file
firebase_admin.initialize_app(cred)

# Firestore database connection
db = firestore.client()

#Check if the server is running
@app.route("/")
def home():
    return "CloudNote Backend is running!"

#Create a new note
@app.route("/notes", methods=["POST"])
def create_note():
    try:
        data = request.json  # Get the data sent in the request
        user_id = data.get("user_id") 
        note_ref = db.collection("notes").add({
            "user_id": user_id, 
            "title": data["title"],  
            "content": data["content"],  
            "created_at": firestore.SERVER_TIMESTAMP 
        })
        return jsonify({"id": note_ref[1].id}), 201  # If there is no error, display success message
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Error exception

#Get all notes for a specific user
@app.route("/notes/user/<user_id>", methods=["GET"])
def get_user_notes(user_id):
    try:
        notes_ref = db.collection("notes").where("user_id", "==", user_id)  # Query notes for the user
        notes = notes_ref.stream()  # Fetch notes from Firestore
        notes_list = [{"id": note.id, **note.to_dict()} for note in notes]  # Convert notes to a list of dictionaries
        return jsonify(notes_list), 200  # Return the list of notes
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Error exception

#Update an existing note
@app.route("/notes/<note_id>", methods=["PUT"])
def update_note(note_id):
    try:
        data = request.json  # Get the data sent in the request
        note_ref = db.collection("notes").document(note_id)  # Find note ID
        note_ref.update(data)  # Update note
        return jsonify({"message": "Note updated!"}), 200  # If there is no error, display success message
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Error exception

#Delete a note
@app.route("/notes/<note_id>", methods=["DELETE"])
def delete_note(note_id):
    try:
        db.collection("notes").document(note_id).delete()  # Delete the note by ID
        return jsonify({"message": "Note deleted!"}), 200  # If there is no error, display success message
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Error exception

# Start the Flask application
if __name__ == "__main__":
    app.run(debug=True)
