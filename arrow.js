// normal function declaration
function add (a,b){
    sum = a+b;
    return sum;
}
const result = add (2,3);
console.log(result);


// another way to declare a function
const add2 = function (a){
    const mul = a*3;
    return mul;
}
const result2 = add2 (3);
console.log(result2);

// arrow funcion single line

const add3 = a => a*2;
const result3 = add3(2);
console.log(result3);

// arrow funcion multiple line

const radius = r => {
    const r_value = r*r;
    const circle = 3.1416*r_value;
    return circle;
}
const result4 = radius(5);
console.log(result4);

