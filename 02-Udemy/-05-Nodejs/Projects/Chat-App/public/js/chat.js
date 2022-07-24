const socket = io();

//----------------------------------
// Elements
//----------------------------------
const $messageForm = document.querySelector("#message-form");
const $messageFormInput = $messageForm.querySelector("input");
const $messageFormBUtton = $messageForm.querySelector("button");
const $locationBtn = document.querySelector("#send-location");
const $messages = document.querySelector("#messages");
const $sidebar = document.querySelector("#sidebar");

//----------------------------------
// Templates
//----------------------------------
const messageTemplate = document.querySelector("#message-template").innerHTML;
const locationTemplate = document.querySelector(
  "#location-message-template"
).innerHTML;
const sidebarTemplate = document.querySelector("#sidebar-template").innerHTML;

//----------------------------------
// utils
//----------------------------------
const autoScroll = () => {
  // new message element
  const $newMessage = $messages.lastElementChild;

  // get the height of the new message
  const newMessageStyle = getComputedStyle($newMessage);
  const newMessageMargin = parseInt(newMessageStyle.marginBottom);
  const newMessageHeight = $newMessage.offsetHeight + newMessageMargin;

  // visible height
  const visibleHeight = $messages.offsetHeight;

  // height of the container
  const containerHeight = $messages.scrollHeight;

  // how far have i scrolled
  const scrollOffset = $messages.scrollTop + visibleHeight;

  if (containerHeight - newMessageHeight <= scrollOffset) {
    $messages.scrollTop = $messages.scrollHeight;
  }
};

//----------------------------------
// Socket events
//----------------------------------
socket.on("message", (message) => {
  const html = Mustache.render(messageTemplate, {
    username: message.username,
    message: message.text,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  $messages.insertAdjacentHTML("beforeend", html);
  autoScroll();
});

socket.on("locationMessage", (message) => {
  const html = Mustache.render(locationTemplate, {
    username: message.username,
    url: message.url,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  $messages.insertAdjacentHTML("beforeend", html);
  autoScroll();
});

socket.on("roomData", ({ room, users }) => {
  const html = Mustache.render(sidebarTemplate, {
    room,
    users,
  });
  $sidebar.innerHTML = html;
});

//----------------------------------
// event listener
//----------------------------------
$messageFormBUtton.addEventListener("click", (e) => {
  // e.preventDefault();

  $messageFormBUtton.setAttribute("disabled", "disabled");

  // disable the form
  const message = $messageFormInput.value;

  socket.emit("sendMessage", message, (error) => {
    $messageFormBUtton.removeAttribute("disabled", "disabled");
    $messageFormInput.value = "";
    $messageFormInput.focus();
    // enable it
    if (error) return console.log(error);

    console.log("Message delivered!");
  });
});

$locationBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser.");
  }

  $locationBtn.setAttribute("disabled", "disabled");

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit(
      "sendLocation",
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      () => {
        $locationBtn.removeAttribute("disabled");
        console.log("Location shared!");
      }
    );
  });
});

// queries
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

socket.emit("join", { username, room }, (error) => {
  if (error) {
    location.href = "/";
    alert(error);
  }
});
