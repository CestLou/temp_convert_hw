/*Create a single page using bootstrap that contains an `<input>` field, a `<button>`
 and a `<div>`. Convert the temperature from F to C using the formula we created earlier 
 this week.*/


document.addEventListener('DOMContentLoaded', function(){
	document.querySelector('.btn').addEventListener('click', function(){
		//if statement for radio buttons go here
		var input = document.querySelector("#inputToConvert").value;
		
		var output = calculateC(input);
		// var tempC = ((tempF - 32) * (5 / 9)).toFixed(0);

		document.querySelector("h2").innerText = input + "\xb0F is equal to " + output + "\xB0C"
		});
});


var calculateC = function(input) {
	return ((input - 32) * (5 / 9)).toFixed(0);
}

var calculateF = function(input) {
	return ((input + 32) * (9 / 5)).toFixed(0);
	// i think
}