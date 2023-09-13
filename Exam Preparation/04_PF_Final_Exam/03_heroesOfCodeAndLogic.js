function demo(arrayOfHeroesAndCommands) {
    let numberOfHeroes = arrayOfHeroesAndCommands.shift();
    let arrayWithHeroes = [];

    // class Hero {
    //     constructor(name, hitPoints, manaPoints) {
    //         this.name = name;
    //         this.hitPoints = Number(hitPoints);
    //         this.manaPoints = Number(manaPoints);
    //     }
    // }

    for (let index = 0; index < numberOfHeroes; index++) {
        let [heroName, hitPoints, manaPoints] = arrayOfHeroesAndCommands.shift().split(' ');

        let currHero = {
            name: heroName,
            hitPoints: Number(hitPoints),
            manaPoints: Number(manaPoints)
        }
        arrayWithHeroes.push(currHero);
    }

    for (const command of arrayOfHeroesAndCommands) {

        if (command === 'End') {
            break;
        }

        if (command.includes('CastSpell')) {

            let [heroName, manaPointsNeeded, spellName] = command.replace('CastSpell - ', '').split(' - ');
            manaPointsNeeded = Number(manaPointsNeeded);
            let heroToCastSpell = arrayWithHeroes.find(el => el.name === heroName);


            if (heroToCastSpell.manaPoints >= manaPointsNeeded) {
                heroToCastSpell.manaPoints -= manaPointsNeeded;

                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroToCastSpell.manaPoints} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }

        } else if (command.includes('TakeDamage')) {

            let [heroName, damage, attacker] = command.replace('TakeDamage - ', '').split(' - ');
            damage = Number(damage);
            let heroToTakeDamage = arrayWithHeroes.find(el => el.name === heroName);
            let indexOfHeroToTakeDamage = arrayWithHeroes.indexOf(heroToTakeDamage);

            heroToTakeDamage.hitPoints -= damage;

            if (heroToTakeDamage.hitPoints > 0) {

                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroToTakeDamage.hitPoints} HP left!`);

            } else {

                arrayWithHeroes.splice(indexOfHeroToTakeDamage, 1);

                console.log(`${heroName} has been killed by ${attacker}!`);
            }

        } else if (command.includes('Recharge')) {

            let [heroName, amountOfManaPoints] = command.replace('Recharge - ', '').split(' - ');
            amountOfManaPoints = Number(amountOfManaPoints);
            let heroToRecharge = arrayWithHeroes.find(el => el.name === heroName);



            if (heroToRecharge.manaPoints + amountOfManaPoints > 200) {
                let initialPoints = heroToRecharge.manaPoints;
                console.log(`${heroName} recharged for ${200-initialPoints} MP!`);
                heroToRecharge.manaPoints = 200;

            } else {
                heroToRecharge.manaPoints += amountOfManaPoints;
                console.log(`${heroName} recharged for ${amountOfManaPoints} MP!`);
            }

        } else if (command.includes('Heal')) {

            let [heroName, amountOfHitPoints] = command.replace('Heal - ', '').split(' - ');;
            amountOfHitPoints = Number(amountOfHitPoints);

            let heroToHeal = arrayWithHeroes.find(el => el.name === heroName);


            if (heroToHeal.hitPoints + amountOfHitPoints > 100) {
                let initialPoints = heroToHeal.hitPoints;
                console.log(`${heroName} healed for ${100-initialPoints} HP!`);
                heroToHeal.hitPoints = 100;
            } else {
                heroToHeal.hitPoints += amountOfHitPoints;
                console.log(`${heroName} healed for ${amountOfHitPoints} HP!`);
            }
        }
    }
    for (const hero of arrayWithHeroes) {
        console.log(`${hero.name}\n  HP: ${hero.hitPoints}\n  MP: ${hero.manaPoints}`);
    }
}
demo([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);