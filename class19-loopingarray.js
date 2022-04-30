//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['Little Mermaid', 'Up', 'Toy Story', 'Inside Out']

for(let i=0; i<movies.length; i++){
    document.querySelector('h2').innterText += movies[i]
}

//Create an array of numbers. Loop through the array add three to each number and replace the old number.
let nums = [12, 14, 8, 31, 208]

nums.forEach((x, i) => {
    nums[i] = x +3
})

//Find the average of all the numbers from question three
let total = 0;
for(let i=0; i<nums.length; i++){
    total += nums[i]
}
total/nums.length; 