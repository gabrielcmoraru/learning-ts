// Idea behind generics
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Bobs' }, { age: 30 });

console.log(mergedObj.name);

// Constraints to a generic type
function merge2<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj2 = merge2({ name: 'Bobs', hobbies: 'sleep' }, { age: 30 });

console.log(mergedObj2);

interface Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndPrint('Hi there!'));

// The "keyof" generic constraint
function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Bob' }, 'name');

// Generic classes
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('a');
textStorage.addItem('b');
textStorage.addItem('c');
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Bob' });
// objStorage.addItem({ name: 'Adri' });
// //...
// objStorage.removeItem({ name: 'Bob' });
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

// Utility types
// --------------
// Partial type
function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    // return {title: title, description: description, completeUntil: date}
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['bob', 'adri'];
// names.push('bibi');
