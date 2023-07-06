function demo(input) {

    let powerOfCards = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }

    let typeOfCards = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    let people = {};
    let players = {};

    for (const data of input) {

        let [name, cards] = data.split(': ');
        cards = cards.split(', ');
        if (!people.hasOwnProperty(name)) {

            people[name] = cards;

        } else {

            people[name] = people[name].concat(cards);
        }

    }


    for (const [name, arrayOfCards] of Object.entries(people)) {

        let cardsWithoutRepeats = [];
        for (const card of arrayOfCards) {

            if (!cardsWithoutRepeats.includes(card)) {
                cardsWithoutRepeats.push(card);
            }
        }


        let sum = 0;
        for (const card of cardsWithoutRepeats) {

            let cardPower = '';
            let cardType = '';

            if (card.length < 3) {

                cardPower = card[0];
                cardType = card[1];

            } else {

                cardPower = card[0] + card[1];
                cardType = card[2];
            }


            let cardPoints = powerOfCards[cardPower] * typeOfCards[cardType]
            sum += cardPoints;
        }

        players[name] = sum;
    }


    for (const [name, totalCardPoints] of Object.entries(players)) {
        console.log(`${name}: ${totalCardPoints}`);
    }
}
demo([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ])