function inventory(input) {
    let journal = input.shift().split(', ');

    for (let i = 0; i < input.length; i++) {

        let commands = input[i].split(' - ');

        if (commands.includes('Craft!')) {
            break;
        }

        let command = commands[0];
        let item = commands[1];

        switch (command) {
            case 'Collect':

                if (!journal.includes(item)) {
                    journal.push(item);
                }
                break;

            case 'Drop':

                if (journal.includes(item)) {

                    let indexOfItem = journal.indexOf(item);
                    journal.splice(indexOfItem, 1);
                }

                break;

            case 'Combine Items':

                let items = item.split(':');
                let oldItem = items[0];

                if (journal.includes(oldItem)) {

                    let newItem = items[1];

                    let indexOfOldItem = journal.indexOf(oldItem);
                    journal.splice(indexOfOldItem + 1, 0, newItem);
                }

                break;

            case 'Renew':

                if (journal.includes(item)) {

                    let indexOfItem = journal.indexOf(item);
                    journal.splice(indexOfItem, 1);
                    journal.push(item);
                }
                break;
        }
    }

    console.log(journal.join(', '));
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
);