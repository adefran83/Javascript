function addToCart () {
	'use strict';
	var checkItems = document.querySelectorAll('input[type="checkbox"]');
	var itemsChecked = [];
	for (var i = 0; i < checkItems.length;i++){
		if (checkItems[i].checked == true){
			cart.push(checkItems[i].value);
			itemsChecked.push(checkItems[i].value);
		}
	}
	var result = '<p>You added ' + itemsChecked.length + ' to your cart!</p>';
	var output = document.getElementById('output');
	output.innerHTML = result;
	var outputLink = document.getElementById('cartText');
	var cartText = '<a href = "#" id="cartLink">Cart (' + cart.length + ')</a>';
	outputLink.innerHTML = cartText;
	U.addEvent(U.$('cartLink').onclick = getItems);
	return false;
}
function removeFromCart () {

}
function getItems() {
	var result = '<p>You have ' + cart.length + ' items in your cart!</p>';
	cart.sort();
	for (var i = 0; i< cart.length;i++)
	{
		result += '<input type="checkbox" name="result" value="'+cart[i]+'"/>'+cart[i]+'</br>';
	}
	var output = document.getElementById('output');
	output.innerHTML = result;
	return false;
}
function totalPrice() {
//multiply the quantity by price for each items then add the results
}
window.onload = function(){
	'use strict';
	U.addEvent(U.$('cartLink').onclick = getItems);
}
var cart = [];

