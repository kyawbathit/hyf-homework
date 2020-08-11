//Event Planner 
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getEventWeekday (eventDay){
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    let i = (currentDay + eventDay) % 7;
    return weekday[i];
}
console.log(getEventWeekday(9)); //'Thursday'
console.log(getEventWeekday(3)); //'Friday'