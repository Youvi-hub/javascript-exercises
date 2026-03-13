const repeatString = function (word, times) {
  let finalString = "";

  for (let i = 0; i< times; i++) {
    finalString += word;
  }

  return finalString;
};

let result = repeatString("bye", 0);
console.log (result);


// Do not edit below this line
module.exports = repeatString;
