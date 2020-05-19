//a decorator is an function that you apply to something

function Logger(target: Function) {
    console.log('Logging...');
    console.log(target);
}

//a decorator factory

function Logger2(logString: string) {
    return function (target: Function) {
        console.log(logString);
        console.log(target);

    };
}

function WithTemplate(template: string, hookID: string){
    return function(constructor: any) {
        const hookEL = document.getElementById(hookID);
        const p = new constructor();
        if(hookEL){
            hookEL.innerHTML = template;
            hookEL.querySelector('h1')!.textContent = p.name;
        }
    }
}


@Logger //this wil be last 
@Logger2('Logging - Person') 
@WithTemplate('<h1>My Person Object</h1>', 'app') //this will be first 
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object... ');
    }
}

const pers = new Person();
console.log(pers);

