function demo(input) {
    let participants = {};
    let participantsArray = input.shift().split(', ');

    for (const name of participantsArray) {
        participants[name] = 0;
    }


    let line = input[0];
    let i = 0;
    while (line !== 'end of race') {

        let patternDigits = /[0-9]/g;
        let patternLetter = /[A-Za-z]+/g;

        let digits = line.match(patternDigits);
        let letters = line.match(patternLetter);

        let nameFromInput = letters.join('');
        let totalDistance = 0;

        for (const distance of digits) {
            totalDistance += +distance;
        }

        if (participants.hasOwnProperty(nameFromInput)) {
            participants[nameFromInput] += totalDistance;
        }

        i++;
        line = input[i];

    }

    let sorted = Object.entries(participants).sort((a, b) => b[1] - a[1]);

    for (let index = 0; index <= 2; index++) {
        const name = sorted[index][0];

        let place = '';
        switch (index) {
            case 0:
                place = '1st';
                break;
            case 1:
                place = '2nd';
                break;
            case 2:
                place = '3rd';
                break;
        }

        console.log(place + ' place: ' + name);

    }
}
demo(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
)