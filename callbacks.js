//  JavaScript function that returns a promise.
const rollDice = () => {
    return new Promise((resolve, reject) => {
        const randomDice = Math.floor(Math.random() * 6) + 1;
        if (randomDice === 6) {
            resolve('You rolled a 6! You win!');
        } else {
            reject(
                `You rolled a ${randomDice} and you lost. Try your chance another time!`
            );
        }
    });
};

const getAdvice = () => {
    return fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => {
            return data.slip.advice;
        })
        .catch((error) => {
            console.error('Error fetching advice', error);
        });
};

const rewardAdvice = () => {
    rollDice()
        .then((message) => {
            console.log(message);
            return getAdvice();
        })
        .then((advice) => {
            console.log("Here's your reward advice: " + advice);
        })
        .catch((error) => {
            console.log(error);
        });
};

rewardAdvice();
