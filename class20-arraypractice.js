//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function even(arr) {
    let newArr = [];
    for(let i=0; i< arr.length; i++){
        if(arr[i]%2===0){
            newArr.push(arr[i])
        }
    } return newArr
}

____________________________________________
/*solutions*/
function onlyEvens(nums) {
    let evens =[];
    nums.forEach( n => {
        if(n%2===0){
            evens.push(n)
        }
    })
    return evens
}