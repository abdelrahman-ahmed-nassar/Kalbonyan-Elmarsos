navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log(position);
  },
  function (error) {
    console.log(error);
  }
);

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    // (position) => resolve(position),
    // (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((pos) => console.log(pos));

const whereAmI = function (lat, lng) {};

whereAmI(19.037, 72.873);
