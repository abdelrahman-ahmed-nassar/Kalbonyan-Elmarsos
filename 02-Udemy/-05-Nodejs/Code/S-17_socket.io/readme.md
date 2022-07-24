### config the server

```
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socketIo = require("socket.io");
const io = socketIo(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.send("");
});

server.listen(port, () => {
  console.log(`server is running on ${port} port`);
});

```

### io events

```
io.on("connection", () => {
  console.log("New WebSocket connection");
});
```

### configure client

add this script to the index.html file

```
    <script src="/socket.io/socket.io.js"></script>
    <script src="/js/chat.js"></script>
```

run this function in the chat.js file => io()

### send an event

```
io.on("connection", (socket) => {
  console.log("New WebSocket connection");

  socket.emit("CountUpdated", value);
});


```

### listen to the custom event in the client side

```
const socket = io();

socket.on("countUpdated", (count) => {
  console.log("THe count has been updated", count)
});

```

### emit event from the client

```
btn.addEventListener("click", (e) => {
  console.log("clicked");
  socket.emit("increment");
});
```

### listen in the server to events come from the client

io.on()

### relation between client and server

```
const socket = io();
const btn = document.querySelector("button");
const input = document.querySelector("input");
socket.on("message", (message) => {
  console.log(message);
});

btn.addEventListener("click", (e) => {
  const message = input.value;
  e.preventDefault();
  socket.emit("sendMessage", message);
});
```

```
io.on("connection", (socket) => {
  console.log("New WebSocket Connection");
  socket.emit("message", "Welcome");

  socket.on("sendMessage", (message) => {
    io.emit("message", message);
  });
});

```

### broadCast events

```
socket.broadcast.emit("message", "A New user has come");
```

### Event acknowledgement

Now an acknowledgement is the client getting notified that the event was received and processed and the code that's going to run is provided as the last argument to emit.

```
  socket.emit("sendMessage", message, (value) => {
    console.log("The message was delivered!");
  });

```

```
  socket.on("sendMessage", (message, callBack) => {
    io.emit("message", message);
    callBack(value);
  });
```

**who emit the event send a callback function**
**who receive the event receive a callback function**

#### the client who send the acknowledgment will be the only see it

### use the acknowledgment for validation

use the bad-words npm package

```
    const filter = new Filter();
    if (filter.isProfane(message)) {
      return callBack("Profanity is not allowed!");
    }
```

### render dynamic message

use the mustache library

<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.0.1/mustache.min.js"></script>

**create a template**

```
    <div id="messages"></div>
    <script id="message-template" type="text/html">
      <div>
        <p>This is a message</p>
      </div>;
    </script>
```

**render the template**

```
socket.on("message", (message) => {
  console.log(message);
  const html = Mustache.render(messageTemplate, {
    message,
  });
  $messages.insertAdjacentHTML("beforeend", html);
});
```

in the html use {{key}} to access the data

### format the date

use the moment library

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>

### parse the link queries

use the qs library

const object = Qs.parse(location.search, {ignoreQueryPrefix: true})

## creating rooms

```
socket.on("join", ({ username, room }) => {
    socket.join(room);
  });
```

### send to everyone in specific room

```
    socket.emit("message", generateMessage("Welcome!"));
    socket
      .to(room)
      .emit("message", generateMessage("A New user has come"));
  });

```

### send to everyone in specific room except the sender

```
    socket.emit("message", generateMessage("Welcome!"));
    socket.broadcast
      .to(room)
      .emit("message", generateMessage("A New user has come"));
  });
```
