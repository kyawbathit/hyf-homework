
// Fibonacci numbers
function fibonacci(num){
    let a = 1, b = 0, temp;
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  };
  fibonacci(9);

//FizzBuzz
    for (let i = 1; i <= 100; i++){
        if (i % 3 == 0 && i % 5 == 0)
        console.log("FizzBuzz");
        else if (i % 3 == 0)
        console.log("Fizz");
        else if (i % 5 == 0)
        console.log("Buzz");
        else
        console.log(i);
}
 
    
//FizzBuzz Function
    function fizzBuzz2(fizz, buzz) {
    for (let i = 1; i <= 100; i++){
       let f = i % fizz == 0, b = i % buzz == 0;
      console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
    }
    }
    fizzBuzz2(4, 6);

// Sentiment analyzer
const positiveWords = ["exciting", "funny", "so", "interesting", "pleasing"];
const negativeWords = ["upset", "boring", "dizzy", "angry", "dull"];

function getSentimentScore(sentence) {
  let score = 0;
  let positiveAdj = [];
  let negativeAdj = [];
  const sentenceArr = sentence.split(" ");
    positiveAdj = positiveWords.filter(function(adj) {
    return sentenceArr.indexOf(adj) != -1;
  });
   negativeAdj = negativeWords.filter(function(adj) {
    return sentenceArr.indexOf(adj) > 0;
  });
  let eachScore = 1.8;
    score = positiveAdj.length * eachScore - negativeAdj.length * eachScore;

  let rScore = Math.round(score * 10) / 10;
  return {
      score: rScore,
      positiveAdj: positiveAdj,
      negativeAdj: negativeAdj
     };
    
}
getSentimentScore("It was so exciting funny , interesting and pleasing"); //  {
//   score: 9,
//   positiveAdj: [ 'exciting', 'funny', 'so', 'interesting', 'pleasing' ],
//   negativeAdj: [] }

getSentimentScore("It was funny and exciting but later boring , dizzy and dull"); // {
//   score: -1.8,
//   positiveAdj: [ 'exciting', 'funny' ],
//   negativeAdj: [ 'boring', 'dizzy', 'dull' ]
// }

// Credit Card Formatter
function splitNum(number) {
    if (typeof number == "number") {
     let formatted = [];
     let numberInStr = number.toString();
     const digits = numberInStr.split("");
      for (let i = 4; i < digits.length; i += 5) {
         digits.splice(i, 0, " ");
         formatted = digits.join("");
     }
     return {
         original: number,
         formatted: formatted
        };
    } else {
      return "Please enter 16-digit numbers!"
    }
 }
   splitNum(1234567890111213); //{ original: 1234567890111213, formatted: '1234 5678 9011 1213' }
   splitNum("abcd"); //'Please enter 16-digit numbers!'

// Character frequencies

   function getCharFreq(word) {
    const chars = {};
    word.replace(/\S/g, function(l){chars[l] = (isNaN(chars[l]) ? 1 : 
    chars[l] + 1);});
    return chars;
  };

  console.log(getCharFreq("Hello")); //{ H: 1, e: 1, l: 2, o: 1 }

// Longest Palindromic substring

  function isPalindrome(str) {
    let reverse = str.split("").reverse().join("");
    return str == reverse;
    }
    
    function longestPalindrome(str){
    let maxLength = 0;
    let maxSub = '';
     for(let i = 0; i < str.length; i++) {
    let subs = str.substr(i, str.length);
      for(let j = subs.length; j >= 0; j--){
    let subSubStr = subs.substr(0, j);
      if (subSubStr.length <= 1) 
      continue;
      if (isPalindrome(subSubStr)){
      if (subSubStr.length > maxLength){
    maxLength = subSubStr.length;
    maxSub = subSubStr;
    }
    }
    }
    }
    return maxSub;
    }
    console.log(longestPalindrome("BACADE2365")); //'ACA'