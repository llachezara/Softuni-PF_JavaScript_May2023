function arrayModifier(input) {
    let arrayOfIntegers = input.shift().split(' ').map(Number);

    let commands = input.shift().split(' ');
    while (!commands.includes('end')) {

        let command = commands[0];
        let index1 = Number(commands[1]);
        let index2 = Number(commands[2]);

        switch (command) {

            case 'swap':

                let temp = arrayOfIntegers[index1];
                arrayOfIntegers[index1] = arrayOfIntegers[index2];
                arrayOfIntegers[index2] = temp;

                break;

            case 'multiply':

                let result = arrayOfIntegers[index1] * arrayOfIntegers[index2];
                arrayOfIntegers[index1] = result;

                break;

            case 'decrease':

                arrayOfIntegers = arrayOfIntegers.map(el => el -= 1);
                break;
        }

        commands = input.shift().split(' ');
    }

    console.log(arrayOfIntegers.join(", "));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);