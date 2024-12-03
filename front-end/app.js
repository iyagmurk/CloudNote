const API_URL = "http://127.0.0.1:5000"; // Backend adresi

// Add notes
function createNote() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (!title || !content) {
        alert("Please fill in both fields!");
        return;
    }

    const data = { 
        title: title, 
        content: content, 
        user_id: "1234" // Fixed user ID
    };

    fetch(API_URL + "/notes", { //POST request to create a new note
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to create note."); // Error message
        }
        return response.json();
    })
    .then(() => {
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
        fetchNotes(); // Reload notes
    })
    .catch(error => {
        alert("Could not create note."); // Error message
    });
}

// Tüm notları getirme
function fetchNotes() {  // GET request to fetch notes for the user
    fetch(API_URL + "/notes/user/1234") 
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch notes.");
        }
        return response.json();
    })
    .then(notes => {
        displayNotes(notes);
    })
    .catch(error => {
        alert("Could not fetch notes."); // Error message
    });
}

// Display notes
function displayNotes(notes) {
    const notesContainer = document.getElementById("notes-container");
    notesContainer.innerHTML = ""; 

    notes.forEach(note => {  // Create a container for each note

        const noteDiv = document.createElement("div");
        noteDiv.className = "note";

        // Add the note's content and buttons to the container
        noteDiv.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button onclick="editNote('${note.id}', '${note.title}', '${note.content}')">Edit</button>
            <button onclick="deleteNote('${note.id}')">Delete</button>
        `;

        // Append the note container 
        notesContainer.appendChild(noteDiv);
    });
}

// Edit Notes
function editNote(noteId, currentTitle, currentContent) {
    const newTitle = prompt("Enter new title:", currentTitle);
    const newContent = prompt("Enter new content:", currentContent);
	
	// Check if the user provided both title and content

    if (!newTitle || !newContent) {
        return;
    }

    const data = { title: newTitle, content: newContent };
	
	//PUT request to update the note

    fetch(API_URL + "/notes/" + noteId, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to update note."); // Error message 
        }
        fetchNotes(); // Reload the notes
    })
    .catch(error => {
        alert("Could not update note.");
    });
}

// Delete Notes
function deleteNote(noteId) {
	//DELETE request to remove the note
    fetch(API_URL + "/notes/" + noteId, {
        method: "DELETE"
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to delete note."); //Error message
        }
        fetchNotes(); // Reload the notes
    })
    .catch(error => {
        alert("Could not delete note.");
    });
}

fetchNotes();
