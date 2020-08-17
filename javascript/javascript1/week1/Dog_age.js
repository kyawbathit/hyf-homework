//Goodboy-Oldboy (A dog age calculator)
const yearOfBirth = 2020;
const yearFuture = 2027;
const humanAge = yearFuture - yearOfBirth;
const dogAge = (yearFuture - yearOfBirth) * 7;
const shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears === true) {
    console.log ("Your dog will be "+dogAge+" dog years old in "+dogYearFuture+".")
} else {
console.log ("Your dog will be "+humanAge+" human years old in "+yearFuture+".");
};