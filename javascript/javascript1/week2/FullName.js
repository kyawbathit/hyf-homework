//Full Name
function getFullName (firstName, surName, useFormalName){
    if (useFormalName === true){
     return `Lord ${firstName} ${surName}`;
  } else {
    return `${firstName} ${surName}`;
  }
  }
  const fullName1 = getFullName("Benjamin", "Hughes", true);
  const fullName2 = getFullName("Benjamin", "Hughes", false);
  
  console.log (fullName1);
  console.log (fullName2);