const getJson = function (url, errorMsg = "something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(errorMsg);
    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // take array of promises and return one big promise
    const data = await Promise.all([
      getJson("https://restcountries.com/v2/name/" + c1),
      getJson("https://restcountries.com/v2/name/" + c2),
      getJson("https://restcountries.com/v2/name/" + c3),
    ]);
    console.log(data);
    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.log(err);
  }
};

get3Countries("portugal", "canada", "tanzania");
