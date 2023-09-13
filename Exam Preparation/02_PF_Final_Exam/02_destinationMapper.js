function destinationMapper(stringWithPlaces) {
    let regEx = /([=\/])[A-Z]{1}[a-zA-Z]{2,}\1/g;
    let matches = stringWithPlaces.match(regEx);

    let result = '';
    let destinationArray = [];
    let totalTravelPoints = 0;
    if (matches !== null) {

        for (const element of matches) {
            let destination = element.substring(1, element.length - 1);
            destinationArray.push(destination);

            let pointsFromDestination = destination.length;
            totalTravelPoints += pointsFromDestination;
        }

    } else {
        totalTravelPoints = 0;
    }

    result = `Destinations: ${destinationArray.join(', ')}\nTravel Points: ${totalTravelPoints}`;
    console.log(result);
} destinationMapper(("ThisIs some InvalidInput"))