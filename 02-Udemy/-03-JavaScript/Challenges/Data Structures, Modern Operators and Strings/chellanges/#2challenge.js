const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//*******  challenge 1
game;
//--- task 1
const [players1, players2] = game.players;
console.log(players1, players2);

//--- task 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//--- task 3
const allPlayers = [...players1, ...players2];

//--- task 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//--- task 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// other way
// const { team1, x: draw, team2 } = game.odds;

//--- task 6
const printGoals = function (...arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `${arr[i]} scored a Goal and the total goals is : ${i + 1}  goals`
    );
  }
};
printGoals(...game.scored);

//--- task 7

// task 7
team1 < team2 && console.log("team1 win");
team1 > team2 && console.log("team2 win");
team1 === team2 && console.log("draw");
// take the first truthy value
//********  Coding Challenge #2

//--- task 1
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1} :${game.scored[i]}`);
}

//--- other way
for (const item of game.scored.entries()) {
  console.log(`Goal ${item[0] + 1} : ${item[1]}`);
}

//-- better way

for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1} : ${player}`);
}

//--- task 2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

//-- other way
let average2 = 0;
for (let i = 0; i < odds.length; i++) {
  average2 += odds[i];
}
average2 /= odds.length;
console.log(average2);

//--- task 3
const oddsEntries = Object.entries(game.odds);
for (const [team, odd] of oddsEntries) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

//--- task 4
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
