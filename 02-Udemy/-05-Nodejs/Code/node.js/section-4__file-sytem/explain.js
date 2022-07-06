/*
get input from the user with argument 

after running the file you can add argument and access it with the process.argv


give you array with the values 

the first is the path of node in the device 
the second is the path of the project

the else is yours 

you can use the arguments to make code dynamic 


install yargs to parse arguments 

all the arguments will be in the _ property 
to add a new property   --title="stuff"

to update the version 

yargs.version("1.0.0");

to customize yargs and add commands 


yargs.command({
  command: "remove",
  describe: "remove new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true, t
      type: "string"
    }, 
  },
  "handler": function (argv) {
    console.log("removing a new note!")
      console.log("listing out all notes!")
  } 
})

in the file make sure to add yargs.parse() to make the yargs works

--- save data   (1-json.json)

fs.writeFileSync("file.json", DataInJSON)

- read data 

const bufferedData = fs.readFileSync()

*/
