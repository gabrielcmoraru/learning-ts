// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];  // TUPLE type
// } = {
//     name: 'Bobs',
//     age: 33,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'],
// };

enum Role {
    ADMIN = 5,
    READN_ONLY = 'ANY TEXT',
    AUTHOR = 'ANY Value 100%',
} // ENUM type

const person = {
    name: 'Bobs',
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivites: string[];
// let favoriteActivites: any[];
favoriteActivites = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}
