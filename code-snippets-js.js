Task-1
let height = Number(prompt('enter height: '));
let weight = Number(prompt('enter weight: '));
const BMI = (height/(weight**2))*703;
console.log(BMI);

Task-2
let name = prompt('enter your name: ', 'user');
let age = prompt('enter your age: ', "18");
console.log(`hello ${name}, you are ${age} years old`);

Task-3
let str = prompt('enter a sentence: ');//sentence as input

console.log(str.split(" ").length);

Task-4
let s = "HELLO";
let x = s.split("").reverse().join("");
console.log(x);

Task-5
let mark = prompt('enter your marks: ');
if(mark<0 || mark>100){
    console.log('enter within given range: 1 - 100');
}
else if(mark>=90){
    console.log('Excellent');
}
else if(mark>=80 && mark<90){
    console.log('Good');
}
else if (mark>=70 && mark<=79){
    console.log('Satisfactory');
}
else if (mark<70){
    console.log("Needs Improvement");
}




Task-6
let x = 10,y = 20, z = 3;
 const smallest = x < y ? (x < z ? x : z) : (y < z ? y : z);
 console.log(smallest);
Task-7
let year = Number(prompt('enter a year: '));
if(year%4 == 0){
    console.log("leap year");
}
else{
 
    console.log("Not a leap year");
}

Task-8
let amount = Number(prompt('enter amount: '));
let discount = Number(prompt('enter discount: '));
let discountedAmount = function(amount,discount){
    let d = discount/100;
    let m = amount*d;
    return m;
}

// console.log(discountedAmount(amount,discount));
console.log(`the discounted amount is ${discountedAmount(amount,discount)}`)

Task-9
for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += i;
    }
    console.log(pattern);
  }

Task-10
let num = Number(prompt('enter a number: '));
//5
let fact=1;
for(let i = 1;i<=num;i++){
        fact*=i
}
console.log(fact)

