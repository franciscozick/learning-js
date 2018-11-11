let userName = 'Francisco';
userName ? console.log(`Hello, ${userName}`) : console.log(`Hello`);
const userQuestion = 'Will I learn JS?';
console.log(`${userName} asked ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
    case 0:
        eightBall = "yes definetly";
        break;
    case 1:
        eightBall = "I want to say yes but i'm not sure"
        break;
    case 2:
        eightBall = "Maybe but idk"
        break;
    case 3:
        eightBall = " Humm Probably?"
        break;
    case 4:
        eightBall = "I'm asleep come back tmr"
        break;
    case 5:
        eightBall = "How should I know?"
        break;
    case 6:
        eightBall = "Only the future will tell us"
        break;
    case 7:
        eightBall = "NEVER GIVE UP"
        break;
}

console.log(`The eight ball answered: ${eightBall}`)