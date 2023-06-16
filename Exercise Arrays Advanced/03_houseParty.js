function houseParty(array) {
    let currName = '';
    let listWithGuests = [];
    
    for (const el of array) {
        let newArray = el.split(' ');
        currName = newArray[0];

        if (!el.includes('not')) {

            if (listWithGuests.includes(currName)) {
                console.log(`${currName} is already in the list!`);
            } else {
                listWithGuests.push(currName);
            }

        } else {

            if (listWithGuests.includes(currName)) {

                let indexOfEl = listWithGuests.indexOf(el);
                listWithGuests.splice(indexOfEl, 1);

            } else {
                console.log(`${currName} is not in the list!`);
            }

        }
    }

    console.log(listWithGuests.join('\n'));
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);