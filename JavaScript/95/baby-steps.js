let numbers = process.argv.slice(2,process.argv.length);
let sum = 0;
numbers.forEach(element => {
    sum += +element;
});
console.log(sum);