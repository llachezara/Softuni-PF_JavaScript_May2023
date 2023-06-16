function demo(array) {
    let arrayOfwagons = array.shift().split(' ').map(Number);
    let maxWagonCapacity = Number(array.shift());

    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        let command = array[i].split(' ');

        if (command.length > 1) {

            let newWagonPassengers = Number(command[1]);
            arrayOfwagons.push(newWagonPassengers);

        } else {
            let passengersToAdd = Number(command[0]);

            for (let i = 0; i < arrayOfwagons.length; i++) {
                let currWagon = arrayOfwagons[i];
                let freePassengersSits = maxWagonCapacity - currWagon;

                if ( passengersToAdd <= freePassengersSits) {
                    arrayOfwagons[i] += passengersToAdd;
                    break;
                } else {
                    continue;
                }
            }
        }
    }

    console.log(arrayOfwagons.join(' '));
}
demo(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)