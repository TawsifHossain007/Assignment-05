Ans-1,

Difference Between getElementById, getElementsByClassName is that we get only one element when we call it by id. Because normally id is a unique thing for an element meaning one id is for only one element in the code. But when we use getElementByClassName we can get as many numbers of elements having that class. Its mostly used to do a common thing for several destinations or execute things.

Difference between querySelector / querySelectorAll is that querySelector only takes the first element with that id or class. And querySelectorAll returns every element that has the class.

Ans-2,

To create a new element we use the document.createElement() function and after finishing the work with inner text or inner html we simply append it to a div/section or anywhere using the containers class or id name with .append().

Ans-3,

Event Bubbling is a functionality where, when a function is added to an element it will complete that and the bubble its way up to find the parent element of that element and then goes up and up the DOM tree. It allows to perform any event on its descendant elements.

Ans-4,

Its a functionality that allows to use a eventlistener for the parent element and then work with the child elements later without adding individual event listeners for them. Its connected with the concept of Event Bubbling.

Ans-5,

 preventDefault() method prevents the browsers default action for a specific event from occurring. and the stopPropagation() method stops the event from going upp in the DOM tree (Bubbling).