//[1].....ReverseString (SuperMan)
var realString = "superMan";
function ReverseString(str) {
    return str.split('').reverse().join('');

}
 var reversedString = ReverseString(realString);
console.log("Reversed String:", reversedString);

  


//....[2]check if the string is palindrome or not
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}
var realString = "superMan";
console.log(isPalindrome(realString)); 






//[3]....ask for the input of the user, and check alert the data type of input, if the user enters 88, it should show type: numbe
function PromptAndCheckType() {
    var Input = prompt("Please enter Number");
    if (!isNaN(Input)) {
        alert("Type number");
    } else {
        alert("Type " + typeof Input);
    }
}
PromptAndCheckType();





//[4].....check if the given array is consistent or not. e.g. [1,2,3,5,6,7] it is not
//  consistent as after 3 gap is 2.
function isArrayConsistent(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return false;
        }
    }
    return true;
}
const inconsistentArray = [1, 2, 3, 5, 6, 7];
console.log("Is the inconsistentArray consistent?", isArrayConsistent(inconsistentArray));


