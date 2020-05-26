//a decorator is an function that you apply to something

// function Logger(target: Function) {
//     console.log('Logging...');
//     console.log(target);
// }

// //a decorator factory

// function Logger2(logString: string) {
//     return function (target: Function) {
//         console.log(logString);
//         console.log(target);

//     };
// }

// function WithTemplate(template: string, hookID: string) {
//     console.log('TEMPLATE FACTORY');
//     return function <T extends {new(...args: any[]): {name:string}}> (originalConstructor: T) {
//         return class extends originalConstructor {
//             constructor(..._args: any[]) {
//                 super();
//                 const hookEL = document.getElementById(hookID);
//                 if (hookEL) {
//                     hookEL.innerHTML = template;
//                     hookEL.querySelector('h1')!.textContent = this.name;
//                 }
//             }
//         }
//     };
// }


// @Logger //this wil be last 
// @Logger2('Logging - Person')
// @WithTemplate('<h1>My Person Object</h1>', 'app') //this will be first 
// class Person {
//     name = 'Marcs';

//     constructor() {
//         console.log('Creating person object... ');
//     }
// }

// // const pers = new Person();
// // console.log(pers);

// //---

// function Log(target: any, propertyName: string | symbol) {
//     console.log('property decorator');
//     console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//     console.log('accesor decorator');
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);


// }

// function Log3(target: any, name: string | symbol, descriptor: PropertyDescriptor) {
//     console.log('Method decorator');
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);


// }

// function Log4(target: any, name: string | symbol, position: number) {
//     console.log('Parameter decorator');
//     console.log(target);
//     console.log(name);
//     console.log(position);
// }


// class Product {
//     @Log
//     title: string;
//     private _price: number;

//     @Log2
//     set price(val: number) {
//         if (val > 0) {
//             this._price = val;
//         } else {
//             throw new Error('Invalid price');
//         }
//     }

//     constructor(t: string, p: number) {
//         this.title = t;
//         this._price = p;
//     }
//     @Log3
//     getPriceWithTax(@Log4 tax: number) {
//         return this._price * (1 + tax);

//     }
// }

// const p1 = new Product('Book', 19);
// const p2 = new Product('Book', 29);


// function AutoBind(_target: any,_methodName: string | symbol, descriptor: PropertyDescriptor) {
//     const originalMethod =descriptor.value;
//     const adjDescriptor: PropertyDescriptor = {
//         configurable: true,
//         enumerable: false,
//         get(){
//             const boundFn = originalMethod.bind(this);
//             return boundFn;
//         }
//     };
//     return adjDescriptor;
// }

// class Printer {
//     message = 'This works';

//     @AutoBind
//     showMessage (){
//         console.log(this.message);
//     }
// }

// const p = new Printer();

// const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage);


//--

// interface ValidatorConfig {
//     [property: string]: {
//         [ValidatableProp: string]: string[] // ['required, 'positive]
//     }
// }

// const registeredValidators: ValidatorConfig = {};

// function Required(target: any, propName: string) {
//     registeredValidators[target.constructor.name] = {
//         [propName]: ['required']
//     };
// }

// function PositiveNumer() {


// }

// function Validate(obj: object) {

// }

// class Course {
//     @Required
//     title: String;
//     @PositiveNumer
//     price: Number;

//     constructor(t: string, p:number) {
//         this.title = t;
//         this.price = p;

//     }
// }

// const courseForm = document.querySelector('form')!;
// courseForm.addEventListener('submit', event => {
//     event.preventDefault();
//     const titleEl = document.getElementById('title') as HTMLInputElement;
//     const priceEl = document.getElementById('price') as HTMLInputElement;

//     const title = titleEl.value;
//     const price = +priceEl.value;

//     const createdCourse = new Course(title, price);

//     if(!Validate(createdCourse)) {
//         alert('Invalid input, please try again');
//         return;
//     }
//     console.log(createdCourse);

// });



