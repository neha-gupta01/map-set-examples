//map
const person = new Map();
person.set('name', 'john');
person.set('age', 30);
person.set('gender','male');
person.set('country', 'USA');

console.log(person.get('name'));
console.log(person.get('gender'));
console.log(person.get('age'));
console.log(person.has('city'));

person.forEach((value,key) => {
    console.log(key,value);
})


const colors = new Map();
colors.set('red', '#FF0000');
colors.set('green', '#00FF00');
colors.set('blue', '#0000FF');
colors.delete('green');
console.log(colors.size);
console.log(colors.has('blue'));

//set
const fruits = new Set(['apple', 'banana', 'cherry']);
console.log(fruits.has('grape'));
console.log(fruits.has('apple'));


const numbers = new Set();
numbers.add('hello');
numbers.add('hello');
numbers.add(155);
numbers.add('neha');
numbers.add('gupta');
numbers.add(155);
console.log(numbers);
console.log(numbers.has(20));
numbers.delete('gupta');
console.log(numbers);
numbers.forEach(value => {
    console.log(value);
  });
