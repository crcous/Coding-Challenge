

var findSum = function (array) {
let sum = 0
for (let i = 0; i < array.length; i++) {
    sum += array[i];
};

return sum
};











findFrequency = function (array) {
const counts = '';


    return counts
};





var isPalindrome = function (str) {
    var palReverse = str.split('').reverse().join('');
    if (str === palReverse) {
        
        return 'true'
    } else if (str !== palReverse) {
        
        return 'false'
    } 
};





 
let largestPair = function (array) {
    var maxProduct = array[0] * array[1];
    for (let i = 1; i < array.length - 1; i++) {
        product = array[i] * array[i + 1];
        if (product > maxProduct) {
            maxProduct = product;
        }
    };
    return maxProduct;
};
 







let removeParenth = function (str) {
    var parenthArray = str.replace(/\(.*?\)/g, '').split(/\s+/, 5);
    var finString = parenthArray.toString();
   
    return finString;
}







let scoreScrabble = function (str) {
    var word = str.split('');
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
    let sum = 0
    let i = 0
    let score = 0
for (i = 0; i < word.length; i++) {
    letter = word[i];
    sum += parseInt(newAlphabet[letter]);
}

return (sum*1);
}


