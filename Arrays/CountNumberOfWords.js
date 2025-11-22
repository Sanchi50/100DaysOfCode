/**You are assigned the task of developing a program to count the number of words in a given string. Count and return the number of words present in the string.
Expected Input
"I am a Ninja Coder "
Expected Output
5
Test Cases
Count the total number of words in the given string
Return the count of words
Note
An extra space has been inserted after the last word of the string */

function countWords(str){
    let count = 0;
     str = str.trim();
    let words = str.split(" ");
    count = words.length;
    return count; 
}

let str = "I am a Ninja Coder "