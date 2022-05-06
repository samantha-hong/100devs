//Create a mouse object that has four properties and three methods

let mouse = {}

mouse.brand = 'Logitech';
mouse.color = 'rainbow';
mouse.design = 'slim';
mouse.type = 'wireless';

mouse.rightClick = function () {
    console.log('right click!')
}

mouse.leftClick = function () {
    console.log('left click!')
}

mouse.scroll = function() {
    console.log('scrolling!')
}