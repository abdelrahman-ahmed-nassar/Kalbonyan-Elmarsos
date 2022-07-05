const day = "monday";

switch (day) {
  case "monday": //mean  if  day === 'monday'
    console.log("plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("preparing theory videos");
    break;
  case "wednesday":
  case "thursday": // mean if day === wednesday || thursday
    console.log("write code example");
    break;
  case "friday":
    console.log("record video");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the week end");
    break;
  default:
    console.log(" not a valid day!");
}

if (day == "monday") {
  console.log("plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("preparing theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code example");
} else if (day === "friday") {
  console.log("record video");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the week end");
} else {
  console.log(" not a valid day!");
}
