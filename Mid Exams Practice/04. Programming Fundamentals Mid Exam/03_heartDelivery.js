function heartDelivery(input) {

    let housesArray = input.shift().split('@').map(Number);
    let indexOfCurrHouse = 0;

    let inputLength = input.length;
    for (let i = 0; i < inputLength; i++) {

        let array = input.shift().split(' ');
        let command = array[0];

        if (command === 'Love!') {

            break;

        } else {

            let steps = Number(array[1]);
            indexOfCurrHouse += steps;

            if (indexOfCurrHouse > housesArray.length - 1) {

                indexOfCurrHouse = 0;

            }

            if (housesArray[indexOfCurrHouse] === 0) {

                console.log(`Place ${indexOfCurrHouse} already had Valentine's day.`);

            } else {

                housesArray[indexOfCurrHouse] -= 2;

                if (housesArray[indexOfCurrHouse] === 0) {

                    console.log(`Place ${indexOfCurrHouse} has Valentine's day.`);
                }

            }

        }
    }

    console.log(`Cupid's last position was ${indexOfCurrHouse}.`);

    let housesCelebratingValentinesDay = 0;
    for (let j = 0; j < housesArray.length; j++) {
        let currHouseHearts = housesArray[j];

        if (currHouseHearts === 0) {
            housesCelebratingValentinesDay++;
        }

    }

    if (housesCelebratingValentinesDay === housesArray.length) {
        console.log(`Mission was successful.`);
    } else {
        let housesNotCelebrating = housesArray.length - housesCelebratingValentinesDay;
        console.log(`Cupid has failed ${housesNotCelebrating} places.`);
    }
}
heartDelivery((["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
);