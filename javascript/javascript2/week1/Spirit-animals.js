
//Spirit animals generator
const animals = [
    "The fullmoon wolf",
    "The honest friendly dog",
    "The secretive cat",
    "The magical and mysterious crow",
    "The spiritual guiding hawk",
    "The courageous eagle",
    "The peace-loving dove",
    "The butterfly-effecting butterfly"    
];
const para = document.getElementById("animal-name");
const button = document.getElementById("button");
const input = document.getElementById("user-name");
button.addEventListener("click", genAnimalNames);
function genAnimalNames () {
const randomNum = Math.floor(Math.random() * animals.length);
const animalName = animals[randomNum];
    !input.value? 
    para.innerText = "Type your name first!"
    : para.innerText = input.value +" - "+ animalName;
};

// Adding more Spirit animals
const input2 = document.getElementById("new-animal");
const para2 = document.getElementById("result");
const button2 = document.getElementById("button2");
const select = document.getElementById("select");
input2.addEventListener('mouseout', function () {
    input2.value?  select.style.display = "block" 
    : select.style.display = "none";
});
input2.addEventListener('mouseout', function () {
    select.value === "hover"?  
    genNewAnimal () : false; 
});

select.addEventListener('click', function () {
    select.value === "buttonClick"?   
    button2.style.display = "block" 
    : button2.style.display = "none";
 
});
button2.addEventListener("click", genNewAnimal); 

function genNewAnimal () {
        animals.push(input2.value);
        return para2.innerText = input2.value + " is added to the animal list.";
    
};


