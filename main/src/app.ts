const userName = "edwin";

console.log(userName);

// to start watch mode use: tsc app.ts --watch
// for whole project: tsc --init
// there will be an tsconfig.json file 
// now you just can use tsc to compile all files, and also you can use tsc --watch

const button = document.querySelector('button')!;

button?.addEventListener('click', () => {
    console.log('Clicked!');
} );