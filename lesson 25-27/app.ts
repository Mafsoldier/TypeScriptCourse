function add(n1: number, n2: number): number{
    return n1+ n2;
}

function printResult(num: Number): void{
    console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num:number )=> void){
    const result = n1 + n2;
    cb(result);

}

printResult(add(7,5));



let combineValues: (a: number, b: number)=> number;

combineValues = add;
// combineValues =6;
// combineValues = printResult;

console.log(combineValues(8,8));

addAndHandle(10,20, (result) => {
    console.log(result);
});

// let someValue: undefined; // will be undefined for ever. 
