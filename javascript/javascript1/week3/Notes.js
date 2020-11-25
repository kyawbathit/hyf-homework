//Adding Notes
const notes = [];
function saveNote(content, id){
notes.push({content, id});
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);
saveNote('Watch film', 3);
console.log(notes); //[ { content: 'Pick up groceries', id: 1 }, { content: 'Do laundry', id: 2 }, { content: 'Watch film', id: 3 } ]

//Getting Notes
function getNote(id) {
  for (let i = 0; i < notes.length; i++){
  if (id === notes[i].id){
    return notes[i];
  } 
  }
}
const firstNote = getNote(2) 
console.log(firstNote); //{ content: 'Do laundry', id: 2 }

//Logging Notes out
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++){
  console.log(`The id:${notes[i].id} note tells: ${notes[i].content}`) 
  } 
}

logOutNotesFormatted(); //'The id:1 note tells: Pick up groceries' 'The id:2 note tells: Do laundry'

//Deleting Notes
function deleteNote(id) {
  for (let i = 0; i < notes.length; i++){
  if (notes[i].id === id){
     notes.splice(i, 1);
    } 
  }
}

deleteNote(2); //ID: 2 note was deleted