const yargs = require("yargs");

const { addNote, removeNote, listNotes, readNote } = require("./notes");

yargs.version("1.1.0");

const argv = yargs.argv;

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Add note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "show list",
  handler: () => listNotes(),
});

yargs.command({
  command: "read",
  describe: "read",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    readNote(argv.title);
  },
});

yargs.parse();
