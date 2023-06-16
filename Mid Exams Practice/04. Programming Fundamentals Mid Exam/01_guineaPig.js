function guineaPig(input) {

    let totalFoodInGrams = Number(input[0]) * 1000;
    let totalHayInGrams = Number(input[1]) * 1000;
    let totalCoverInGrams = Number(input[2]) * 1000;
    let weightInGrams = Number(input[3]) * 1000;

    let needToGoShopping = false;
    for (let days = 1; days <= 30; days++) {

        totalFoodInGrams -= 300;

        if (days % 2 === 0) {
            totalHayInGrams -= 0.05 * totalFoodInGrams;
        }
        if (days %3 === 0) {
            totalCoverInGrams -= weightInGrams / 3;
        }

        if (totalFoodInGrams <= 0 || totalHayInGrams <= 0 || totalCoverInGrams <= 0) {
            needToGoShopping = true;
            break;
        }

    }

    if (needToGoShopping) {
        console.log("Merry must go to the pet store!");
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(totalFoodInGrams/1000).toFixed(2)}, Hay: ${(totalHayInGrams/1000).toFixed(2)}, Cover: ${(totalCoverInGrams/1000).toFixed(2)}.`)
    }

}
guineaPig([1, 1.5, 3, 1.5]);