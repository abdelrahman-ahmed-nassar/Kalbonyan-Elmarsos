### send emails

use the @sendgrid/mail package
login to the website and get the api key

send emails

### setup environments variables

use the env-cmd package as dev dependency

create the config folder with env file inside it

### access environment variables

adjust the dev script to be env-cmd -f ./config/dev.env nodemon src/index.js

process.env.NAME

### create production database

use mongodb atlas

create cluster
create user
use this api address 0.0.0.0/0

connect to the db
download compass

create a connection with srv

### deployment

push the project to github

heroku create name

push to heroku branch

**config the environment variables**
heroku config:set key=value

**see the configurations**
heroku config

set the MONGODB_URL from the website
