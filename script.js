//TODO Module 3 - Lesson 01.02: Arrays and Objects Intro - Challenges

//TODO 🧩 Step 4: Mini-Challenge – Arrays + Objects Combined

//* 🎯 Challenge 1:
//  Create a list of 3 daily routines, where each routine is an object with:
//  - A task (string)
//  - A time (string or number)
//  - A completed (boolean)

//  Then:
//  1. Print the second task’s name
//  2. Update the third task’s completed to true
//  3. Log all tasks as readable sentences, like:
//      - ✅ Wake up at 7AM
//      - ❌ Read book at 9PM

//! Solution:

const routines = [
    { task: 'Morning study', time: '9 A.M.', completed: true },
    { task: 'Lunch', time: '12 P.M.', completed: true },
    { task: 'Afternoon study', time: '2 P.M.', completed: false },
];

// 1. Print the second task
console.log(routines[1].task);

// 2. Mark the last task as completed
routines[2].completed = true;

// 3. Loop and log readable status
routines.forEach(routine => {
    const status = routine.completed ? '✅' : '❌';
    console.log(`${status} ${routine.task} at ${routine.time} .`);
});


//TODO 🧩 Challenge 2: Object Inventory Tracker

//* 🎯 Create an object called backpack with:
//  - items → an array of 3 item names
//  - color → string
//  - isOpen → boolean

//* Then:
//  - Log the second item in the backpack
//  - Add a new item to the items array
//  - Print:
//      - 🎒 Backpack has 4 items. It is currently closed.

//! Solution:

const backpack = {
    items: [ 'flashlight', 'paper map', 'tent' ],
    color: 'green',
    isOpen: false,
};

// 1. Log

console.log(backpack.items[1]);

// 2. New item

backpack.items.push('shoe');
console.log(backpack.items);

// 3. Print
const status = backpack.isOpen ? 'open' : 'closed';
console.log(`🎒 Backpack has ${backpack.items.length} items. It is currently ${status}.`);


//TODO 🧩 Challenge 3: Students + Grades Array

//* 🎯 Create an array called classroom of 3 students.
//  Each student is an object with:
//  - name → string
//  - grade → number
//  - passed → boolean

//* Then:
//  - Update a grade.
//  - Set passed to true if grade ≥ 70.
//  - Log each student like:
//      - ✅ Maria (85) passed.
//      - ❌ Jake (62) failed.

//! Solution:

// 1. Create array
const classroom = [
    { name: 'Jake', grade: 62, passed: false },
    { name: 'Maria', grade: 85, passed: true },
    { name: 'Sam', grade: 90, passed: true },
];

// 2. Update a grade

classroom[2].grade = 95;
console.log(classroom[2].grade);

// 3. Log each student

classroom.forEach(student => {
    const status = student.grade >= 70 ? '✅' : '❌';
    const passFail = student.grade >= 70 ? 'passed' : 'failed';
    console.log(`${status} ${student.name} (${student.grade}) ${passFail}.`);
});


//TODO ✅ Arrays & Objects Review Quiz

//* 🧠 Question 1:
// What does this return?

['a', 'b', 'c'][1]

//? Answer: b - because 1 contains the indexed numerical number. Arrays in JavaScript are zero-indexed.

//* 🧠 Question 2:
// Which statement correctly adds a property to this object?

const book = { title: '1984', author: 'Orwell' };

//  a) book['pages'] = 300;
//  b) book.pages = 300;
//  c) Both
//  d) Neither

//? Answer: c - because in JavaScript, dot notation and bracket notation both work when adding or updating properties.

//* 🧠 Question 3:
//  What is the result of this?

const colors = ['red', 'green'];
colors.push('blue');
console.log(colors.length);

//? Answer: 3 - because '.push' will add a new value to our object and '.length' will count the entire object.

//* 🧠 Question 4:
//  How do you update the name property in this object?

const user = { name: 'Alice', age: 25 };

user.name = 'Alex';
console.log(user);
user['name'] = 'Alex';
console.log(user);

//? Answer: user.name = 'Alex'; - because we are adding the property 'Alex' and giving the value directly, or we can use bracket too, user['name'] = 'Alex';  while assigning the value.

//* 🧠 Question 5:
//  What will this log?

const tools = ['wrench', 'screwdriver'];
tools[1] = 'hammer';
console.log(tools);

//? Answer: Array [ "wrench", "hammer" ] is an array of tools because 'screwdriver' will be replace with 'hammer' at index 1.

//* 🧠 Question 6:
//  How do you check if the object has a key called 'email'?

const profile = { username: 'joe' };
console.log(profile.hasOwnProperty('username'));

console.log('username' in profile);

console.log(profile.username !== undefined);

//? Answer:
//  1. object.hasOwnProperty('username') - because the hasOwnProperty() method will check if an object contains a direct property and will return true or false if it exists or not.
//  2. 'username' in profile - unlike the hasOwnProperty() method, the in operator will return true for both direct and inherited properties that exist in the object.
//  3. profile.username !== undefined - we can check if a property exists in the object by checking if property !== undefined. It would return true because the name property does exist in the 'profile' object.

//* 🧠 Question 7:
//  What is the difference between .push() and .unshift()?

//? Answer:
//  1. .push() - method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
//  2. .unshift() - method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
// Both methods will add an element to an array. Method .push() will add a new element to the end of an array and method .unshift() a new element at the  beginning of an array.

//* 🧠 Question 8:
//  Which is not valid array syntax?

//  a) const a = [];                            // ✔️ Valid array literal. Creates an empty array.
//  b) const a = ['x', 'y'];                    // ✔️ Valid array with two elements. Standard literal format.
//  c) const a = { 0: 'x', 1: 'y' };            // 🛑 This is not an array — it is an object that mimics array-like structure but lacks array methods like .push() or .length behavior.
//  d) const a = new Array();                   // ✔️ Valid array constructor. Although less commonly used, it’s totally valid.

//? Answer: c - is not valid array syntax — it's an object that resembles an array but lacks array behaviors.

//* 🧠 Question 9:
//  What does this print?

const animals = [{ type: 'cat' }, { type: 'dog' }];
console.log(animals[0].type);

//? Answer: cat - because will log the type of animals array at index 0.

//* 🧠 Question 10:
//  How many items are in this array?

const stuff = ['pen', 'book', 'lamp', 'cup'];
console.log(stuff.length);

//? Answer: 4 - because represents the number of elements in that array that is counted with .length help.
