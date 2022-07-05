// formatting dates according to each country

const now = new Date();
// the arg is the local language
const formatted = new Intl.DateTimeFormat("en-US").format(now);
console.log(formatted);
// 5/23/2022

// optimize it by options
// so it will display only what you write
const options = {
  year: "numeric",
  weekday: "short",
  month: "long",
  day: "numeric",
  // month: '2-digit',
  hour: "numeric",
  minute: "numeric",
};

const formattedOptimize = new Intl.DateTimeFormat("en-US", options).format(now);
console.log(formattedOptimize);

// "en-GB"   =>  uk
// "ar-SY"   =>  syria
//

// iso language table

// get the iso from the user browser

const locale = navigator.language;
console.log(locale);

const formattedOptimized = new Intl.DateTimeFormat(locale, options).format(now);
