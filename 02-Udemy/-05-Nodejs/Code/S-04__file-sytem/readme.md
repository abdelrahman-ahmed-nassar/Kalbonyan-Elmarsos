### get input from the user with argument

after running the file you can add argument and access it with the `process.argv`

It will give you array with the values

the first is the path of node in the device
the second is the path of the project

the else is yours

`process.argv[1]`

you can use the arguments to make code dynamic

## using yargs

install yargs to parse arguments `npm install yargs`

### access params

all the arguments will be an array in the \_ property

`console.log(yargs.argv._)`

to add a new property `--title="stuff"`

to access the new property `yargs.argv.title`

to customize yargs and add commands

```
yargs.command({
  command: "remove",
  describe: "remove new note",
  // data related to the command and required
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
  },
  "handler": function (argv) {
    console.log("removing a new note!")
    console.log("listing out all notes!")
    console.log(argv.title)
  }
})
```

in the file make sure to add yargs.parse() to make the yargs works

--- save data (1-json.json)

` fs.writeFileSync("file.json", DataInJSON)`

- read data

```
const bufferedData = fs.readFileSync()

const data = bufferedData.toString()
```
