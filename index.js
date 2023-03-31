function isPalindrome(s) {

  // Write your algorithm here

  // 1. Define a function named isPalindrome that takes a string argument, s.
  // 2. Convert the input string to lowercase.
  // 3. Loop through the string from both ends, comparing each character.
  // 4. If any characters don't match, return false.
  // 5. If the loop completes without finding a difference, return true.
  
    // Convert the input string to lowercase
    s = s.toLowerCase();
    
    // Loop through the string from both ends, comparing each character
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
      if (s[i] !== s[j]) {
        return false;
      }
    }
    
    // If the loop completes without finding a difference, the string is a palindrome
    return true;
  
  






}

/* 
  Add your pseudocode here

  function isPalindrome(s):
  // Convert the input string to lowercase
  s = lowercase(s)

  // Initialize two pointers, one at the beginning of the string and one at the end
  i = 0
  j = length(s) - 1
  
  // Loop through the string from both ends, comparing each character
  while i < j:
    // If the characters at the two pointers don't match, return false
    if s[i] != s[j]:
      return false
    
    // Increment the first pointer and decrement the second pointer
    i++
    j--
  
  // If the loop completes without finding a difference, the string is a palindrome
  return true
*/

/*
  Add written explanation of your solution here

  The isPalindrome function takes a string argument and returns true if the string is a palindrome (reads the same forwards and backwards) and false otherwise. The function first converts the input string to lowercase and then loops through the string from both ends, comparing each character. If any characters don't match, the function immediately returns false. If the loop completes without finding a difference, the string is a palindrome and the function returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
