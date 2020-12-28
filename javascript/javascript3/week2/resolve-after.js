//Resolve after some seconds
function delayResolve (resolveAfter) {
    return new Promise(resolve => {
        setTimeout(resolve, resolveAfter * 1000);
        })
}

delayResolve(5)
    .then(() => {
        console.log("I am called asynchronously.");
    })

//Async & Await
async function callDelayResolve (sec) {
    await delayResolve(sec);
    console.log(`I am called after ${sec} sec.`);
}
callDelayResolve(8)