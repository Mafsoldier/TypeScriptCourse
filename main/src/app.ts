class Department {
  // private id: string;
  // public name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id= id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}):  ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "d2";
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department{
   admins: string[];
    constructor(id: string, admins: string[]){
        super(id, 'Accounting');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]){
        super(id, 'IT');
        
    }
    addEmployee(name:string){
        if(name=== "Max") {
            console.log("You cant use the name max! ");
            return ;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text);
    }
    printReports(){
        console.log(this.reports);
    }
}


const itDepartment = new ITDepartment("d2", ["max"]);
// const accounting = new Department("d1", "Accounting");

// accounting.addEmployee("max");
// accounting.addEmployee("Manu");
// accounting.addEmployee("anna");

itDepartment.addEmployee("max");
itDepartment.addEmployee("Manu");
itDepartment.addEmployee("anna");

// accounting.employees[2] = "anna";

// accounting.describe();
// accounting.printEmployeeInformation();

itDepartment.describe();
itDepartment.printEmployeeInformation();

console.log(itDepartment);

const accounting = new AccountingDepartment("a1",[]);
accounting.printReports();
accounting.addReport("somehting went wrong...");
accounting.printReports();
accounting.addEmployee("Max");
accounting.addEmployee("Marc");
accounting.printEmployeeInformation();