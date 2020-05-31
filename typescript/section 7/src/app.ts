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


class DataStorage<T extends string | number | boolean > {
    private data: T[] = [];



    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }

}

const textStorage = new DataStorage<string>();

textStorage.addItem('Dude');
textStorage.addItem('Marjanne');
textStorage.removeItem('Dude');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number | string>();

numberStorage.addItem(234);
numberStorage.addItem('vette shit ouwe');
console.log(numberStorage);

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'max'});
// objStorage.addItem({name: 'Manu'});
// //...
// objStorage.remoteItem({name: 'Manu'});
// console.log(objStorage.getItems());

//special types

interface CourseGoal {
    title: string;
    description: string;
    competeUntil: Date;
}

// function createCourseGoal(
//     title: string,
//      description: string,
//       date: Date
//       ): CourseGoal{
//     return {title: title, description: description, competeUntil: date};
// }

function createCourseGoal(
    title: string,
     description: string,
      date: Date
      ): CourseGoal{
     let CourseGoal: Partial< CourseGoal>
      = {};
     CourseGoal.title= title;
     CourseGoal.description = description;
     CourseGoal.competeUntil = date;
     return CourseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['max', 'Sports'];
// names.push('Manu');



















let count = 0;

function myFunction() {
    if (count === 0){
        count =1;
    }else if(count > 100){
        count =0;
    }
    else {
        count++;
        }
    console.log(count);
    document.getElementById("demo")!.innerHTML = count.toString(); 
}


