JS Advanced: Exam 18.11.2018
Problem 1. Form Acceptance
Use the index.html and app.js files to solve this problem.
Note: You can't and you have no permission to change directly the given html code (index.html file).
Your Task
Write the missing JavaScript code to make the Acceptance form work as expected.
When all fields (company, product, quantity and scrape) are filled with correct input.
- Company and product needs to be non-empty strings.
- Quantity and scrape needs to be numbers.

Upon pressing the “Add it” button, a new stock (product) should appear in the warehouse list, 
on following format:
[{companyName}] {productName} - {productQuantity} pieces {outOfStockButton}

Keep in mind that you need to add the available quantity of the product that is not scrape. In these cases when the available product quantity is less or equal to zero (<= 0) you should not add it to the warehouse list.

If one or all fields are not filled you should do nothing!

In the cases when quantity and scrape are numbers, the quantity value always will be greater or equal to the scrape value;

The input fields should be reset when the "Add it" button is clicked! 

When the Out of stock button is clicked, the current product should be removed from the warehouse list.
Submission
Submit only your acceptance() function.








Examples
Before we accept any product:
 
Code structure before we accept any product:
 

Before we hit the “Add it” button with correct values for all of the fields:
 

When we hit the “Add It” button:
 








Code structure when we hit the “Add It” button and we added successfully a new product to the warehouse list:
 


If we hit the Out of stock button, the result and code structure needs to be like the examples into the beginning (before we add this product to the warehouse list) === The div that contain the clicked button should be remove from the warehouse list.

GOOD LUCK… c(:
