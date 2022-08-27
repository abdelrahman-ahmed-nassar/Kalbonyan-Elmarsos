const fs = require("fs");
const chalk = require("chalk");
const saveNotes = function (notes) {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};
const addNote = function (heading, body) {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === heading);
  if (!duplicateNote) {
    notes.push({ title: heading, body });
    saveNotes(notes);
    console.log(chalk.green("New note added"));
  } else {
    console.log(chalk.red("Note title taken"));
  }
};
const listNotes = () => {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.log(chalk.blue("Your Notes :"));
    return notes.forEach((note) => console.log(`- ${note.title}`));
  } else {
    console.log(chalk.red("No notes to show"));
  }
};
const removeNote = function (noteTitle) {
  const notes = loadNotes();
  const noteFound = notes.find((note) => note.title === noteTitle);
  if (noteFound) {
    const newNotes = notes.filter((note) => note.title !== noteTitle);
    saveNotes(newNotes);
    console.log(chalk.green("Note removed"));
  } else {
    console.log(chalk.red("No note found"));
  }
};
const loadNotes = () => {
  try {
    const bufferData = fs.readFileSync("notes.json");
    const jsonData = bufferData.toString();
    return JSON.parse(jsonData);
  } catch (err) {
    return [];
  }
};
const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.blue(`${note.title} :`));
    console.log(note.body);
  } else {
    console.log(chalk.red("No note found"));
  }
};
module.exports = { addNote, removeNote, listNotes, readNote };
Footer;
