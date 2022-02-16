const { stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {}

const q = [
  'Whats your name? Nicknames are also acceptable :)',
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
]


const ask = (index) => {
  if (index === q.length) {
    rl.close()
  }
  rl.question(`${q[index]} \n`, (answer) => {
    profile[q] = answer
    ask(index + 1);
  });
}

ask(0)
