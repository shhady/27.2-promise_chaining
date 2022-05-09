// Instructions
// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.

// Submit the file to Hive.

const makeAllCaps = (words) => {
  return new Promise((resolve, reject) => {
    const newArr = [];
    for (let word of words) {
      if (typeof word !== "string") {
        reject("only strings accepted");
      }
      newArr.push(word.toUpperCase());
    }
    resolve(newArr);
  });
};

let arrayOfWords = ["hi", "hello", "hola"];
let arrayOfWords1 = ["hi", "hello", "hola", 3];

makeAllCaps(arrayOfWords1)
  .then((res) => {
    return sortWords(res);
  })
  .then((res) => console.log(res))
  .catch((res) => console.log(res));

function sortWords(words) {
  return new Promise((resolve, reject) => {
    for (let word of words) {
      if (typeof word !== "string") {
        reject("new Error");
      }
    }
    resolve(words.sort());
  });
}

// -------------------------------Second Solution---------------------------------

// const makeAllCaps = (arr) =>{
//   let res = '';
//   res = arr.map((word)=>{
//     return word.toString().toUpperCase()
//   })
//   sortWords(res)
// }
// const sortWords = (arr) => {
//   let isNot = false;
//   arr.forEach(word => {
//     word.split('').forEach(letter =>{
//       if (parseInt(letter)) {
//         isNot = true
//       }
//     })
//   });
//   return new Promise((resolve,reject)=>{
//       isNot === true? reject() : resolve(arr)
//     })
//     .then((arr)=>{console.log(arr.sort())})
//     .catch(()=>{console.log('no');})
// }
// makeAllCaps(['jason','is','aa'])
// makeAllCaps(['jas2on','is','is'])
// makeAllCaps(['jas2on',2,'is','is'])
