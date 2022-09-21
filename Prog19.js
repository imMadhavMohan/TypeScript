// String Literal Type - only accepts the specified string else give CTE
var click;
click = 'click'; // valid
// click = 'dbclick' // invalid CTE
console.log(click);
var mouseEvent;
mouseEvent = 'mousedown';
mouseEvent = 'mouseup';
var myMouseEvent;
myMouseEvent = 'click'; // valid
myMouseEvent = 'dblclick'; // valid
myMouseEvent = 'mouseup'; // valid
myMouseEvent = 'mousedown'; // valid
// myMouseEvent = 'mouseover'; // invalid CTE
console.log(myMouseEvent);
var anotherEvent;
