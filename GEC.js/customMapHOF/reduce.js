/**Input: [2, 5, 8, 11, 14]
Reduce use karke sirf even numbers ka total nikalna hai.

Expected output: 24
(kyunki 2 + 8 + 14) */
const inp = [2, 5, 8, 11, 14];

let total = inp.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    return acc + curr;
  }
  return acc; // odd number? just keep accumulator unchanged
}, 0);

console.log(total); // 24


/**Longest string in an array

Input: ["cat", "elephant", "dog", "crocodile"]
Reduce se sabse lambi string return karo.

Expected output: "crocodile" */