function demo(input) {
    let parkingLot = {};

    for (let data of input) {

        let [direction, carNumber] = data.split(', ');
        parkingLot[carNumber] = direction;
    }

    let carsInParkingLot = Object.keys(parkingLot).filter(number => parkingLot[number] === 'IN');
    carsInParkingLot.sort((a,b) => a.localeCompare(b));

    if (carsInParkingLot.length === 0) {
        console.log('Parking Lot is Empty');
    }else{
        console.log(carsInParkingLot.join('\n'));
    }
}
demo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)