//Event Planner 
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDay = currentDate.getDay();
function getEventWeekday (followingDays){
    let i = (currentDay + followingDays) % 7;
    return weekdays[i];
}
console.log(getEventWeekday(7)); //'Thursday'
console.log(getEventWeekday(1)); //'Friday'