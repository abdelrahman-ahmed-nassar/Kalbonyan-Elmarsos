const fs = require("fs");

// helpers

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

// core functions

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  // debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
  } else {
    console.log("Note title taken!");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  // filter

  const notesToKeep = notes.filter((note) => note.title !== title);
  saveNotes(notesToKeep);

  if (notes.length > notesToKeep.length) {
    console.log("Note Removed!");
  } else {
    console.log("No Note Found!");
  }
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length === 0) {
    console.log("There is NO notes ");
    return;
  }
  console.log("\n YOUR NOTES: \n");
  notes.forEach((note, i) => {
    console.log(`Note ${i + 1}: ${note.title}`);
  });
  console.log();
};

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(note.title + ":");
    console.log(note.body);
  } else {
    console.log("Note Not Found");
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
