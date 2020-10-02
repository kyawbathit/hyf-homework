//Ez Namey (Startup name generator)
const firstWords = ["Hoohle", "Zahoo", "Nozilla", "Fakebook", "Tweeter", "See", "Tee", "Vee","Xee", "Zee"]
const secondWords = ["Corp", "Group", "Company", "Limited", "Inc", "Org", "Network", "Associate", "Firm", "Society"];
const randomNumber = Math.floor(Math.random() * 10) + 0;
const startUpName = firstWords[randomNumber] +" "+ secondWords[randomNumber];

console.log ("The startup: \""+startUpName+"\" containing "+startUpName.length+" characters.");

//*** in a function ***//

// function genStartUp () {
//   const randomNumber = Math.floor(Math.random() * 10) + 0;
//   const startUpName = firstWords[randomNumber] +" "+ secondWords[randomNumber];
//   return startUpName +": contains "+ startUpName.length +" chars";
//  };
// console.log(genStartUp())
