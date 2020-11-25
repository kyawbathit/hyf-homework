//The shortest Word
const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
  function findShortestWord (arr) {
    return arr.reduce((a, b) =>
    a.length <= b.length ? a : b);
}

console.log(findShortestWord(danishWords)); // 'ø'

//find Characters
const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
function findChar (str) {
  const searchedChar = /[åøæ]/gi;
  let chars = {};
   chars.total = (str.match(searchedChar) == null) ? 0
   : str.match(searchedChar).length; 
  str.replace(searchedChar, function(l){chars[l] = (isNaN(chars[l]) ? 1 : 
    chars[l] + 1);});
    return chars;
}
findChar(danishString); //{ total: 1, 'å': 1 }
findChar(danishString2); //{ total: 4, 'å': 1, 'ø': 2, 'æ': 1 }