// Here my age in numbers.
const myAge = 31;
// Here the value for early years of a dog.
let earlyYears = 2;
// Here the first two years of a dog’s life.
earlyYears = earlyYears*10.5;
// Here we have the later years of a dog´s life.
let laterYears = myAge - 2;
// Here dog´s years accounted for by my last years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
// Here the sum of early and later years give my age in dog years.
let myAgeInDogYears = earlyYears + laterYears;
// Here my name written in lower case.
let myName = 'Gabriele de Kássia Alves Pereira'.toLowerCase();
// Here print the outcome in a sentence.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

