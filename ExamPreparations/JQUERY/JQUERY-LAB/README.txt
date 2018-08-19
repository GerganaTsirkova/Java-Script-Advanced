Lab: jQuery
Problems for exercises and homework for the “JavaScript Advanced” course @ SoftUni. Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/329.
⦁	Text from List
A HTML page holding a list of items and an [Extract Text] button is given. Implement the extractText function which will be called when the button's onClick event is fired.
HTML and JavaScript Code
You are given the following HTML code:
text.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Text from List</title>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
    <script src="extractText.js"></script>
</head>
<body>
    <ul id="items">
        <li>first item</li>
        <li>second item</li>
        <li>third item</li>
    </ul>
    <button onclick="extractText()">
Extract Text</button>
    <div id="result"></div>
</body>
</html>
It comes together with the following JavaScript code:
extract-text.js
function extractText() {
    // TODO
}
Screenshot
   
⦁	Search in List
An HTML page holds a list of towns, a search box and a [Search] button. Implement the search function to bold the items from the list which include the text from the search box. Also print the amount of items the current search matches in the format "<matches> matches found."
HTML and JavaScript Code
You are given the following HTML code:
list.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Search in List</title>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
    <script src="search.js"></script>
</head>
<body>
<ul id="towns">
    <li>Sofia</li>
    <li>Pleven</li>
    <li>Varna</li>
    <li>Plovdiv</li>
</ul>
<input type="text" id="searchText" />
<button onclick="search()">Search</button>
<div id="result"></div>
</body>
</html>
It comes together with the following JavaScript code:
search.js
function search() {
    // TODO
}
Screenshots
   
⦁	Countries Table
You are given and HTML table holding countries and their capitals. You need to implement a [Create] link to create a new country and for each existing country implement [Up], [Down] and [Delete] links to manipulate its position in the table.
The table needs to have the following entries when it’s initialized (add them when your functions starts):
Bulgaria, Sofia
Germany, Berlin
Russia, Moscow
HTML and JavaScript Code
You are given the following HTML code:
countries.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Countries Table</title>
    <style>
        td, th { background: #DDD; padding: 5px 10px }
        input[type='text'] { width: 60px }
        a { margin-left: 5px }
    </style>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
    <script src="initialize-table.js"></script>
</head>
<body>
<table id="countriesTable">
    <tr>
        <th>Country</th>
        <th>Capital</th>
        <th>Action</th>
    </tr>
    <tr>
        <td><input type="text" id="newCountryText" /></td>
        <td><input type="text" id="newCapitalText" /></td>
        <td><a href="#" id="createLink">[Create]</a></td>
    </tr>
</table>
<script>$(() => initializeTable())</script>
</body>
</html>
It comes together with the following JavaScript code:
initialize-table.js
function initializeTable() {
    // TODO
}
Screenshots
 
⦁	Link Buttons
You are given HTML holding some buttons. Implement the attachEvents function which should attach click events on the buttons. When a button is clicked it should remove the class="selected" attribute from the button that currently holds it and add it to its own attributes. 
HTML, CSS and JavaScript Code
You are given the following HTML code:
buttons.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="link-buttons.css" />
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="link-buttons.js"></script>
</head>
<body onload="attachEvents()">
    <a class="button">Sofia</a>
    <a class="button">Plovdiv</a>
    <a class="button">Varna</a>
</body>
</html>
It comes with this CSS:
link-buttons.css
a.button {
    border: 1px solid #CCC;
    background: #EEE;
    padding: 5px 10px;
    border-radius: 5px;
    color: #333;
    text-decoration: none;
    display: inline-block;
    margin: 5px;
}

a.button.selected {
    color: #111;
    font-weight: bold;
    border: 1px solid #AAA;
    background: #BBB;
}

a.button.selected::before {
    content: "\2713\20\20";
}

a:hover {
    cursor: pointer;
}
and the following JavaScript code:
link-buttons.js
function attachEvents() {
    // TODO
}
Screenshots
 
Hints
⦁	Use the attachEventListener function.
⦁	Selectable Towns
Create an HTML page listing towns, a town should be selectable. Clicking on a town should select/deselect it, a selected town should have the data-selected attribute added to it and its background color should be changed to #DDD. Also create a button [Show Towns] that prints the text "Selected towns: " followed by all selected towns joined with a ", ".
HTML and JavaScript Code
You are given the following HTML code:
towns.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Selectable Towns</title>
    <style>
        li {
            display: inline-block;
            cursor: pointer;
            padding: 10px;
        }
        ul { padding:0; }
    </style>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="select-towns.js"></script>
</head>
<body>
<h2>Towns</h2>
<ul id="items">
    <li>Sofia</li>
    <li>Varna</li>
    <li>Plovdiv</li>
    <li>Bourgas</li>
    <li>Rousse</li>
</ul>
<button id="showTownsButton">Show Towns</button>
<div id="selectedTowns"></div>
<script>$(attachEvents())</script>
</body>
</html>
It comes together with the following JavaScript code:
select-towns.js
function attachEvents() {
    // TODO
}
Screenshots
 