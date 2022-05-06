//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [8, 31, 2013, 4, 25];

let sum = nums.reduce( (a,b) => a+b, 0);

alert(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squareNums(nums){
    return nums.map(x => x**2)
}

//Create a function that takes string
//Print the reverse of that string to the console

function reverseString (str){
    let rev = str.split('').reverse().join('');
    console.log(rev)
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome(st){
    let reversed = st.split('').reverse().join('');
    if (st === reversed) {
        alert('It is a palindrome!')
    } else{
        alert('It is not a palindrome!')
    }
}
