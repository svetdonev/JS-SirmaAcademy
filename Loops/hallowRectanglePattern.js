function solve(n, m) {
    let result = '';

    for(let row = 1; row <= n; row++) {
        for(let col = 1; col <= m; col++) {
            if(row == 1 || col == 1 || row == n || col == m){
                result += '*';
            } else {
                result += ' ';
            }
        }

        result += '\n';
    }

    console.log(result);
}

solve(4, 6);
//solve(2, 2);
//solve(3, 4);