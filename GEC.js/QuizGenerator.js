/**You have been assigned the task of developing a software system for an online examination that generates question papers for various subjects. The system should be able to shuffle the questions within each subject every time a question paper is generated, ensuring that the order of the questions is randomized for each student.
Requirements
Develop a function named "shuffle" that accepts an array as its input.
This function should return another function.
The returned function should be able to produce a shuffled version of the original array whenever it is called.
You have the flexibility to choose a meaningful name for the returned function.
Input:
const func = shuffle(questions)
const shuffledArray1 = func();
const shuffledArray2 = func();
Output:
shuffleArray1 : [ 'Question5', 'Question3', 'Question1', 
'Question4', 'Question2' ]
shuffleArray2 : [ 'Question3', 'Question1', 'Question4', 
'Question5', 'Question2' ]
Starter Code Link:
Use this starter code file to write your code.
Note:
1. The output can vary from the given output.
2. Use the provided starter code file to complete the project.
Hint:
You can use the math.random() for generating random numbers.
You can check the Fisher-Yates shuffle algorithm to solve this problem Using this link
 */