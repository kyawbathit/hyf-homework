// //The shortest Word
const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
  function findShortestWord (arr) {
    return arr.reduce(function (a, b){
      return a.length <= b.length ? a : b;
});
}
console.log(findShortestWord(danishWords));