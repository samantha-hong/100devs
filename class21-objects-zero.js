//Create a stopwatch object that has four properties and three methods
let stopwatch = {}

stopwatch.color = 'white';
stopwatch.shape = 'hexagon';
stopwatch.brand = 'nike';
stopwatch.minutes = 10;

stopwatch.start = function () {
    console.log('starting')
}

stopwatch.stop = function() {
    console.log('stopping')
}

stopwatch.sayBrand = function(){
    console.log(stopwatch.brand)
}