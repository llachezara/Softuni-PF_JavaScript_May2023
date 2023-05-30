function demo(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBrokenCounter = 0;

    for (let lostFightsCounter = 1; lostFightsCounter <= lostFights; lostFightsCounter++) {
        if (lostFightsCounter % 2 === 0) {
            expenses += helmetPrice;
        }
        if (lostFightsCounter % 3 === 0) {
            expenses += swordPrice;
        }
        if (lostFightsCounter % 2 === 0 & lostFightsCounter % 3 === 0) {
            shieldBrokenCounter++;
            expenses += shieldPrice;

            if (shieldBrokenCounter === 2) {
                expenses += armorPrice;
                shieldBrokenCounter = 0;
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
demo(23, 12.50, 21.50, 40, 200);