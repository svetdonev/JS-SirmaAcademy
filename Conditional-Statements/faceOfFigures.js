function solve(figure, a, b){
    let result;

    if(figure == "square") {
        result = a * a;
    } else if(figure == "rectangle") {
        result = a * b;
    } else if(figure == "triangle") {
        result = 0.5 * a * b;
    } else if(figure == "circle") {
        result = Math.PI * (a * a);
    }

    console.log(result.toFixed(2));
}

solve("square", 5);
solve("rectangle", 10, 3.5);
solve("triangle", 4.5, 20);
solve("circle", 10);