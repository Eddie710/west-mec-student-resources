# Javascript Event Handlers

## Table of Contents

- [Types of Event Handlers](#types)
- [Examples of Click and Mouse Event Handlers](#examples)
- [Touch Event Handler Examples](#touch-events)

## <a id="types">Types of Event Handlers </a>

## Click and Mouse Handlers

1. Click
   > Triggers an action when the user clicks on a button, link, image etc.
2. Submit
   > Handle form submissions and validate user inputs before submitting.
3. KeyDown
   > Listen for specific key press events to submit a form or trigger an event.
4. KeyUp
   > Same as KeyDown but fires when key is released.
5. MouseOver
   > Create an effect when the mouse hovers over an object.
6. MouseOut
   > Create an effect when the mouse hovers on>away from an object.
7. Change
   > Triggers an event when there is a change on an input element such as text, dropdowns,checkboxes and radio buttons.
8. Scroll
   > Detect when the user scrolls to a certain point on a web page and load additional content dynamically.
9. Resize
   > Adjusts layouts in response to the window being resized.
10. Load
    > Trigger actions when the web page finishes loading.

## Touch Handlers

11. TouchStart
    > Triggers an event when a finger is placed on the screen.
12. TouchCancel
    > Triggers an event when a touch is canceled such as moving the finger outside the bounds of the element.
13. TouchEnd
    > Triggers an event when the finger is lifted off of the screen.
14. TouchMove
    > Triggers an event when a finger moves across the touch screen.

## <a id="examples">Examples of Event Listeners </a>

1. **Click**

> _Event listener Method_

```html
<body>
  <button id="myButton">Click Me</button>
  <script>
    const button = document.querySelector('#myButton');

    button.addEventListener('click', function () {
      js.log('Button clicked!');
    });
  </script>
</body>
```

> _On Click Method_

```html
<button onclick="alert('Button clicked!')">Click me</button>
```

2. **Submit**

> _Event listener Method_

```js
const form = document.querySelector('#myForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  js.log('Form submitted!');
});
```

> _On Submit Method_

```js
const form = document.querySelector('#my-form');

form.onsubmit = function (event) {
  event.preventDefault();
  const nameInput = document.querySelector('#name-input');
  console.log(`Form submitted with name: ${nameInput.value}`);
};
```

3. **KeyDown**

> _Event listener Method_

```js
const input = document.querySelector('#myInput');

input.addEventListener('keydown', function (event) {
  js.log(`Key ${event.key} was pressed down!`);
});
```

> _On KeyDown Method_

```js
<input type="text" onkeydown="js.log('Key down!')">
```

4. **KeyUp**

> _Event listener Method_

```js
const myInput = document.querySelector('#my-input');

myInput.addEventListener('keyup', function (event) {
  console.log('Key up detected:', event.key);
});
```

- > _On KeyUp Method_

```js
<input type="text" id="my-input" onkeyup="handleKeyUp(event)">

function handleKeyUp(event) {
  console.log('Key up detected:', event.key);
}
```

5. **MouseOver**

> _Event listener Method_

```js
const image = document.querySelector('#myImage');

image.addEventListener('mouseover', function () {
  js.log('Mouse over the image!');
});
```

> _On MouseOver Method_

```js
<div onmouseover="js.log('Mouse over!')">Hover over me</div>
```

6. **MouseOut**

> _Event listener Method_

```js
const myDiv = document.querySelector('#my-div');

myDiv.addEventListener('mouseout', function (event) {
  myDiv.style.backgroundColor = 'lightblue';
});
```

> _On MouseOut Method_

```js
<div
  id='my-div'
  style='background-color: lightblue; padding: 20px;'
  onmouseout='handleMouseOut()'
>
  Hover over me!
</div>;

function handleMouseOut() {
  const myDiv = document.querySelector('#my-div');
  myDiv.style.backgroundColor = 'lightblue';
}
```

7. **Change**

> _Event listener Method_

```js
const inputElement = document.querySelector('input');

inputElement.addEventListener('change', function (event) {
  console.log('Input value changed:', event.target.value);
});
```

> _On Change Method_

```js
const inputElement = document.querySelector('input');

inputElement.onchange = function (event) {
  console.log('Input value changed:', event.target.value);
};
```

8. **Scroll**

> _Event listener Method_

```js
const myDiv = document.querySelector('#my-div');
myDiv.addEventListener('scroll', function (event) {
  console.log('Scrolled!');
});
```

> _On Scroll Method_

```js
<div
  id='my-div'
  style='height: 500px; overflow: scroll;'
  onscroll='handleScroll()'
>
  lorem ipsum...
</div>;

function handleScroll() {
  console.log('Scrolled!');
}
```

9. **Resize**

> _Event listener Method_

```js
const myDiv = document.querySelector('#my-div');
window.addEventListener('resize', function (event) {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  myDiv.textContent = `Window size: ${windowWidth} x ${windowHeight}`;
});
```

> _On Resize Method_

```js
<div
  id='my-div'
  style='background-color: lightblue; height: 100px; width: 100px;'
  onresize='handleResize()'
></div>;

function handleResize() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const myDiv = document.querySelector('#my-div');
  myDiv.textContent = `Window size: ${windowWidth} x ${windowHeight}`;
}
```

10. **Load**

> _Event listener Method_

```js
window.addEventListener('load', function () {
  js.log('Page finished loading!');
});
```

> _On Load Method_

```js
<body onload="js.log('Page loaded!')">...</body>
```

### <a id="touch-events">Touch Events </a>

11. **TouchStart**

> _Event Listener Method_

```html
<body>
  <div
    id="my-div"
    style="background-color: lightblue; height: 100px; width: 100px;"
  ></div>
</body>
<script>
  const myDiv = document.querySelector('#my-div');

  myDiv.addEventListener('touchstart', function (event) {
    myDiv.style.backgroundColor = 'red';
  });
</script>
```

> _On TouchStart Method_

```html
<body>
  <button ontouchstart="handleTouchStart(event)">Touch me</button>
  <script>
    function handleTouchStart(event) {
      // Do something when the touch start event occurs
      console.log('Touch start event occurred');
    }
  </script>
</body>
```

12. **TouchEnd**

> _Event Listener Method_

- > JS

```js
const button = document.querySelector('button');

button.addEventListener('touchend', handleTouchEnd);

function handleTouchEnd(event) {
  // Do something when the touch end event occurs
  console.log('Touch end event occurred');
}
```

> _On Touch End Method_

- > HTML + JavaScript

```html
<body>
  <div
    id="touch-me"
    style="width: 100px; height: 100px; background-color: red;"
  ></div>
  <script>
    var touchMe = document.getElementById('touch-me');
    touchMe.ontouchend = function (event) {
      console.log('Touch end detected!');
    };
  </script>
</body>
```

13. **TouchCancel**

> _Event Listener Method_

- > HTML + JavaScript

```html
<div id="touch-div">Touch this div</div>
<script>
  const touchDiv = document.getElementById('touch-div');

  touchDiv.addEventListener('touchend', () => {
    console.log('You lifted your finger from the div!');
  });
</script>
```

> _On Touch Cancel Method_

- > HTML + JavaScript

```html
<div id="touch-div" ontouchend="handleTouchEnd()">Touch this div</div>
<script>
  function handleTouchEnd() {
    console.log('You lifted your finger from the div!');
  }
</script>
```

13. **TouchMove**

> _Event Listener Method_

- > HTML + JavaScript

```html
<div id="touch-div">Move your finger over this div</div>
<script>
  const touchDiv = document.getElementById('touch-div');

  touchDiv.addEventListener('touchmove', handleTouchMove);

  function handleTouchMove() {
    console.log('You are moving your finger over the div!');
  }
</script>
```

> _On Method_

- > HTML + JavaScript

```html
<div id="touch-div" ontouchmove="handleTouchMove()">
  Move your finger over this div
</div>
<script>
  function handleTouchMove() {
    console.log('You are moving your finger over the div!');
  }
</script>
```
