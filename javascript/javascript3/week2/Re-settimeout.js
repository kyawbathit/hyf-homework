//Set Time for resolution
function setTimeoutPromise(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
        });
    
}
setTimeoutPromise(5000)
    .then(() => {
    console.log("Called after 5 seconds");
});

//Promise for location
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}
getCurrentLocation() 
.then(position => {
    console.log(position);
})
.catch(error => {
    console.log(error);
});



