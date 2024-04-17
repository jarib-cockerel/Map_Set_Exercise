/*
Question 1


what does new set([1,1,2,2,3,4]) return?


Set(4) {1, 2, 3, 4}

*/

console.log("Question 1");

const ques1 = new Set([1, 1, 2, 2, 3, 4]);

console.log(
  "New Set will return {1,2,3,4}. So four elements as Set returns unique values"
);

/*

Question 2

whad does [...new Set('referee")].join("") return?

1. ...new is a spread method
2. new Set is looking for unique values which will return only unique values
3. [...new Set('referee')] will return ['r', 'e', 'f']
4. .join("") will removes spaces between returned values and print out
5. returns as a string

if you remove .join("") that will return ques2 as an array 

*/

console.log("Qeustion 2");

const ques2 = [...new Set("referee")].join("");

/*

Question 3

what does the Map m look like after running the follow code:

let m = new Map();
m.set([1,2,3], true); 
m.set([1,2,3], false);

both keys are set as an array with 3 values [1,2,3]
however, one set has a true key and one has a false key 



*/

console.log("Qeustion 3");

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

/*
hasDuplicate

write a function called hasDuplicate which accepts an array and return true or false if tha 
array contains a duplicate

hasDuplicate([1,3,2,1])
hasDuplicate([1,5,-1,4])

1. we want to search for a unique value in which SET will be the best to use
2. we want to set each to a variable 
3. we can use arrow function 
4. .size will evaluate number of values stored in a set
5. !== is logic to say if not equal to length then a boolean is returned 



*/

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

/*
vowelCount

Write a function called vowelCount which accepts a string and returns a map where the keys are
numbers and the values are the count of the vowels in the string 

const vowelCount('awesome')
const vowelCount('Colt')

1.create a function that returns critieria to count vowels
2. function isvowel(char) {
    return 'aeiou'
}
3. includes to be added to pass thru the argument 
4. function isvowel(char) {
    return 'aeiou'.includes(char)
}
5. create a function named vowelCount
6. function vowelCount(str)
7. create a new map to 
8. function vowelCount(str) {
    const vowelMap = new Map()

}
9. we want to loop thru iterable and to do so must include parameter from isvowel and vowelcount
10. for(let char of str)
11. each looped thru value we want to conver it to lower case since the isvowle being returned as lower case char
12. createing a variable to convert each looped thru char to a lower case vowel
13. let lowerCaseChar = char.toLowerCase();
14. we need a loop to determine if true then execute else do not execute 
15. we have to use .set to figure out what determines true of the loop so use of key, value because of map
16. if (isvowel(lowerCaseChar)){
    if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1); 
    } else
    {
        vowelMap.set(lowerCaseChar, 1);
    }
}
return vowelMap


line 117 if true then pass thru string, count by 1 if true 

*/

function isvowel(char) {
  return "aeiuo".includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    let lowerCaseChar = char.toLowerCase();
    if (isvowel(lowerCaseChar)) {
      if (vowelMap.has(lowerCaseChar)) {
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}
