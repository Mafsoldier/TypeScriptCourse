abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // public name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id= id;
    // this.name = n;
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;



  addEmployee(employee: string) {
    // this.id = "d2";
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'Accounting');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id)
  }

}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("No value added..")
    }
    this.addReport(value);

  }

 private constructor(id: string, private reports: string[]) {
    super(id, 'IT');
    this.lastReport = reports[0];
  }

  static getInstance(){
    if(AccountingDepartment.instance){
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;

  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id)
  }

  addEmployee(name: string) {
    if (name === "Max") {
      console.log("You cant use the name max! ");
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Marjanne");
console.log(employee1, Department.fiscalYear);


const it = new ITDepartment("d2", ["max"]);
// const accounting = new Department("d1", "Accounting");

// accounting.addEmployee("max");
// accounting.addEmployee("Manu");
// accounting.addEmployee("anna");

// Math.pow()

it.addEmployee("max");
it.addEmployee("Manu");
it.addEmployee("anna");

// accounting.employees[2] = "anna";

// accounting.describe();
// accounting.printEmployeeInformation();

// it.describe();
// it.printEmployeeInformation();

// console.log(it);

// const accounting = new AccountingDepartment("a1", []);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting);
console.log(accounting2);

accounting2.addEmployee("erwin");
console.log(accounting);
console.log(accounting2);

// console.log(accounting.mostRecentReport);


// accounting.mostRecentReport = "A new rapport";
// accounting.addReport("somehting went wrong...");
// accounting.addReport("nice report");
// console.log(accounting.mostRecentReport);

// accounting.printReports();
// accounting.addEmployee("Max");
// accounting.addEmployee("Marc");
// accounting.printEmployeeInformation();

accounting.describe();