function isPasswordValid(password) {

    function isDigit(char) {
        let code = char.charCodeAt(0);
        return code >= 48 && code <= 57;
    }
    
    function isLetter(char) {
        let code = char.charCodeAt(0);
        return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    }

    let isValid = true;
    let digitCounter = 0;

    if(password.length < 6 || password.length > 10) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    }

    for(let i = 0; i < password.length; i++) {
        let currentChar = password[i];

        if(!(isDigit(currentChar) || isLetter(currentChar))) {
            isValid = false;
            console.log('Password must consist only of letters or digits');
            break;
        }

        if(isDigit(currentChar)) {
            digitCounter++;
        }
    }

    if(digitCounter < 2) {
        isValid = false;
        console.log('Password must have at least 2 digits');
    }

    if(isValid){
        console.log('Password is valid');
    }

    
}

isPasswordValid('pass');
isPasswordValid('APass123');
isPasswordValid('Pa$s$s');
isPasswordValid('#$$%');