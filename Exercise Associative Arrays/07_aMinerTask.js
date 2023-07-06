function demo(input) {

    let allResources = {};

    for (let i = 0; i < input.length; i += 2) {

        let resource = input[i];
        let quantity = Number(input[i+1]);

        if (!allResources.hasOwnProperty(resource)) {
            allResources[resource] = 0;
        }
        allResources[resource] += quantity;
    }

    for (const resource of Object.keys(allResources)) {
        console.log(`${resource} -> ${allResources[resource]}`);
    }
}
demo([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])