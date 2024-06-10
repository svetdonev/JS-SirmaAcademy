function solve(text) {
    let obj = JSON.parse(text);

    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

solve(
    '{"name": "Ivan", "age": 40, "town": "Sofia"}'
);