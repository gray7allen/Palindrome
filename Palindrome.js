function isPalindrome(word) {

    let arrayValues = word.split('');

    let reverseArrayValues = arrayValues.reverse();

    let reverseWord = reverseArrayValues.join('');

    if(word === reverseWord) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('cheese'));