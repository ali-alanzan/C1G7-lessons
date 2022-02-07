// Destructuring assignment

var name, age, country, info;

[name, age, country, ...info] = ['Ahmed', 22, 'NR', 'CS student', 'married'];

console.log(name, age, country);
console.log(info);