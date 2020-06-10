abstract class Department {
    static fiscalYear = 2020;
    // public name: string; // public only exists in Typescript only new JS version may support that
    // private readonly id: string; // readonly doesn't allow changing once is set
    protected employees: string[] = []; // private only exists in Typescript only new JS version may support that

    constructor(protected readonly id: string, public name: string) {
        // this.name = n;
        // console.log(Department.fiscalYear);
    }

    static createEmployeee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }

    describe() {
        console.log('IT department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }

        throw new Error('No report found');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }

        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if (name === 'Bob') {
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

const employee1 = Department.createEmployeee('BIBI');
console.log(employee1, Department.fiscalYear);

// const accounting = new Department('D1', 'Accounting');
const it = new ITDepartment('D1', ['bob']);

it.addEmployee('bob');
it.addEmployee('adri');

console.log(it);
it.describe();
it.printEmployeeInformation();

// const accounting = new AccountingDepartment('d2', []); // not Available in a class with private constructor
const accounting = AccountingDepartment.getInstance(); // use a static method to create a instance of a class | SINGLETON PATTERN

accounting.mostRecentReport = 'testing testing';
accounting.addReport('something is not right today');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Bob');
accounting.addEmployee('boby');
// accounting.printReports();
// accounting.printEmployeeInformation();

accounting.describe();
