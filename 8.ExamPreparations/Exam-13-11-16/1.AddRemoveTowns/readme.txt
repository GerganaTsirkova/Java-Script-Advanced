JS Advanced: Exam 13 November 2016
Problems for exam preparation for the “JavaScript Advanced” course @ SoftUni. Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/355/.
Problem 1. Add / Remove Towns (Simple DOM Interaction)
You are given the following HTML code:
add-remove-towns.html
<!-- JS Advanced Exam @ SoftUni - 13-Nov-2016 -->

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add / Remove Towns</title>
    <style>select, input { width: 100px }</style>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
</head>

<body onload="attachEvents()">

<div>Towns</div>
<select id="towns" size="4">
    <option>Sofia</option>
    <option>Varna</option>
    <option>Pleven</option>
</select>

<button id="btnDelete">Delete</button>

<div>
    <input type="text" id="newItem" />
    <button id="btnAdd">Add</button>
</div>

<script>
    function attachEvents() {
        // TODO: …
    }
</script>
</body>
</html>
Your Task
Write the missing JavaScript code to make the [Add] and [Delete] buttons work as expected.
⦁	The [Add] button should append the text from the text box as a new item at the end of the list box and clear the input text box after that. If the textbox is empty, it should do nothing.
⦁	The [Delete] button should delete selected item from the list. If no item is selected, it should do nothing.
⦁	When an item is selected it has the property selected.
Examples
 
↓
 
 
↓
 
Submission
Submit your attachEvents function as “JavaScript code (DOM unit tests)”.