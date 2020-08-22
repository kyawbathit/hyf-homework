//Voice Assistant
// Voice Assistant
const command = [];
const greeting = [];
const nameArr = [];
const toDo = [];
const date = Date();
const sumArr = [];
const sum = [];

    
function getReply(command) {
  if (command === "Hello") {
    return `Hello I am listening`;
  } if (command.includes("Hello my name is") && nameArr.length === 0){
  const commandArr = command.split(" ");
  const name = commandArr[commandArr.length - 1];
    nameArr.push(name);
    return `Hello ${nameArr}, Nice to meet you!`;
  } if (command.includes("Hello my name is") && nameArr.length !== 0) {
    return `I know you, ${nameArr}.`
  } if (command.includes("What is my name") && nameArr.length !== 0){
    return `Your name is ${nameArr}`;
  } if (command.includes("Do you know my name") && command.length !== nameArr){
    return `You have not told me yet`;
  } if (command.includes("Add fishing to my todo")) {
    toDo.push("Fishing");
    return `Fishng added to your todo.`;
  } if (command.includes("Add singing in the shower to my todo")) {
    toDo.push("Singing in the shower");
    return `Singing in the shower added to your todo.`;
  } if (command.includes("What is in my todo?")) {
     return `You have ${toDo.length}: ${toDo.join( " & " )}`;
  } if (command.includes("Remove fishing from my todo")) {
    toDo.shift(toDo);
    return `Removed fishing from your todo.`;
  } if (command.includes("What is the date today?")) {
     return `Today is ${date}`;
  } if (command.includes("What is") && sumArr.length === 0) {
    const commandArr = command.split(" ");
    const calc = commandArr[commandArr.length -3].concat( commandArr[commandArr.length -2], commandArr[commandArr.length -1]);
    const sum = (fn) => new Function('return ' + fn)();
    const calcsum = sum(calc);
      return `The answer is: ${calcsum}`;
  } if (command.includes("Set time for 4 minutes")) {
     const myTimer = setInterval(function(){ 
    clearInterval(myTimer);
   console.log ("TIME UP!!"); }, 4 * 60 * 1000);
      return `Timer set for 4 minutes`;
}
}
  

console.log(getReply("Hello"));
console.log(getReply("Hello my name is Kjaw"));
console.log(getReply("Hello my name is Kjaw"));
console.log(getReply("What is my name"));
console.log(getReply("Do you know my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is in my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is the date today?"));
console.log(getReply("What is 12 * 12"));
console.log(getReply("Set time for 4 minutes"));




