// take a success callback function
// then take a fail callback function

// check if the API exist in the current browser
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      // special object that contains the position
      // this has an child object inside it called coords
      // the coords object has a property called latitude and longitude
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      // create a google maps link to the current location
      console.log(`https://www.google.com/maps/@${latitude},${longitude},15z`);
    },
    function () {
      alert("Could not get your position");
    }
  );
}
