//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2020;
const dogYearFuture = 2027;
const humanAge = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = humanAge * 10;

if (shouldShowResultInDogYears === true) {
    console.log ("Your dog will be "+humanAge+" human years old in "+dogYearFuture+".")
} else {
console.log ("Your dog will be "+shouldShowResultInDogYears+" dog years old in "+dogYearFuture+".");
}