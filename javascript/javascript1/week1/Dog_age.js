//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2020;
const dogYearFuture = 2027;
const humanYear = dogYearFuture - dogYearOfBirth;
const dogYear = (dogYearFuture - dogYearOfBirth) * 10;
const shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears === true) {
    console.log (`Your dog will be ${dogYear} dog years old in ${dogYearFuture}.`)
    } else {
    console.log (`Your dog will be ${humanYear} human years old in ${dogYearFuture}.`);
};