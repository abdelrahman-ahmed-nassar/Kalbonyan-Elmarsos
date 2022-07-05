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
// task 1
const [players1, players2] = game.players;
console.log(players1, players2);

// task 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// task 3
const allPlayers = [...players1, ...players2];

// task 4
const player1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(player1Final);

// task 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// other way
// const { team1, x: draw, team2 } = game.odds;

// task 6
const printGoals = function (...arr) {
  for (let i = 0; i > arr.length; i++) {
    console.log(`${arr[i]} the total goals : ${arr.length} goals `);
  }
};

printGoals(...game.scored);

// task 7
team1 < team2 && console.log("team1 win");
team1 > team2 && console.log("team2 win");
team1 === team2 && console.log("draw");
