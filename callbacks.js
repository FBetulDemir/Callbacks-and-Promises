//  JavaScript function that returns a promise.
const rollDice = () => {
  return new Promise((resolve, reject) => {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    if (randomDice === 6) {
      resolve("You rolled a 6! You win!");
    } else {
      reject(
        `You rolled a ${randomDice} and you lost. Try your chance another time!`
      );
    }
  });
};
