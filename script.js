$(document).ready(function() {

		function getRandomColor() {
	    var letters = '0123456789ABCDEF';
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
		};

	
		function boardReset(n) {

				var sqSide = (960)/n;

				for (i = 1; i <= (n*n); i++) {
					$(".container").append("<div class='square'> </div>");
				 };

				$("div .square").css("height", sqSide);
				$("div .square").css("width", sqSide);

				$("div .square").hover(function() {
					$(this).css("background-color", getRandomColor());
				});


		};

	boardReset(16);

	
	$("button").click(function() {

		sqNb = prompt("Do you want to play again? How many squares do you want to play with (under 56 please :) )");
		$("div .square").remove();
		boardReset(sqNb); // Calling the boardResetfunction which aims to reset the board with 
		$("div .square").css("background-color", getRandomColor());

	});

});


//function resetBoard() {
// $("div .squareoff").css("background-color", getRandomColor());
// };