const generateRandomNumber = num => {
    return Math.floor(Math.random() * num)
};

const personalMessage = {
    affirmation: ['enough', 'beautiful', 'strong', 'resilient'],
    emotion: ['to cry', 'not to be okay', 'to be sad', 'to not have it all figured out'],
    motivation: ['trust God', 'never give up', 'stay strong', 'keep going']
};

let inspirationalMessage = [];

for (let arr in personalMessage) {
    let personal = generateRandomNumber(personalMessage[arr].length)
    switch (arr) {
        case 'affirmation':
            inspirationalMessage.push(`You are ${personalMessage[arr][personal]}.`)
            break
        case 'emotion':
            inspirationalMessage.push(`It's okay ${personalMessage[arr][personal]}.`)
            break
        case 'motivation':
            inspirationalMessage.push(`Keep calm and ${personalMessage[arr][personal]}.`)
            break
        default:
            inspirationalMessage.push('Keep going!')
    }
};

console.log(inspirationalMessage.join('\n'));