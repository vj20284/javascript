var months = ["Jan", "Feb", "Mar", "Apr", "May"];

console.log(Array.isArray(months));

months.forEach(function(value, index, fullArray){
    console.log(value + " is month number " + (index + 1) + " of " + fullArray.length);
});

everyItemContainsR = months.every(function(value, index, fullArray){
    return value.indexOf("r") >= 0;
});
console.log(everyItemContainsR); // False

someItemContainsR = months.some(function(value, index, fullArray){
    return value.indexOf("r") >= 0;
});
console.log(someItemContainsR); // True

var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday"];
// The map method allows a new array to be created by looping through an
// existing one, executing a function on each item to determine the equivalent
// item in the new array
daysFirstLetters = daysOfTheWeek.map(function(value, index, fullArray){
    return value.charAt(0);
});
// ["Monday", "Tuesday", "Wednesday"] => ['M', 'T', 'W']
console.log(daysFirstLetters.join(", "));

monthsContainingR = months.filter(function(value, index, fullArray){
    return value.indexOf("r") >= 0;
});
console.log(monthsContainingR.join(", "));

var arr = [1, 2, 3, 4, 5];
var x = arr.unshift("zero"); 
console.log(arr); // zero, 1, 2, 3, 4, 5

arr.push(6, 7, 8);
console.log(arr); // zero, 1, 2, 3, 4, 5, 6, 7, 8

arr.shift(); 
console.log(arr); // 1, 2, 3, 4, 5, 6, 7, 8

arr.pop();
console.log(arr); // 1, 2, 3, 4, 5, 6, 7

arr.splice(3, 3, "four", "five", "six");
console.log(arr); // 1, 2, 3, four, five, six, 7

arr.splice(3, 1);
console.log(arr); // 1, 2, 3, five, six, 7

arr.splice(3);
console.log(arr); // 1, 2, 3