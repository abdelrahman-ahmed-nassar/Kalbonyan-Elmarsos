### DEPLOYMENT

**set up a ssh key**

heroku keys:add
heroku create app-name

- add this scripts 
"start": "node src/app.js"


- change the port 

cont app = express();
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log("server is up on port" + port);
});

- change the domain for requests in js files

remove the domain

**push code to heroku**

 git push heroku main