// const userName = "Max";

// let age = 30;
// age = 29;

// function add(a: number, b: number){

//     let result = a + b;
//     return result;

// }

// // console.log(result);

// if (age> 20){
//     let isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number = 5) => {
//   return a + b;
// };

// let text = add(5,6);
// let textnumber =text.toString();

// document.getElementById("click")!.innerHTML = textnumber;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// printOutput(add(4));

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

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

const copiedPerson = {...person};

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);

};

const addedNumbers = add(5,10,2,3.7);

console.log(addedNumbers);


// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobb1,hobb2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobb1, hobb2);

const {firstName: userName, age} = person;

console.log(userName, age);
