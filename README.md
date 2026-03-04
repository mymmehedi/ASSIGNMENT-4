### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

--getElementById = it take the element with his id.
--getElementByClassName = it take the every element with who use the same class name.
--querySelector = it take the first matching element with the class name.
--querySelector = it take the evey matching element with the class name.

### 2. How do you create and insert a new element into the DOM?

--create and insert a new element into the DOM==>
get a name and get the document than use createElement. const a = document.createElement("div");\
than, a.textContent = "something";
document.body.appendChild(a);

### 3. What is Event Bubbling? And how does it work?

--event bubbling have parent and child, it bubbles up its parent. when someone click any button in a website then the parent event run then it come to the body after that html run.

### 4. What is Event Delegation in JavaScript? Why is it useful?

--adding one event to parent. it make less memory usage.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

--preventDefault() = it stops the browser to action.
--stopPropagation() = it stops the event bubbling.
