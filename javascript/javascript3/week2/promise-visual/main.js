//Visual Promise
//One By One
const span = document.querySelector('span');
async function translateOneByOne(nthChild, x, y){
    return await new Promise (resolve => {
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

translateOneByOne(1, 20, 300)
.then(() => translateOneByOne(2, 400, 300))
.then(() => translateOneByOne(3, 400, 20))
.then (() => span.setAttribute('class', 'shown'))

//All at Once

// function translateAllAtOnce(){
//     const moveRed = moveElement(document.querySelector('li:nth-child(1)'), {x: 20, y: 300});
//     const moveBlue = moveElement(document.querySelector('li:nth-child(2)'), {x: 400, y: 300});
//     const moveGreen = moveElement(document.querySelector('li:nth-child(3)'), {x: 400, y: 20});
//       Promise.all([moveRed, moveBlue, moveGreen])
//         .then (() => {
//             console.log("Elements have been moved");
//             span.setAttribute('class', 'shown')
//         })
    
// }
// translateAllAtOnce()
