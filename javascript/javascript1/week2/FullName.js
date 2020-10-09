//Get Full Name
function getFullName (firstName, surName) {
  return `${firstName} ${surName}`;
}
const fullName1 = getFullName('Benjamin', 'Hughes');
const fullName2 = getFullName('Kjaw', 'Minn Hla');
fullName1;
fullName2;

function addressName (firstName, surName, useFormalName) {
  if (useFormalName) {
    return `Lord ${firstName} ${surName}`;
  } else {
    return `${firstName} ${surName}`;
  }
}

addressName ('Benjamin', 'Hughes', false); //'Benjamin Hughes'
addressName ('Kjaw', 'Minn Hla', true); //'Lord Kjaw Minn Hla'