var prompt = require ('sync-prompt').prompt;

//calculate persons final weight, list of food and total calories 
//based on their sex, what they ate and how many calories it was. 
//Women gain 1lb per 3000 cal and men gain 1 lb per 4000 cal.
//




//find out if male/female
var gender = prompt("Are you male or female ?");

//find out beginning weight
var begWeight = prompt("What is your beginning weight? ");
begWeight = parseFloat(begWeight);

//find out if ate
var eat = prompt("Did you eat? y or n ");

//create arrays for food and calories
var food = [], calories = [];//calories didn't need to be an array

var totalCalories = 0;
var weightGained;



while(eat != 'n'){
  var eat = prompt("What did you eat?");
    food.push(eat);
  var cal = prompt('How many calories was that?');
    cal = parseInt(cal);//add this to total by total += parseInt(calories) after not using calories in an array
    calories.push(cal);
    eat = prompt("Did you eat? y or n");
}

for(var i = 0; i < calories.length; i++){
  totalCalories += calories[i]; 
}

if(gender === 'female'){
  weightGained = totalCalories / 3000;
}else{
  weightGained = totalCalories / 4000;
}


begWeight += weightGained;

console.log('You gained ' + weightGained.toFixed(1) + 'lbs today');
console.log('Your total weight is ' +begWeight.toFixed(1) );
console.log('Your total calories were ' + totalCalories);
console.log('Here is a list of what you ate: ' + food);





