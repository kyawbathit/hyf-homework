//The shortest Word
const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
  function findShortestWord (arr) {
    return arr.reduce((a, b) =>
    a.length <= b.length ? a : b);
}

console.log(findShortestWord(danishWords)); // 'ø'

//find Characters