function makeDictionary(input) {

    let dictionary = {};
    let dictionaryArray = [];
    for (let data of input) {
        data = JSON.parse(data);

        let word = Object.keys(data)[0];
        let definition = data[word];

        dictionary[word] = definition;
    }

    for (const word in dictionary) {
        dictionaryArray.push(word);
    }

    dictionaryArray.sort((a,b) => a.localeCompare(b));
    
    dictionaryArray.forEach(word => {
        let definition = dictionary[word];
        console.log(`Term: ${word} => Definition: ${definition}`);
    });
}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed rout and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)