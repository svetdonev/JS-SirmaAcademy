function solve(figure, a, b){
    let result;

    if(figure == "square") {
        result = a * a;
    } else if(figure == "rectangle") {
        result = a * b;
    }

    console.log(result.toFixed(2));
}

solve("square", 5);
solve("rectangle", 10, 3.5);