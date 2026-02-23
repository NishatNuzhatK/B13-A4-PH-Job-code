# Answers to Questions
## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:

The difference between between getElementById, getElementsByClassName, and querySelector / querySelectorAll Is –
getElementById selects on element by it’s unique id name.
 getElementsByClassName selects elements by their specific class name. 
querySelector selects the first element with a specific css selector and and querySelector / querySelectorAll selects all the elements with a specific css selector.

## 2. How do you create and insert a new element into the DOM?

Ans:
To create a new element we have to use the createElement() method. For example-
const div = document.createElement(‘div’);
Then we have to append this new element to another parent element in order to insert it into the DOM. For this we have to use the append() method. For example-
cards.append(div);

## 3. What is Event Bubbling? And how does it work?
Ans:
Event bubbling is a mechanism in javascript where when a event is triggered on a target element it goes upward to it’s parent elements. When an event is clicked on the child element  first it’s event handler is executed and then the event goes upward to it’s parent element and this goes on until it reaches the root element. 
For example,
<div id = "parent">
    <button id ="child">Log in</button>
  </div>
Here when the button is clicked event is triggered and then it bubbles up to it’s parent element and it continues to going upward until it reaches the root element. 

## 4. What is Event Delegation in JavaScript? Why is it useful?
Ans:
Event delegation is a mechanism in javascript where instead of giving event handler to multiple child element the event handler is given only to the parent element. So when an event is triggered we can know which child element’s event is being triggered. 
Event delegation is very helpful because now we can add just one event listener to the parent element and we don’t have to add multiple event listener for multiple child elements, which makes it easier to handle the code more efficiently. 

## 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault() method stops the default action of an element. For example, when we click an anchor tag, it will open a new page. But preventDefault() stops this default action of the anchor tag.
stopPropagation() method stops a child element to propagate upward it’s parent element during event bubbling. When an event is triggered, if stopPropagation() is written inside the code then it will prevent the event to going upward it’s parent element.

