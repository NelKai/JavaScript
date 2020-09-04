// 1. Dogs age

function dogsAgeCalc(age) {
    return age * 7;
}

// 2. Debugging a script

var i = 5; var j = 10
var k = 25; var l = "Joe";

if (i < j) { 
     console.log("i");
}
 else if (j > k) {
    console.log("k");
 }
else 
    console.log("j");
	var arr = [3, 5, 7];

for (var i = 0; i <=3; ++i){
    console.log(arr[i]);
}


// 3. Conditionals

var x = 20;
var order = 'Beer';

if (x>50) {
    document.write("He's over 50!");
    console.log("Over 50!");
} else if (x<=50 && x >30) {
    document.write("Middle aged man, who ordered some "+order);
    console.log("Middle aged man.");
} else if (x >= 18 && x < 29) {
    document.write("<h1>He's older than eighteen.</h1>");
    console.log("Older than eighteen.");
} else 
    document.write("It seems you're a bit underaged.");

// 4. Loops

var arr = [];
for (var i=0; i<100; i++) {
    arr.push(Math.random());
}
document.write(arr);

// 5. Functions walkthrough

function areYouOldEnough(age) {
    if (age < 18) {
        console.log(false);
        return false;
    } else 
        console.log(true);
        return true;
}

function areYouOldEnough(age) {
    if (age < 18) {
        console.log("You are not old enough! You are only "+age);
        return false;
    } else 
        console.log("You are old enough! You are over eighteen.");
        return true;
}

// 6. Objects

var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
    address: "23 Lane Street",
    telephone: "000 456 000"
};

function printInfo(person) {
    console.log(person);
}

var array = [];

array[0] = person;
array[1] = person;
array[2] = person;
array[3] = person;

for (var i = 0; i <= array.length; i++) {
    console.log(person.firstName+" "+person.lastName);
}

