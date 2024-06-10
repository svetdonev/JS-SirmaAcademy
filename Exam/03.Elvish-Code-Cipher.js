function solve(encryptedMessage, shift) {
    let decryptedMessage = '';

    for(let i = 0; i < encryptedMessage.length; i++) {
        let currentChar = encryptedMessage[i];
        let newChar = currentChar.charCodeAt() - shift;
        decryptedMessage += String.fromCharCode(newChar);
    }

    if(decryptedMessage == '') {
        console.log('Empty string');
    } else {
        console.log(decryptedMessage);
    }
}

solve('Uifsf!jt!b!tfdsfu"', 1);
solve('Wkurz#lw#lq#wkh#iluh$', 3);
solve('Fwfltws', 5);
solve('', 4);