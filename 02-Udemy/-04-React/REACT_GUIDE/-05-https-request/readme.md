# HTTP REQUESTS AND APIS

we don't link our app directly to a database because that will insecure and expose your credentials to the users 

we connect our app to another backend application (API) and this app will talk to the database



## GET REQUEST 

we do all our work in the useEffect and store data in state

use the fetch API to send a request to an api 


we can deal with promises with then and catch or async await like normal js

you can handle errors with try and catch

## POST REQUEST 

use the fetch api with second argument which is the configuration argument 

fetch(url, {
  method: "POST",
  body: JSON.stringify(OBJECT),
  headers: {
    "Content-Type": "application/json"
  } 
})