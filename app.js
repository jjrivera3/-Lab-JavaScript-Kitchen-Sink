
// 3. Create a variable that contains your name as a value. Name the variable appropriately.
var name = 'Joseph';

// 4. Create a constant that contains the number of states in the U.S. and name it appropriately.
const statesNumber = 50;

// 5.Compute the result of adding 5 and 4 and store it in an appropriately named variable.
var add = 5 + 4;

// 6. Write some code so that if your name starts with a letter after L, you display an alert that says "Back of the line!". Otherwise, you should display an alert that says "Next!".
var startName= name[0];
index = 76;

if(name.charCodeAt(startName) >  index){
    console.log('Back of the line!')
} else{
    console.log('Next!');
}

// 8. Write a function called sayHello that displays an alert that says Hello World!
function sayHello(){
    alert('Hello World!');
}
// 9. Call the sayHello function.
sayHello();

// 10. Write a function called checkAge that takes two arguments: one for a name and one for an age. If the age is less than 21, display an alert that says "Sorry ${name} you aren't old enough to view this page!"
function checkAge(name, age){
    if(age < 21){
        alert('Sorry ' + name + ' you aren\'t old enough to view this page!');
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

// 12. Create an array of your favorite vegetables and name it accordingly.
var favVeggies = ['broccoli', 'carrots', 'lettuce', 'kale', 'spinach', 'asparagus'];

// 13. Use a loop to display each of your favorite vegetables to the developer console.
for(let i = 0; i < favVeggies.length; i++){
    console.log(favVeggies[i]);
}


// Check Age Function
function checkAge(name, age){
    if(age < 21){
        alert('Sorry ' + name + ' you aren\'t old enough to view this page!');
    }
}






// 14. Create an array of 5 objects that contain name and age properties. Make up names and ages for each object, making sure some are younger than 21 and some are 21+.
var arr= [
    {
        name: 'Joseph', 
        age: 25
    },
    {
        name: 'John',
        age: 22
    },
    {
        name: 'Kelly',
        age: 17
    },
    {
        name: 'Tyler',
        age: 15
    },
    {
        name: 'Hannah',
        age: 23
    }
];


function checkAge(name, age){
    if(age < 21){
        alert('Sorry ' + name + ' you aren\'t old enough to view this page!');
    }
}


for(let i = 0; i < 10; i++){
    checkAge(arr[i].name, arr[i].age);
}






