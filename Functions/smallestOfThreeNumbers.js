function findSmallest(a, b, c) {
    let smallest = a;

    if (smallest > b) {
        smallest = b;
    }

    if (smallest > c) {
        smallest = c;
    }

    console.log(smallest);
}

findSmallest(1,3,5);
findSmallest(10,5,30);
findSmallest(-10,5,33);