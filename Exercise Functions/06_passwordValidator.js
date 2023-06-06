function passwordValidator(password) {
    let firstRequirement = isLongEnough(password);
    let secondRequirement = consistsOnlyOfLettersAndDigits(password);
    let thirdRequirement = hasAtLeast2Digits(password);

    if (firstRequirement !== true) {
        console.log('Password must be between 6 and 10 characters');
    } 
    if (secondRequirement !== true) {
        console.log('Password must consist only of letters and digits');
    } 
    if (thirdRequirement !== true) {
        console.log('Password must have at least 2 digits');
    }
    if (firstRequirement && secondRequirement && thirdRequirement) {
        console.log('Password is valid');
    }

    function isLongEnough(pass) {
        let metRequirements = false;
        let passLength = pass.length;

        if (passLength >= 6 && passLength <= 10) {
            metRequirements = true;
        } else {
            metRequirements = false;
        }

        return metRequirements;
    }

    function consistsOnlyOfLettersAndDigits(pass) {
        let metRequirements = false;
        let passLength = pass.length;

        for (let i = 0; i < passLength; i++) {
            let currentChar = pass[i];
            let currCharCode = currentChar.charCodeAt();

            if ((currCharCode >= 48 && currCharCode <= 57) || (currCharCode >= 65 && currCharCode <= 90) || (currCharCode >= 97 && currCharCode <= 122)) {
                metRequirements = true;
            } else {
                metRequirements = false;
                break;
            }

        }

        return metRequirements;
    }

    function hasAtLeast2Digits(pass) {
        let passLength = pass.length;
        let digitCounter = 0;
        let metRequirements = false;

        for (let i = 0; i < passLength; i++) {
            let currentChar = pass[i];
            let currCharCode = currentChar.charCodeAt();

            if (currCharCode >= 48 && currCharCode <= 57) {
                digitCounter++;
            }
        }

        if (digitCounter >= 2) {
            metRequirements = true;
        }

        return metRequirements;
    }
}
passwordValidator('Pa$s$s');