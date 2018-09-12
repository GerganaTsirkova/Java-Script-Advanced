JS Advanced: 30.08.2018
Problem 4. Make Reservation (Advanced DOM Interaction)
You are given the following HTML code:
makeReservation.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Make Reservation</title>
    <style>
        #wrapper { margin: auto; width: 70%; color: rgb(138, 43, 226);
            font-family: Verdana, Geneva, Tahoma, sans-serif; padding: 10px;
            background-color: rgb(247, 247, 247);
            border: 2px solid rgb(138, 43, 226); }        
        #container { height: 250px; text-align: center; }        
        #extraDetails { margin-top: 10px; margin-left: 20%; width: 50%; }        
        .block { display: inline-block; vertical-align: top; padding: 10px; }        
        button { font-family: Verdana, Geneva, Tahoma, sans-serif;
            cursor: pointer; background-color: white; margin-top: 5px; }        
        button:disabled { background-color: rgb(221, 221, 221); color: white; }        
        h1, h4, h2 { text-align: center; }        
        input { float: right; margin-left: 5px; }        
        ul { display: inline; }        
        ul li { list-style-type: none; }        
        .buttonMargined { margin-left: 140px; }        
        .inputLabel { text-align: right; }        
        .preview { display: inline-block; height: 150px; width: 70%; }        
        .custom-select { display: block; margin: 0 auto; }        
        input, button, .preview, .custom-select, p { padding: 5px 15px;
            border: 1px solid rgb(138, 43, 226); font-size: inherit;
            color: rgb(138, 43, 226); }
    </style>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>
<body>
    <div id="wrapper">
        <h1>Make Reservation</h1>
        <h4>Please fill in the following information in order to proceed with your reservation:</h4>
        <div class="block">
            <div class="inputLabel">Full Name<input id="fullName"></div><br>
            <div class="inputLabel">E-mail<input id="email"></div><br>
            <div class="inputLabel">Phone Number<input id="phoneNumber"></div><br>
            <div class="inputLabel">Address<input id="address"></div><br>
            <div class="inputLabel">Postal Code<input id="postalCode"></div>
            <button class="buttonMargined" id="submit">Submit</button>
        </div>
        <div class="block">
            <label style="font-size: inherit;">Preview your information:</label><br>
            <div class="preview">
                <ul id="infoPreview">
                </ul>
            </div>
            <button class="buttonMargined" id="edit" disabled>Edit</button>
            <button id="continue" disabled>Continue</button>
        </div>
        <div id="container">
        </div>
    </div>
    <script src="solution.js"></script>
    <script>
        makeReservation('#container');
    </script>
</body>
</html>

Your Task
Here comes the most interesting task of them all! Your final assignment for the “Travel Agency” project is to finish a user interface that your colleague started working on, but was suddenly transferred to another task. The user interface takes care of making online reservations for holidays. This is where your colleague left it off: 
 
Write the missing functionality of this user interface. The functionality is divided in the following steps: 
⦁	Getting the user’s personal information
On clicking the “Submit” button the information from the input fields is listed in the “preview” section. For each input field a list item is added to the “infoPreview” unordered list. The text format and order for each list item should be the same as on the second picture below.  When the button is clicked, the input fields must be cleared and the “Submit” button must be disabled. At the same time the “Edit” button and the “Continue” button must be enabled. One can only submit information if the “Full Name” and “E-mail” input fields are not empty.  
 Picture 1

 

Picture 2
 
⦁	Previewing the user’s personal information 
This is an example for the preview section: 
 
The functionality here is the following: 
⦁	When the “Edit” button is clicked, all of the personal information of the user is loaded in the input fields from step I and both the “Edit” and “Continue” buttons are disabled while the “Submit” button is enabled again. The list items must be removed from the “infoPreview”. Your webpage must look exactly like Picture 1. 
⦁	When the “Continue” button is clicked, the three buttons (“Submit”, “Edit” and “Continue”) are disabled and the following HTML elements are generated inside of the “container” <div> element:

 
These elements add the payment methods for making reservations on the website and if implemented correctly look like this:
 
IMPORTANT: You must add the html elements as they are given to you: together with their properties!!!
⦁	Adding payment methods
On changing the select option from the “paymentOptions” <select> that was created in step II different HMTL elements must be dynamically created inside of the “extraDetails” <div> element, which was also created in the previous step.  
⦁	When the “Credit Card” option is selected: 
 
When the credit card option is selected the user must see three input fields for adding the credit card’s details and a “Check Out” button. The “extraDetails” <div> must contain the following:
 
⦁	When the “Bank Transfer” option is selected:
 
When the bank transfer option is selected the user must see the bank account number he/she should transfer the money to. There must also be a “Check Out” button. The “extraDetails” <div> must contain the following:
See the picture below
 
⦁	Finishing the reservation 
On clicking the “Check Out” button the reservation is completed. For you, this means removing everything inside of the “wrapper” <div> and adding there only a “Thank you” message: 
 
       This is everything your webpage must contain at this step:
 






