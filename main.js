var sumArray = [2, 4, 6];

var findSum = function (sumArray) {
for (let i = 0; i < sumArray.length; i++) {
    sum += sumArray[i];
};
    return sum
};

var sum = findSum(sumArray);

console.log(sum);




var freqArray = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd'];


findFrequency = function (freqArray) {
const counts = {};

    for (const num of freqArray) {
    counts[num] = counts[num] ? counts[num] + 1 : 1
    };
    
    var most = property
    var least = property

    for (const property in counts) {
      
    };
    return counts
};
console.log(findFrequency(freqArray));



var pal = 'dog';
var palReverse = pal.split('').reverse().join('');

var isPalindrome = function () {
    if (pal === palReverse) {
        console.log('true');
        return 'true'
    } else if (pal !== palReverse) {
        console.log('false');
        return 'false'
    } 
};

isPalindrome();


var pairArray = [5, 1, 2, 3, 1, 4];

var pairArray2 = [9, 5, 10, 2, 24, -1, -48]; 


let largestPair = function (pairArray) {
    var maxProduct = pairArray[0] * pairArray[1];
    for (let i = 1; i < pairArray.length - 1; i++) {
        product = pairArray[i] * pairArray[i + 1];
        if (product > maxProduct) {
            maxProduct = product;
        }
    };
    return maxProduct;
};
console.log(largestPair(pairArray)); 





var string = 'ido(not)liketocode';

let removeParenth = function (string) {
    // string.replaceAll(/(not)/g);
    var parenthArray = string.replace(/\(.*?\)/g, '').split(/\s+/, 5);
    var finString = parenthArray.toString();
    return finString;
}

console.log(removeParenth(string));



var scrabbleWord = 'quiet';
var word = scrabbleWord.split('');
let newAlphabet = { a: '1',
  e: '1',
  i: '1',
  o: '1',
  u: '1',
  l: '1',
  n: '1',
  r: '1',
  s: '1',
  t: '1',
  d: '2',
  g: '2',
  b: '3',
  c: '3',
  m: '3',
  p: '3',
  f: '4',
  h: '4',
  v: '4',
  w: '4',
  y: '4',
  k: '5',
  j: '8',
  x: '8',
  q: '10',
  z: '10' }
let scoreScrabble = function (scrabbleWord) {
    let sum = 0
    let i = 0
    let score = 0
for (i = 0; i < word.length; i++) {
    letter = word[i];
    sum += parseInt(newAlphabet[letter]);
}
return (sum*1);
}

console.log(scoreScrabble(scrabbleWord));
