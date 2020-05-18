// Buildin generics:

// const names: Array<string> = [];

// // names[0].split(' ');

// const promise = new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     } , 2000);
// });

// promise.then(data => {
//     data.split(' ');
// })

// Our own generic builds:

// function merge(objA: object, objB:object) {
//     return Object.assign(objA, objB);
// }
function merge<T extends object, U extends object>(objA: T, objB:U) {
    return Object.assign(objA, objB);
}

console.log(merge({name:'Max'}, {age:30}));

const mergedObj = merge({name: 'max', hobbies:['Sports']}, {age: 30});
console.log(mergedObj);
mergedObj.age;

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T ): [T, string]{
    let descriptionText = 'Got no value.';
    if(element.length === 1){
        descriptionText = 'Got 1 element.';

    }else if (element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];

}

console.log(countAndDescribe('Hi there'));
console.log(countAndDescribe(['Cooks', 'Sporting']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return 'Value: ' +  obj[key];

}

extractAndConvert({name: 'Max'}, 'name');
console.log(extractAndConvert({name: 'Max'}, 'name'));







