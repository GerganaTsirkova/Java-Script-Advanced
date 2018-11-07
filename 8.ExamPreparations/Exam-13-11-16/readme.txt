JS Advanced: Exam 13 November 2016
Problems for exam preparation for the “JavaScript Advanced” course @ SoftUni. Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/355/.
Problem 4. Cards (Object Interacting with DOM)
You are given the following HTML code (with CSS styles), intended to draw a deck of cards:
<!DOCTYPE html>
<html>
<head>
    <title>Cards</title>
    <style>
        div.card {
            display: inline-block; padding: 10px; margin: 10px;
            width: 50px; height: 80px; background: #EEE;
            border: 3px solid #DDD; border-radius: 5px;
            font-size: 18pt; text-align: center; line-height: 75px;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
</head>
<body>
<div id="main"></div>
<script>
    function cardDeckBuilder(selector) {
        // TODO: return the card builder
    }
</script>
<script>
    $(function() {
        let builder = cardDeckBuilder("#main");
        builder.addCard("10", "D");
        builder.addCard("K", "S");
        builder.addCard("Q", "H");
        builder.addCard("4", "C");
    });
</script>
</body>
</html>
The function cardDeckBuilder(selector) takes as input a DOM selector (string) and returns an object holding a function addCard(face, suit). It appends the specified card into the DOM as a DIV element:
 
⦁	The card face is one of the following: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A.
⦁	The card suit is one of the following: C (clubs – ♣), D (diamonds – ♦), H (hearts – ♥), S (spades – ♠).
Implement a “reverse cards” functionality: when any of the cards is clicked, their order in the DOM should be reversed (reordered in the DOM tree in reverse order – from the last to the first).
Your task is to write the body of the cardDeckBuilder(selector) function to get the above page working as expected (see the screenshots). Do not modify the HTML code and CSS styles, just write the missing JS function.
Constraint
⦁	The card faces and suits will always be valid.
Examples
When the missing JS function cardDeckBuilder(selector) is implemented correctly, the page should look as follows (after the page loading is completed):
 
When any of the cards (<div class="card">…</div>) is clicked, all the cards should be reversed:
 
Hints
You may use the following Unicode characters for the card suites:
\u2663  ♣	\u2666  ♦	\u2665  ♥	\u2660  ♠
Submission
Submit your cardDeckBuilder(selector) function as “JavaScript code (DOM unit tests)”.