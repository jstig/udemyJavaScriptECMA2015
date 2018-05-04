////// Lecture 1: `let` and `const` \\\\\\

// ES5
/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);
*/

// ES6
/*
const name6 = 'Jane Smith';
let age6 = 23;
//name6 = 'Jane Miller';
//onsole.log(name6);
*/

//////  Block scope of let and const \\\\\\

//ES5
/*
function driversLicense5(passedTest) {
    if (passedTest) {
        console.log(firstName); //logs 'undefined'
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log('ES5: ' + 
        firstName +
            ', born in ' +
            yearOfBirth +
            ', is now officially allowed to drive a car.');
}

driversLicense5(true);
*/

//ES6
/*
function driversLicense6(passedTest) {
    //console.log(firstName); //will cause error
    let firstName;
    const yearOfBirth = 1990;
    if (passedTest) {
        firstName = 'John';
        //yearOfBirth = 1990;

        console.log('ES6: ' +
    firstName +
        ', born in ' +
        yearOfBirth +
        ', is now officially allowed to drive a car.'
);
    }
}

driversLicense6(true);
*/

////// Lecture 2: Block Scope and IIFE \\\\\\

//ES6: wrapping in {} makes a block and variables in the block cannot be accessed outside the block.
/*
{
    const a = 1;
    let b = 2;
    var e = 7;
}

//console.log(a + b); // 'Uncaught reference error: a is not defined' because it cannot be accessed outside of the block.

console.log(e); // available outside of the block because of the keyword `var`
*/

//ES5
/*
(function () {
    var c = 3;
    var d = 2;
})();
*/

//console.log(c + d); // 'Uncaught reference error: c is not defined' because it cannot be accessed outside of the block.

////// Lecture 3: Strings \\\\\\

/*
let firstName = 'Josh';
let lastName = 'Stigall';
const yearOfBirth = 1977;

function calcAge(year) {
    return 2018 - year;
};

//ES5

console.log('this is ' + firstName + ' ' + lastName + '. He is ' + calcAge(yearOfBirth) +  '.');

//ES6
console.log(`This is ${firstName} ${lastName}. He is ${calcAge(yearOfBirth)}.`);

//Other string methods
//startsWith(); endsWith(); includes()
const name = `${firstName} ${lastName}`;
console.log(name.startsWith('J')); //true
console.log(`This is a test to see if the first name, ${firstName} and the ${lastName}`.repeat(3));
*/

////// Lecture 4: Arrow Functions \\\\\\

/*
const years = [1990, 1965, 1977, 1985];
const thisYear = new Date().getFullYear;


//ES5
var ages5 = years.map(function(el) {
    return 2016 - el; //gets stored in ages5
});
//console.log(ages5);

//ES6
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

//More than one parameter requires ( ): (el, index) => ...
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
 console.log(ages6);

//Multiple lines of code requre { } and a return
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/

////// Lecture 5: Arrow Functions 2: `this` \\\\\\

//ES5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str =
                'This is box number ' +
                self.position +
                ' and it is ' +
                self.color;
            alert(str);
        });
    }
};
//box5.clickMe(); // Without the `self` variable returns undefined for the `this` because `this` points to the window object, not the function.

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = `ES66: This is box number ${this.position} and it is ${
                this.color
            }.`;
            alert(str);
        });
    }
};
//box6.clickMe();

//ES5
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        //return this.name + ' is friends with ' + el;
    }.bind(this)); //binds the function with `this` of the Person Object
    console.log(arr);
};

let friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

//ES6
// When this line is an arrow function this.name was undefined.
//Person.prototype.myFriends6 = (friends) => {
Person.prototype.myFriends6 = function(friends) {

    let arr = friends6.map(el => 
        ` ${this.name} is friends with ${el}`);

    console.log(`ES6: ${arr}`);
};

let friends6 = ['Laura', 'Tyler', 'Kaiden'];
new Person('Josh').myFriends6(friends);
*/

////// ES6: Destructuring \\\\\\

//ES5
// var josh = ['Josh', 41];
// var name = josh[0];
// var age = josh[1];

// ES6
/*
const [nameES6, ageES6] = ['Josh', 41];
console.log(nameES6);
console.log(ageES6);

const obj = {
    firstName: 'Josh',
    lastName: 'Stigall'
};

const {firstName, lastName} = obj;
console.log(lastName);
console.log(firstName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 70 - age];
}

const [age, retirement] = calcAgeRetirement(1977);
console.log(age);
console.log(retirement);
*/

////// ES6: Arrays \\\\\\
//
const boxes = document.querySelectorAll('.box'); //Gets the array
//console.log(boxes);
//ES5
var boxesArrayES5 = Array.prototype.slice.call(boxes);
//console.log(boxesArrayES5);

// boxesArrayES5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue';
//     //console.log(cur);
// });

// boxesArrayES5.array.forEach(element => {

// });

//ES6

// Changing box color to Blue
const boxesArrayES6 = Array.from(boxes);
Array.from(boxes).forEach(cur => (cur.style.backgroundColor = 'dodgerblue'));
//console.log(boxes);

////// Break and Continue \\\\\\

//ES5
/*
for(var i = 0; i < boxesArrayES5.length; i++) {
    if (boxesArrayES5[i].className === 'box blue') {
        //continue; //changes each element that does not have 'box blue' class name.
        break; // only changes first element
    } else {
        boxesArrayES5[i].textContent = 'I am now blue';
    }
}
*/

//ES6: Changing text to "I changed to blue"

for (const c of boxesArrayES6) {
    if (c.className.includes('blue')) {
        continue;
    } else {
        c.textContent = 'I changed to blue';
    }
}

////// Alternative to indexOf \\\\\\

//ES5
var agesES5 = [41, 14, 15];

var full = agesES5.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log('ES5 indexOf: ' + full.indexOf(true)); // index of full age
console.log('ES5 age of index: ' + agesES5[full.indexOf(true)]); // age of index

//ES6
console.log('ES6 findIndex: ' + agesES5.findIndex(cur => cur >= 18));
console.log('ES6 age of index: ' + agesES5.find(cur => cur >= 18));
