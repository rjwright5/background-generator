var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));
var gradiantText = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradiantBackground');

// initial CSS linear gradiant on page load
var initialBackground = gradiantText.innerHTML='linear-gradient(to right, ' 
	+ color1.value 
	+ ', ' 
	+ color2.value 
	+ ')';
// apply initial gradiant to background 
body.style.background = initialBackground;

// function that sets the background's linear-gradiant
// to the user's input
function setGradiant() {
	body.style.background = 
	'linear-gradient(to right, ' 
	+ color1.value 
	+ ', ' 
	+ color2.value 
	+ ')';
	// apply background gradiant to the gradiantText
	gradiantText.textContent = body.style.background + ';';
}

// listen for the user's input on the color inputs,
// then call the the setGradiant function to apply
// those colors to the background's linear-gradiant
color1.addEventListener('input', setGradiant);
color2.addEventListener('input', setGradiant);