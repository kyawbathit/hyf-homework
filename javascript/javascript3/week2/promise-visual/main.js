//Visual Promise
const span = document.querySelector('span');
function translateOneByOne(nthChild, x, y){
    return new Promise (resolve => {
        moveElement(document.querySelector(`li:nth-child(${nthChild})`), { 
            x, 
            y 
        })
        .then(() => {
            console.log("Element has been moved");
            resolve();
        });
    })
}
//One By One
// translateOneByOne(1, 20, 300)
// .then(() => translateOneByOne(2, 400, 300))
// .then(() => translateOneByOne(3, 400, 20))
// .then (() => span.setAttribute('class', 'shown'))

//All at Once
async function translateAllAtOnce(){
    const moveRed = translateOneByOne(1, 20, 300);
    const moveBlue = translateOneByOne(2, 400, 300);
    const moveGreen = translateOneByOne(3, 400, 20);
      await Promise.all([moveRed, moveBlue, moveGreen])
        .then (() => {
            console.log("Elements have been moved");
            span.setAttribute('class', 'shown')
        })
    
}
translateAllAtOnce()
