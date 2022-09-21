// String Literal Type - only accepts the specified string else give CTE
let click:'click';
click = 'click' // valid
// click = 'dbclick' // invalid CTE
console.log(click)

var mouseEvent: 'mousemove'|'mouseup'|'mousedown'|'dblclick'; 
mouseEvent = 'mousedown'
mouseEvent = 'mouseup'
// mouseEvent = 'mouseover' // invalid CTE

// for improvement we can create aliasing 
type MyMouseEvent = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let myMouseEvent: MyMouseEvent;
myMouseEvent = 'click'; // valid
myMouseEvent = 'dblclick'; // valid
myMouseEvent = 'mouseup'; // valid
myMouseEvent = 'mousedown'; // valid
// myMouseEvent = 'mouseover'; // invalid CTE
console.log(myMouseEvent)
let anotherEvent: MouseEvent;