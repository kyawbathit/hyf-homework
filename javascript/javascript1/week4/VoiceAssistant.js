const command = "";
const nameArr = [];
const toDoArr = [];
const sumArr = [];
const minArr = [];

function getReply(command) {
   if (command.includes("Do you know my name") && nameArr.length === 0){
     return `You have not told me yet`;
  } if (command.includes("Hello my name is") && nameArr.length === 0){
    const commandArr = command.split(" ");
    const name = commandArr[commandArr.length - 1];
    nameArr.push(name);
    return `Hello ${nameArr}, Nice to meet you!`;
  } if (command.includes("Hello my name is") && nameArr.length !== 0) {
    return `I know you, ${nameArr}.`
  } if (command.includes("What is my name") && nameArr.length !== 0){
    return `Your name is ${nameArr}`;
  } if (command.includes("Add fishing to my todo")) {
    toDoArr.push("Fishing");
    return `Fishng added to your todo.`;
  } if (command.includes("Add singing in the shower to my todo")) {
    toDoArr.push("Singing in the shower");
    return `Singing in the shower added to your todo.`;
  } if (command.includes("What is in my todo?")) {
     return `You have ${toDoArr.length}: ${toDoArr.join( " & " )}`;
  } if (command.includes("Remove fishing from my todo")) {
    toDoArr.shift();
    return `Removed fishing from your todo.`;
  } if (command.includes("What is the date today?")) {
    const date = new Date();
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
     return `Today is ${day} of ${month}, ${year}`;
  } if (command.includes("What is") && sumArr.length === 0) {
    const commandArr = command.split(" ");
    const calc = commandArr[commandArr.length -3].concat( commandArr[commandArr.length -2], commandArr[commandArr.length -1]);
    let sum = 0;
    sum = (fn) => new Function('return ' + fn)();
    const calcsum = sum(calc);
      return `The answer is: ${calcsum}`;
  

  } if (command.includes("Set time for") && minArr.length === 0) {
       const commandArr = command.split(" ");
    const min = commandArr[commandArr.length - 2];
    const minInSec = min * 60;
    const myTimer = setInterval(function(){ 
    clearInterval(myTimer);
    console.log (`${min} minute(s) is UP!!`); }, minInSec * 1000);
      return `Timer set for ${min} minutes`;
   }
}

console.log(getReply("Do you know my name")); //'You have not told me yet'
console.log(getReply("Hello my name is Kjaw")); //'Hello Kjaw, Nice to meet you!'
console.log(getReply("Hello my name is Kjaw")); //'I know you, Kjaw.'
console.log(getReply("What is my name")); //'Your name is Kjaw'
console.log(getReply("Add fishing to my todo")); // 'Fishng added to your todo.'
console.log(getReply("Add singing in the shower to my todo")); // 'Singing in the shower added to your todo.'
console.log(getReply("What is in my todo?")); //'You have 2: Fishing & Singing in the shower'
console.log(getReply("Remove fishing from my todo")); //'Removed fishing from your todo.'
console.log(getReply("What is the date today?")); //'Today is 20 of October, 2020'
console.log(getReply("What is 3 ** 3")); //'The answer is: 27'
console.log(getReply("Set time for 4 minutes")); //'Timer set for 4 minutes.' // '4 minute(s) is UP!!'