function solve(input) {
    let phoneBook = {};

    for (const record of input) {
        let recordArr = record.split(' '); 
        let name = recordArr.shift();
        let phone = recordArr.join(' ');

        phoneBook[name] = phone;
    }

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

solve([
    'Peter 0888 657 212',
    'Bob 0877 123 456',
    'Peter 123123'
]);