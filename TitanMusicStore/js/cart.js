function addToCart() {
    'use strict';
    var checkItems = document.querySelectorAll('input[type="checkbox"]');
    var itemsChecked = [];
    for (var i = 0; i < checkItems.length; i++) {
        var match = false;
        if (checkItems[i].checked == true) {
            if (cart.length == 0) {
                cart.push({ album: checkItems[i].value, quantity: 1, price: checkItems[i].name });
                itemsChecked.push(checkItems[i].value);
            } else {
                for (var p = 0; p < cart.length; p++) {
                    if (checkItems[i].value == cart[p].album) {
                        match = true;
                        break;
                    } else {
                        match = false;
                    }
                }
                if (match == false) {
                    cart.push({ album: checkItems[i].value, quantity: 1, price: checkItems[i].name });
                    itemsChecked.push(checkItems[i].value);
                } else {
                    cart[p].quantity++;
                    itemsChecked.push(checkItems[i].value);
                }
            }
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
    'use strict';
    var checkItems = document.querySelectorAll('input[type="checkbox"]');
    var itemsChecked = [];
    for (var i = 0; i < checkItems.length; i++) {
        if (checkItems[i].checked == true) {
            var index = cart.indexOf(i);
            cart.splice(i, 1);
            itemsChecked.push(checkItems[i].value);
        }
    }
    var result = '<p>You removed ' + itemsChecked.length + ' from your cart!</p>';
    var output = document.getElementById('output');
    output.innerHTML = result;
    var outputLink = document.getElementById('cartText');
    var cartText = '<a href = "#" id="cartLink">Cart (' + cart.length + ')</a>';
    outputLink.innerHTML = cartText;
    U.addEvent(U.$('cartLink').onclick = getItems);
    return false;
}
function getItems() {
    'use strict';
	var result = '<p>You have ' + cart.length + ' items in your cart!</p>';
	cart.sort();
	for (var i = 0; i< cart.length;i++)
	{
	    result += '<input type="checkbox" name="result" value="' + cart[i].album + '"/>' + cart[i].album + '&nbsp;&nbsp;Price:' + cart[i].price+'</br>';
	}
	result += '<input type="submit" name="delete" value="Delete Record" id="delete">&nbsp;&nbsp;' 
        + '<input type="submit" name="checkout" value="Check-Out" id="checkout">';
	var output = document.getElementById('output');
	output.innerHTML = result;
	U.addEvent(U.$('delete').onclick = removeFromCart);
	U.addEvent(U.$('checkout').onclick = checkout);
	return false;
}
function checkout() {
    'use strict';
    cart.sort();
    var result = '';
    var grossPrice = 0;
    var tax = .07;
    var taxAmount;
    var finalPrice;
    var quantity;
    var price;
    result += '<table border="1"><tr><td>Album</td><td>Price</td><td>Quantity</td></tr>';
    for (var i = 0; i < cart.length; i++) {
        quantity = cart[i].quantity;
        result += '<tr><td>' + cart[i].album + '</td><td>' + cart[i].price + '</td><td><input type="text" name="' + cart[i].album + '"value="' + quantity + '" id="quantity" size="3" maxlength="2"></td></tr>';
        price = cart[i].price;
        grossPrice += quantity * price;
    }
    taxAmount = grossPrice * tax;
    finalPrice = grossPrice + tax;
    result += '<tr><td></td><td>Tax</td><td>' + taxAmount.toFixed(2) + '</td></tr>';
    result += '<tr><td><input type="submit" name="update" id="update" value="Update"></td><td>Total</td><td>' + finalPrice.toFixed(2) + '</td></tr>';
    result += '</table>';
    result += 'Name: <input type="text" id="name"></br> Address: <input type="text" id="address"></br>Credit Card number: <input type="text" id="cc"></br> Email: <input type="text" id="email"></br> Phone: <input type="text" id="phone">';
    result += '<input type="submit" value="Purchase" id="purchase">'
    var output = document.getElementById('output');
    output.innerHTML = result;
    U.addEvent(U.$('update').onclick = update);
    U.addEvent(U.$('purchase').onclick = purchase);
    return false;
}
function purchase() {
    'use strict';
    var pattern = /[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/gi;
    if (pattern.test(document.getElementById('phone').value)) {
        for (var i = 0; i < cart.length; i++) {
            cart.splice(i, 1);
        }
        var result = 'Thank you for your purchase!'
        var output = document.getElementById('output');
        output.innerHTML = result;
        var outputLink = document.getElementById('cartText');
        var cartText = '';
        outputLink.innerHTML = cartText;
    } else {
        alert('Please enter a valid phone number. 123-456-7890');
    }
    return false;
}
function update() {
    'use strict';
    var checkItems = document.querySelectorAll('input[id="quantity"]');
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].album == checkItems[i].name) {
            checkItems[i].value;
            cart[i].quantity = checkItems[i].value;
        }
    }
    var result = '<p>You updated the items in your cart.</p></br>';
    result += '<input type="submit" name="checkout" value="Check Out" id="checkout">';
    var output = document.getElementById('output');
    output.innerHTML = result;
    U.addEvent(U.$('checkout').onclick = checkout);
    return false;
}
var cart = [];

