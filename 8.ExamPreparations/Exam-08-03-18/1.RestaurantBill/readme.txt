JS Advanced: Exam 18 March 2018
Problems for exam preparation for the “JavaScript Advanced” course @ SoftUni. Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/974/.
Problem 1. Restaurant Bill (Simple DOM Interaction)
You are given the following HTML code:
restaurant-bill.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Restaurant Bill</title>
  <style>
    body {padding: 30px;}
    table, section {border: 1px solid black; border-collapse: collapse;}
    th, td {padding: 5px 20px;}
    th, tfoot td {background: #cccccc;}
    tr:nth-child(odd) {background: #eeeeee;}
    tr:nth-child(even) {background: #dddddd;}
    tfoot > tr td {font-style: italic; font-weight: bold;}
    section {margin-top: 10px; width: 177px; background: #cccccc;}
    section > * {display: block; padding: 5px;}
    h3 {margin: 0; text-align: center;}
    button {margin: 5px auto;}
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>
<body>
<h2>Restaurant Bill</h2>
<table id="bill">
  <thead>
  <tr>
    <th>Product</th>
    <th>Price</th>
  </tr>
  </thead>
  <tbody id="product-list"></tbody>
  <tfoot>
  <tr>
    <td>Total:</td>
    <td>0.00</td>
  </tr>
  </tfoot>
</table>
<section id="add-product">
  <h3>Add new product</h3>
    <label>Product:
      <input type="text">
    </label>
    <label>Price:
      <input type="number">
    </label>
    <button onclick="addProduct()">Add</button>
</section>

<script>
  function addProduct() {
    // TODO
  }
</script>

</body>
</html>
Your Task
Write the missing JavaScript function addProduct() to make the [Add] button work as expected – when clicked adds the new product’s information to the restaurant bill. The [Add] button should:
?	Append the text received from the input boxes as a new row at the end of the table’s body
?	Add the new product’s price to the total sum
?	Clear the input boxes after the product’s information is submitted 
?	Do nothing if either of text boxes is empty 
Submission
Submit only your addProduct function.

Scroll down for examples.

Examples
First example:
 
 
Scroll down for more examples.








Second example:
 
 
