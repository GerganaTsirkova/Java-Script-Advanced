JS Advanced: Exam 18.11.2018
Problem 4. Real Estate Agency
Write a JavaScript program that registers and finds a real estate offers based on a given criteria.
Use the index.html and app.js files to solve this problem.
Note: You can't and you have no permission to change directly the given html code (index.html file).
Submission
You should submit only the app.js file
Expected functionality:
Reg offer field:
Rent price and commission rate should be numbers. Rent price must be positive number (greater than zero (0)). Commission rate should be greater or equal to zero (0) and lower or equal to one hundred (100). Apartment type should be non-empty string and should not contain ':' character.
If some of these conditions or all of them are not met, you should print the following message: 'Your offer registration went wrong, try again.'
If all is good you should 'post' the new offer on the agency and print the following message: 'Your offer was created successfully.'
After every click on the Reg Offer button (no matter of the result) the three fields (Rent price, Apartment type and Commission rate) must be cleared.









Reg offer Example:
 
Reg offer Result:
When we click the Reg offer button, the result should be...
 
Successfully created, because every condition are met.
Reg offer Example 2
 
Example 2 Result:
When we click the Reg offer button, the result should be...
 
We do not create the new offer because one or all of the conditions are not met!
Code structure before create the new offer:
 
Code structure after we create the new offer:
 
Code structure if reg offer went wrong:
 
Find offer field:
Family budget must be positive number (greater than zero (0)). Apartment type and Family name should be non-empty strings.
If all is good you should start searching through all registered offers into the agency. The first offer that meets the requirements, namely:
- The type of apartment you are looking for is absolutely the same as the registered one.
- The family budget needs to be enough to take the current apartment: rent + commission in percent of the current rental of the apartment.
Is leased! That means you should change the current apartment content and print the following message: 'Enjoy your new home! :))'.
Also on every successfully found offer, the real estate agency, take the current commission from both sides.

Example:
We find successfully two room apartment with 500 rent price and the commission for it is 50%. Current family needs to have at least 750 to take that offer (500 rent and 250 commission). If they do, the agency takes this 50% from the current family and 50% more from the other side (the owner of the apartment).
Note:
The agency's profit is for all successfully found offers. The h1 element into the #roof which contains the sentence `Agency profit: {profit} lv.` Shows the total profit for all offers.
If some of these conditions or all of them are not met, you should print the following message: 'We were unable to find you a home, so sorry :('
After every click on the Find Offer button (no matter of the result) the three fields (Family budget, Apartment type and Family name) must be cleared.
Find offer Example:
 


Find offer Example Result:
When we click the Find offer button, the result should be...
 
Successfully finded and rented out, because every condition are met.
Find Offer Example Result Code Structure:
 
MoveOut Example:
 

MoveOut Result:
In this case if we click on the PESHEVI's MoveOut button, the whole apartment must be removed. And you should print the following message: 
'They had found cockroaches in {familyName}\'s apartment'
 
We removed successfully the whole PESHEVI's apartment because of the cockroaches..
MoveOut Example Result code structure:
 
GOOD LUCK… C(: