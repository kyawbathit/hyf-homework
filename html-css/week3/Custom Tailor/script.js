// function hideDiv() {
//     const myDiv = document.getElementById("my-profile");
//     if (myDiv.style.display === "none") {
//       myDiv.style.display = "block";
//     } else {
//       myDiv.style.display = "none";
//     }
//   }
  
  
    const slideIndex = 1;
        showDivs(slideIndex);

        function plusDivs(n) {
        showDivs(slideIndex += n);
}

function showDivs(n) {
  const i;
  const x = document.getElementsByClassName("section");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}