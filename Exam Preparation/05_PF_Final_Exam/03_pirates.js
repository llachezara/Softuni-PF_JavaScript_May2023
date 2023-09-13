function demo(input) {
    let cities = {};
    for (let line of input) {

        if (line === 'Sail') {
            continue;
        } else if (line === 'End') {

            break;

        } else if (line.includes('Plunder')) {

            line = line.replace('Plunder=>', '');
            let [city, people, gold] = line.split('=>');
            people = Number(people);
            gold = Number(gold);

            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            cities[city][0] -= people;
            cities[city][1] -= gold;
            if (cities[city][0] === 0 || cities[city][1] === 0) {
                delete cities[city];
                console.log(`${city} has been wiped off the map!`);
            }

        } else if (line.includes('Prosper')) {

            line = line.replace('Prosper=>', '');
            let [city, gold] = line.split('=>')
            gold = Number(gold);

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {

                cities[city][1] += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city][1]} gold.`);
            }

        } else {
            let [city, population, gold] = line.split('||');
            population = Number(population);
            gold = Number(gold);

            if (!cities.hasOwnProperty(city)) {
                cities[city] = [population, gold];
            } else {
                cities[city][0] += population;
                cities[city][1] += gold;
            }
        }
    }
    let keys = Object.keys(cities);
    let citiesCount = keys.length;
    if (citiesCount > 0) {

        console.log(`Ahoy, Captain! There are ${citiesCount} wealthy settlements to go to:`);
        keys.forEach(key => {
            let city = key;
            let people = cities[city][0];
            let gold = cities[city][1];
            console.log(`${city} -> Population: ${people} citizens, Gold: ${gold} kg`);
        });

    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }

}
demo(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])