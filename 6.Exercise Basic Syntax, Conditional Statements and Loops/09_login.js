function login(input) {
    let username = input[0];

    function reverseString(string) {
        let newString = '';
        for (let index = string.length - 1; index >= 0; index--) {
            newString += string[index];
        }
        return newString;
    }
    let password = reverseString(username);

    let attempts = 0;
    let loggedIn = false;
    let i = 1;
    while (i < input.length) {
        let combination = input[i];
        attempts++;

        if (combination === password) {
            loggedIn = true;
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