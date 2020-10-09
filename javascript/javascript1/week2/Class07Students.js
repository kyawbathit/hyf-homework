//Class07 Students
const class07Students = [];
function addStudentToClass(studentName) {
  if (class07Students.includes(studentName)) {
    return  `Student ${studentName} exists already`;
  } else if (studentName === " "){
     return `No empty name`;
   } else if (class07Students.length < 6 || studentName === "Queen") {
    return class07Students.push(studentName);
   } else if (class07Students.length >= 6 && studentName !== "Queen") { 
     return `No more students can be added to class07.`;
   } 
}
console.log(addStudentToClass(" ")); // No empty Name.
console.log(addStudentToClass("Kjaw0"));
console.log(addStudentToClass("Kjaw1"));
console.log(addStudentToClass("Kjaw2"));
console.log(addStudentToClass("Kjaw3"));
console.log(addStudentToClass("Kjaw4"));
console.log(addStudentToClass("Kjaw5"));
console.log(addStudentToClass("Kjaw5"));// Student "Kjaw5" exists already
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("Kjaw7")); // No more student


function getNumberOfStudents() {
  return class07Students.length;
 }
console.log(getNumberOfStudents()); // 7