"use strict";
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
const a = activeHobbies.length;
for (let i = 0; i < a; i++) {
    console.log(activeHobbies[i]);
}
const person = {
    firstName: "Marc",
    age: 33
};
const copiedPerson = Object.assign({}, person);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
const [hobb1, hobb2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobb1, hobb2);
const { firstName: userName, age } = person;
console.log(userName, age);
//# sourceMappingURL=app.js.map