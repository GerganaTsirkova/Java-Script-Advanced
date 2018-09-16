JS Advanced: Retake Exam 5 September 2017
Problems for exam preparation for the “JavaScript Advanced” course @ SoftUni. Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/756/.
Problem 1. Sort Table (Simple DOM Interaction)
You are given the following HTML code:
sort-table.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sort Table</title>
  <style>
    body {
      padding: 30px;
    }
    table {
      border: 1px solid black;
      border-collapse: collapse;
    }
    th, td {
      padding: 5px 20px;
    }
    th {
      background: #cccccc;
    }
    tr:nth-child(odd) {
      background: #eeeeee;
    }
    tr:nth-child(even) {
      background: #dddddd;
    }
    a {
      color: black;
      text-decoration: none;
    }
    a:hover {
      color: white;
    }
    .active {
      color: #99ff99;
    }
  </style>
  <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
</head>
<body>

<h1>Sort Table</h1>
<table id="products">
  <thead>
  <tr>
    <th>Name <a href="javascript:sort(0, false)">&#x25B2;</a> <a href="javascript:sort(0, true)">&#x25BC;</a></th>
    <th>Price <a href="javascript:sort(1, false)">&#x25B2;</a> <a href="javascript:sort(1, true)">&#x25BC;</a></th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Potatoes</td>
    <td>0.89</td>
  </tr>
  <tr>
    <td>Tomatoes</td>
    <td>2.30</td>
  </tr>
  <tr>
    <td>Bananas</td>
    <td>1.79</td>
  </tr>
  </tbody>
</table>

<script>
function sort(colIndex, descending) {
  //TODO: 
}
</script>

</body>
</html>
Your Task
Write the missing JavaScript function sort(), that sorts the table depending on the passed in arguments. The table will always have two columns, first column is a string (name of a product) and the second a number (price of a product). The first parameter is the column index which is either 0 or 1 (name column or price column), the second parameter is a Boolean variable which indicates whether the sorting is descending or ascending. 
⦁	Depending on the pressed button the sorting is either ascending or descending.
⦁	There are four buttons and each column has two.
You should not attach event listeners to the buttons, they have already been configured (see the HTML skeleton).
Submission
Submit only your sort function.

Scroll down for examples.

Examples
 
Ascending by name	 
Descending by name
 
Ascending by price	 
Descending by price
