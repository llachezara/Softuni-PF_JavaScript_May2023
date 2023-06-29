function townInfo(input) {
    let result = [];

    for (const row of input) {

        let [townName, latitude, longitude] = row.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let obj = {
            townName,
            latitude,
            longitude
        }

        result.push(obj);
    }

    result.forEach(element => {
        console.log(element);
    });

    let arr = [1, 4, 6, 8, 2, 3];
    console.log(result.join('\n'));
}
townInfo(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)