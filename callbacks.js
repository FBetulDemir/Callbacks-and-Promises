// Converted existing promises (down below using .then() and .catch()) into async/await syntax
const rollDice = () => {
    return new Promise((resolve, reject) => {
        const randomDice = Math.floor(Math.random() * 6) + 1;
        randomDice === 6
            ? resolve('You rolled a 6! You win!')
            : reject(
                  `You rolled a ${randomDice} and you lost. Try your chance another time!`
              );
    });
};

const rollDiceaResult = async () => {
    try {
        const result = await rollDice();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

// rollDiceaResult();

const fetchAdvice = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        console.log(data.slip.advice);
    } catch {
        console.log('Error fetching advice', error);
    }
};

// fetchAdvice();

const getAdviceAfterRollingDice = async () => {
    try {
        const result = await rollDice();
        console.log(result);
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        console.log('Advice:', data.slip.advice);
    } catch (error) {
        console.log('Error:', error);
    }
};

getAdviceAfterRollingDice();

// //  JavaScript function that returns a promise using .then() and .catch()
// const rollDice = () => {
//     return new Promise((resolve, reject) => {
//         const randomDice = Math.floor(Math.random() * 6) + 1;
//         if (randomDice === 6) {
//             resolve('You rolled a 6! You win!');
//         } else {
//             reject(
//                 `You rolled a ${randomDice} and you lost. Try your chance another time!`
//             );
//         }
//     });
// };

// const getAdvice = () => {
//     return fetch('https://api.adviceslip.com/advice')
//         .then((response) => response.json())
//         .then((data) => {
//             return data.slip.advice;
//         })
//         .catch((error) => {
//             console.error('Error fetching advice', error);
//         });
// };

// const rewardAdvice = () => {
//     rollDice()
//         .then((message) => {
//             console.log(message);
//             return getAdvice();
//         })
//         .then((advice) => {
//             console.log("Here's your reward advice: " + advice);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };

// rewardAdvice();
