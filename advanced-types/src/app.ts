type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // INTERSECTION types

const e1: ElevatedEmployee = {
    name: 'Bob',
    privileges: ['create-server'],
    startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    // TYPE GUARD using typeof
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnkownEployee = Employee | Admin;

function printEmployeeInformation(emp: UnkownEployee) {
    console.log('Name: ' + emp.name);
    // TYPE GUARD using property exists in object
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);

class Car {
    drive() {
        console.log('Driving....');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck ...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ..' + amount);
    }
}

type Vehicle = Car | Truck; // UNION type

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    // TYPE GUARD using INSTANCEOF

    // if ('loadCargo' in vehicle) {
    //     vehicle.loadCargo(1000);
    // }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// DISCRIMINATED UNIONS
// works for both: types and interfaces
interface Bird {
    type: 'bird'; // assign a literal type so we can differentiate in union types
    flyingSpeed: number;
}

interface Horse {
    type: 'horse'; // assign a literal type so we can differentiate in union types
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

// TYPE CASTING

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // VERSION 1
const userInputElement = document.getElementById(
    'user-input'
)! as HTMLInputElement; // This would be mostly used in react
userInputElement.value = 'Hi there!';

// If we are not absolutely sure that the html element exists we remove the '!' and change the verification as below
const userInputElement2 = document.getElementById('user-input');
if (userInputElement2) {
    (userInputElement2 as HTMLInputElement).value = 'Hi there from 2!';
}

// INDEX TYPES
interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!',
};

// Function overloads
type Combinable2 = string | number;

function add2(a: number, b: number): number; // Overload
function add2(a: string, b: string): string; // Overload
function add2(a: Combinable2, b: Combinable2) {
    // TYPE GUARD using typeof
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result2 = add2('Adri', ' Bob');
result2.split(' ');

// OPTIONAL CHAINING
const fetchedUserData = {
    id: 'u1',
    name: 'Bobs',
    job: { title: 'Mr', description: 'Works from home' },
};

console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job?.title);

// Nullish coalescing
const userInput = null;
const storedData = userInput ?? 'DEFAULT'; // userInput is null or undefined than use default
console.log(storedData);
