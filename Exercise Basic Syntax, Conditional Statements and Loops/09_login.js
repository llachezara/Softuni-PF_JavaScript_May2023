function login(input) {
    const username = input[0];

    function reverseString(string) {
        let newString = '';
        for (let index = string.length - 1; index >= 0; index--) {
            newString += string[index];
        }
        return newString;
    }

    const password = reverseString(username);

    let attempts = 0;
    let i = 1;
    while (i < input.length) {
        let combination = input[i];
        attempts++;

        if (combination === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (attempts == 4) {
                console.log(`User ${username} blocked!`)
            } else {
                console.log(`Incorrect password. Try again.`);
            }
        }

        i++;
    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);