function inventory(input) {

    let heroes = [];

    input.forEach(element => {

        let [heroName, level, items] = element.split(' / ');

        let obj = {
            heroName,
            level: Number(level),
            items
        }
        heroes.push(obj);

    });

    heroes.sort((a, b) => (a.level) - (b.level));

    heroes.forEach(element => {

        console.log(`Hero: ${element.heroName}\nlevel => ${element.level}\nitems => ${element.items}`);
    });

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)