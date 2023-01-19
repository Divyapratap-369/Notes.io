// Get elements
const noteForm = document.getElementById('note-form');
const noteText = document.getElementById('note-text');
const noteList = document.getElementById('note-list');

// Save note
noteForm.addEventListener('submit', saveNote);

function saveNote(e) {
  e.preventDefault();
  
  // Create list item
  const li = document.createElement('li');
  li.innerHTML = noteText.value;

  // Append to list
  noteList.appendChild(li);

  // Clear textarea
  noteText.value = '';
}
