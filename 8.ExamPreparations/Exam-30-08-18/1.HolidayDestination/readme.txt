JS Advanced: Exam TODO 2018
Problem 1. Holiday Destinations (Simple DOM Interaction)
You are given the following HTML code:
holidayDestinations.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Holiday Destinations</title>
    <style>
        #wrapper { margin: auto; width: 50%; border: 2px solid rgb(138, 43, 226);
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            background-color: rgb(247, 247, 247); color: rgb(138, 43, 226); }        
        #input, #summaryBox { margin: auto; width: 90%; }        
        .custom-select, .button {font-family: Verdana, Geneva, Tahoma, sans-serif;}        
        .button { cursor: pointer; background-color: white; }        
        .summary { width: 40px; }        
        .inputData { width: 70px; }        
        h1, h3 { text-align: center; }        
        table { margin: 0 auto; width: 75%; }        
        table, th, td { border: 1px solid rgb(138, 43, 226); }        
        input, .custom-select, .button { border: 1px solid rgb(138, 43, 226);
            color: rgb(138, 43, 226); padding: 5px 15px; }
    </style>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="solution.js"></script>
</head>
<body>
    <div id="wrapper">
        <h1>Holiday Destinations</h1>
        <div id="input">
            <label>City:</label> <input class="inputData" type="text">
            <label>Country:</label> <input class="inputData" type="text">
            <label>Season:</label>
            <select id="seasons" class="custom-select">
                    <option value="summer">Summer</option>
                    <option value="autumn">Autumn</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
            </select>
            <button class="button" onclick="addDestination()">Add Destination</button>
        </div> <br>        
        <table id="destinations">
            <thead>
                <tr>
                    <th>Destination</th>
                    <th>Season</th>
                </tr>
            </thead>
            <tbody id="destinationsList"></tbody>
        </table>
        <br>
        <h3>Destinations for 2018:</h3>
        <div id="summaryBox">
            <label>Summer:</label><input class="summary" id="summer" type="number"         value="0" readonly>
            <label>Autumn:</label><input class="summary" id="autumn" type="number"      value="0" readonly>
            <label>Winter:</label><input class="summary" id="winter" type="number"    value="0" readonly>
            <label>Spring:</label><input class="summary" id="spring" type="number"   value="0" readonly>
        </div>
        <br>
    </div>
</body>
</html>
Your Task
You are hired by a travel agency to help them with the digitalization of their business. Here they need you to finish the implementation of this user interface, which allows them to keep track of all of the destinations they offer holidays to.
 
Write the missing JavaScript function addDestination () to make the [Add Destination] button work as expected – when clicked adds the new destination to the table with destinations and updates the destinations per season section at the bottom. The [Add] button should:
⦁	Append the text received from the input boxes and the text of the selected season from the dropdown as a new row at the end of the table’s body. The destination name should be in the following format:
“{city}, {country}”
⦁	Update the number of destinations per season in the “summaryBox” section.
⦁	Clear the input boxes after the destination’s information is submitted.
⦁	Do nothing if either of text boxes is empty. 
Submission
Submit only your addDestination function.

Scroll down to see the examples. 
Examples
 
 



