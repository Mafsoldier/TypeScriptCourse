class Department {
    name: string;

    constructor(n:string){
        this.name = n;
    }
    
    describe(){
        console.log('Department: ' +this.name)
    }

}

const accounting = new Department('Accounting');
const sales = new Department('Sales');

// console.log(accounting);

accounting.describe();
sales.describe();