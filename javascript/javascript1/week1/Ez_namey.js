//Ez Namey (Startup name generator)
const firstWords = ["Hoohle", "Zahoo", "Nozilla", "Fakebook", "Tweeter", "See", "Tee", "Vee","Xee", "Zee"]
const lastWords = ["Corp", "Group", "Company", "Limited", "Inc", "Org", "Network", "Associate", "Firm", "Society"];
const startUpName = firstWords[Math.floor(Math.random() * 10)] +" "+ lastWords[Math.floor(Math.random() * 10)];

console.log ("The startup: \""+startUpName+"\" containing "+startUpName.length+" characters.");