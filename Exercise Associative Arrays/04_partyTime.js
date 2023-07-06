function demo(input) {
    let ordinaryGuestsList = [];
    let vipGuestsList = [];

    let data = input.shift();

    while (data !== 'PARTY') {

        let firstChar = data[0];
        if (isNaN(firstChar)) {
            ordinaryGuestsList.push(data);
        } else {
            vipGuestsList.push(data);
        }

        data = input.shift();
    }

    let allGuests = vipGuestsList.concat(ordinaryGuestsList);

    for (const guest of input) {

        if (allGuests.includes(guest)) {
            allGuests.splice(allGuests.indexOf(guest), 1);
        }
    }

    console.log(allGuests.length);
    allGuests.forEach(el => console.log(el))
}
demo(['7IK9Yo0h',
    '9NoBUajQ',
    '9NoBUajQ',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    '9NoBUajQ',
    'SVQXQCbc'
])