
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
const container = document.querySelector("container");
const para = document.getElementById("animal-name");
const button = document.getElementById("button");
const userName = document.getElementById("user-name");
button.addEventListener("click", genAnimalNames);
function genAnimalNames () {
const randomNum = Math.floor(Math.random() * animals.length);
const animalName = animals[dandomNum];
if (userName.value === undefined) {
    alert ("Type username first");
    } else {
    return para.innerHTML = `userName.value +" - "+ animalName`;
}
button.appendchild(button);
};

// userName.onkeypress = function(event) {
//     if (event.keyCode === 14) {
//       genAnimalNames();
//     }
//     return false;
//   };
   
//   const select = document.querySelector("select");
//   userName.addEventListener("mouseover", function() {
//     select.value === "hover" ? spiritAnimalNameGen() : event.stopPropagation();
//   });
  
//   select.addEventListener("change", function() {
//     if (select.value === "click") {
//       button.disabled = false;
//     } else {
//       button.disabled = true;
//     }
//   });



