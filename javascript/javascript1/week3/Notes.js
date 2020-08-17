//Saving a note
const notes = [];
function saveNote (content, id) {
  notes.push({content, id});
}
saveNote('Pick up groceries.', 1);
saveNote('Do laundry.', 2);
saveNote('Call Thomas.', 3)
console.log(notes);

//Getting a note by ID
function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      return `Your note is: ${notes[i].content}`;
    } 
  }
  return `No note is found`;
 }

console.log(getNote(1)); //'Your note is: Do laundry'
console.log(getNote(4)); //'No note is found'

//Logging out notes
function logOutNotesFormatted(id){
  for (let i = 0; i < notes.length; i++) {
   console.log(`The note with id: ${notes[i].id} has the follwing text: ${notes[i].content}`);
  }
}

logOutNotesFormatted();

