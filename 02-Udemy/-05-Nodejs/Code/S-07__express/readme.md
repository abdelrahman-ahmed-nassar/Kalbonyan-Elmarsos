install express 

require(express);

### create server
const app = express();

### receive request and send data 

app.get("url route", callbackFunction(req, res) => {
  res.send(app data)
})

### open the server

app.listen(3000, initialCallBackFunction)

### send html as response
put the html inside a text

### send JSON as response
pass array or object just like that

### provide a separate files to load in the server


**get the path of the index.html file** 
the raw way  with some string manipulation
console.log(__dirname) => the path to directory
console.log(__filename) => the path to the file


with path npm package (built in node)

path.join(__dirname, "the path")

**use the html file**

app.use(express.static(path of the folder));

### add css
make normal css file and link it to the html file

### add js
make normal js file and link it to the html file

### add images 
bro just as normal i'm not gonna learn you html basics

**when dealing with hbs**
use the path as you in the public folder

### dynamic pages with template engine 
npm install hbs

### setup  hbs
app.set("view engine", "hbs");

### create template 

create views folder in the main directory

create index.hbs file

have the same features as html

### serve the route

app.get("path", (req, res)  => {
  res.render("fileName with out extension", {
    values: 1;
  })
}) 


### inject dynamic values

{{value}}


###  customize the handle bars 

get the new views path as you want it
const viewsPath = path.join(__dirname, "../newName")

app.set("views", viewsPath)

### partials in hbs

import  hbs

create new folder for partials 

hbs.registerPartial(partialPath)


**create a partial**

create new file in the partials dir and put html elements inside it 

**use partials**
in the file you want to use partial
{{>filename}}

### make the nodemon restart for the html changes
nodemon path -e js,hbs

**using dynamic value in the partial**
as you will put it in the normal hbs file

{{value}}

### 404 page 
