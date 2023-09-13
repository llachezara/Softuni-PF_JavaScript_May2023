function needForSpeed(arrayOfCarsAndCommands) {

    let carsCount = arrayOfCarsAndCommands.shift();
    let carsArray = [];
    for (let index = 1; index <= carsCount; index++) {
        let [brand, mileage, fuel] = arrayOfCarsAndCommands.shift().split('|');
        let car = {
            brand,
            mileage: Number(mileage),
            fuel: Number(fuel)
        }
        carsArray.push(car);
    }

    for (const command of arrayOfCarsAndCommands) {
        if (command === 'Stop') {
            break;
        }

        if (command.includes('Drive')) {

            let [carName, distance, neededFuel] = command.replace('Drive : ', '').split(' : ');
            distance = Number(distance);
            neededFuel = Number(neededFuel);

            let carToDrive = carsArray.find(item => item.brand === carName);

            if (carToDrive.fuel < neededFuel) {
                console.log('Not enough fuel to make that ride');
            } else {

                let indexOfCarToDrive = carsArray.indexOf(carToDrive);
                carsArray[indexOfCarToDrive].fuel -= neededFuel;
                carsArray[indexOfCarToDrive].mileage += distance;


                console.log(`${carName} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`);

                if (carsArray[indexOfCarToDrive].mileage >= 100000) {
                    carsArray.splice(indexOfCarToDrive, 1);
                    console.log(`Time to sell the ${carName}!`);
                }
            }
        } else if (command.includes('Refuel')) {

            let [carName, fuelToAdd] = command.replace('Refuel : ', '').split(' : ');
            fuelToAdd = Number(fuelToAdd);
            const fuelCapacity = 75;

            let carToRefill = carsArray.find(item => item.brand === carName);
            let indexOfCarToRefill = carsArray.indexOf(carToRefill);

            
            if (carsArray[indexOfCarToRefill].fuel + fuelToAdd > fuelCapacity) {

                console.log(`${carName} refueled with ${fuelCapacity - carsArray[indexOfCarToRefill].fuel} liters`);
                carsArray[indexOfCarToRefill].fuel = 75;
            } else {
                console.log(`${carName} refueled with ${fuelToAdd} liters`);
                carsArray[indexOfCarToRefill].fuel += fuelToAdd;
            }



        } else if (command.includes('Revert')) {
            let [carName, kmsToRevert] = command.replace('Revert : ', '').split(' : ');
            kmsToRevert = Number(kmsToRevert);

            let carToRevert = carsArray.find(item => item.brand === carName);
            let indexOfCarToRevert = carsArray.indexOf(carToRevert);

            carsArray[indexOfCarToRevert].mileage -= kmsToRevert;
            if (carsArray[indexOfCarToRevert].mileage < 10000) {
                carsArray[indexOfCarToRevert].mileage = 10000;
            } else {
                console.log(`${carName} mileage decreased by ${kmsToRevert} kilometers`);
            }
        }
    }

    for (const car of carsArray) {
        console.log(`${car.brand} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`);
    }

} needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])