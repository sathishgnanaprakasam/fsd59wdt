Interview questions in JavaScript (Basics to Advanced):

1. What is a closure? and how do you use it?

- A closure is a function that has access to the outer function's variables.
- A closure is created when the inner function is returned from the outer function.
- A closure has access to the outer function's variables even after the outer function has returned.

2. What are higher-order functions?

- Higher-order functions are functions that take other functions as arguments or return functions.
- Examples: map, filter, reduce, sort, closures, callbacks, promises, async/await, etc.

3. What is hoisting in JavaScript?

- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
- var variables are hoisted but not initialized.
- let and const variables are not hoisted.
- named function declarations are hoisted but not function expressions (nameless functions or anonymous functions or arrow functions).

4. var vs let vs const?

var:

- var is a old way of declaring variables in JavaScript.
- var allows re-declaration and update.
- var is function-scoped.

let:

- let is a new way of declaring variables in JavaScript (introduced in ES6 (2015)).
- let does not allow re-declaration but allows update.
- let is block-scoped.

const:

- let is a new way of declaring variables in JavaScript (introduced in ES6 (2015)).
- const does not allow re-declaration and update.
- const is block-scoped.

scope: scope tells where the variable is accessible in the code.

block scope: a block is a code between curly braces `{}`.
function scope: a function is a block of code that can be called by name.

5. what is IIFE?

- IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

6. What are callbacks?

- A callback is a function that is passed as an argument to another function.

7. What is a promise?

- A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

8. what is a prototype in JavaScript?

- A prototype is a template object.
- We can create multiple objects using a prototype.
- each prototype can have its own properties and methods.

9. What is the difference between == and ===?

- == is an equality operator that compares two values for equality, but it performs type coercion before comparison.
- === is a strict equality operator that compares two values for equality without performing type coercion.

```javascript
console.log(1 == "1"); // true
console.log(1 === "1"); // false
```

10. What is the difference between null and undefined?

- null is an assignment value that represents no value.
- undefined is a variable that has been declared but not assigned a value.

```javascript
let a;
console.log(a); // undefined
let b = null;
console.log(b); // null
```

11. explain the event loop in JavaScript?

- The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations.
- The event loop is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

12. what is the difference between call, apply, and bind?

- call, apply, and bind are methods used to set the value of this in a function.
- call: calls a function with a given this value and arguments provided individually.
- apply: calls a function with a given this value and arguments provided as an array.
- bind: returns a new function that, when called, has its this keyword set to the provided value.

Examples:

```javascript
const person = {
  name: "John",
  age: 30,
};

function greet(message) {
  console.log(`${message}, ${this.name}`);
}

greet.call(person, "Hello"); // Hello, John
greet.apply(person, ["Hello"]); // Hello, John
const greetPerson = greet.bind(person);
greetPerson("Hello"); // Hello, John
```

13. How does async/await work?

- async/await is a new way to write asynchronous code in JavaScript.
- async: is used to declare an asynchronous function that returns a promise.
- await: is used to pause the execution of the async function until the promise is resolved.

14. Shallow copy vs Deep copy?

- Shallow copy: creates a new object and copies the values of the original object to the new object.
- Deep copy: creates a new object and recursively copies the values of the original object to the new object.

Examples:

```javascript
// Shallow copy
const numbers = [1, 2, 3];
const copyNumbers = [...numbers];
console.log(copyNumbers); // [1, 2, 3]

// Deep copy
const numbers1 = [1, 2, 3];
const deepCopyNumbers = JSON.parse(JSON.stringify(numbers1));
console.log(deepCopyNumbers); // [1, 2, 3]
```

Interview Questions in HTML and CSS (Basics to Advanced):

1. What is the difference between HTML and HTML5?

- HTML (HyperText Markup Language) is the standard markup language for creating web pages.
- HTML5 is the latest version of HTML with new elements, attributes, and APIs.

2. What is the difference between div and span?

- div is a block-level element that is used to group elements and create sections in a web page.
- span is an inline element that is used to style a part of the text or a line of text.

3. What is the difference between margin and padding?

- margin is the space outside the border of an element.
- padding is the space inside the border of an element.

4. What is the box model in CSS?

- The box model is a design concept used in CSS to create a box around an HTML element.
- The box model consists of content, padding, border, and margin.

5. what is the purpose of the `data-*` attribute in HTML?

- The `data-*` attribute is used to store custom data in an HTML element.
- The `data-*` attribute can be accessed using JavaScript.

6. How to make a website accessible?

- Use semantic HTML elements.
- Provide alt text for images.
- Use proper heading tags.
- Use ARIA roles and attributes.
- Use proper color contrast.
- Provide keyboard navigation.
- Use descriptive link text.
- Test with screen readers.

7. What is the difference between inline and inline-block?

- inline elements do not start on a new line and only take up as much width as necessary.
- inline-block elements do not start on a new line but can have a width and height.

8. What is the difference between `display: none` and `visibility: hidden`?

- `display: none` hides the element and removes it from the layout.
- `visibility: hidden` hides the element but still takes up space in the layout.

9. What is the difference between `position: relative`, `position: absolute`, and `position: fixed`?

- `position: relative` positions the element relative to its normal position.
- `position: absolute` positions the element relative to its nearest positioned ancestor.
- `position: fixed` positions the element relative to the viewport.

10. What is the difference between `float` and `clear`?

- `float` is used to position an element to the left or right of its container.
- `clear` is used to prevent elements from wrapping around a floated element.

11. What is the difference between `em` and `rem`?

- `em` is a relative unit of measurement that is based on the font size of the parent element.
- `rem` is a relative unit of measurement that is based on the font size of the root element (html).

12. How do you center an element horizontally and vertically in CSS?

- To center an element horizontally, you can use `margin: 0 auto;`.
- To center an element vertically, you can use `position: absolute; top: 50%; transform: translateY(-50%);`.

13. What is the difference between `flexbox` and `grid`?

- `flexbox` is a one-dimensional layout model that is used for laying out items in a row or a column.
- `grid` is a two-dimensional layout model that is used for laying out items in rows and columns.

14. What is the difference between `@media` and `@import` in CSS?

- `@media` is used to apply styles based on the media type or media features of the device.
- `@import` is used to import an external style sheet into another style sheet.

15. what are pseudo-classes and pseudo-elements in CSS?

- Pseudo-classes are used to define the special state of an element.
- Pseudo-elements are used to style a specific part of an element.

Examples:

```css
/* Pseudo-class */
a:hover {
  color: red;
}

/* Pseudo-element */
p::first-line {
  font-weight: bold;
}
```

16. Explain the concept of CSS specificity?

- CSS specificity is a set of rules that determines which style is applied to an element.
- The more specific a selector is, the higher its specificity.
- The order of specificity is: inline styles, IDs, classes, attributes, pseudo-classes, and elements.

17. how do you handle browser compatibility issues in CSS?

- Use vendor prefixes for CSS properties.
- Use feature detection libraries like Modernizr.
- Use CSS resets or normalize.css.
- Use polyfills for missing features.

18. how do you optimize the performance of a website?

- Minify CSS, JavaScript, and HTML.
- Optimize images (preferably use SVG or WebP format).
- Use lazy loading for images and videos.
- Use a content delivery network (CDN).
- Reduce server response time.
- Use browser caching.
- Use asynchronous loading for CSS and JavaScript.
