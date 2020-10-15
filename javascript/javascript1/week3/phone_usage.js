// Smartphone Usage
const activities = [];
const maxUsageinMin = 40;

function addActivity (date, activity, duration) {
    if (duration < maxUsageinMin && activities.length < 4) { 
      activities.push({date, activity, duration});
    } else {
      return (`You have reached Max usage.`)
  }
}

addActivity('11/10', 'Game', 45); //You have reached Max usage.
addActivity('14/10', 'Movie', 35);
addActivity('12/10', 'Facebook', 30);
addActivity('13/10', 'Music', 20);
addActivity('13/10', 'Chate', 35); //You have reached Max usage.
activities;

function showStatus(activities) {
   if (activities.length === 0) {
    console.log(`Add some activities first.`);
  } else {
   for (let i = 0; i < activities.length; i++){
    let total = 0;
     for (i in activities)
       total += activities[i].duration;
      console.log (`You have ${activities.length} activities, amounting to ${total} min. of usage`);
   }      
}
}

showStatus(activities); 
// You have 4 activities, amounting to 150 min.