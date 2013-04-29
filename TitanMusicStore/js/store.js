function getAlbumsByArtist () {
	'use strict';
	var resultArray = [];
	var output = document.getElementById('output');
	var result = '';
	var artistId = document.getElementById('artistIdInput').value;
	if (artistId >= 1 && artistId <= 8) {
	    artistId = artistId - 1;
	    resultArray.push({artist:artistList[artistId].artist, album: artistList[artistId].title,price:artistList[artistId].price, quantity: 1 });
	}
	if (resultArray.length == 0)
	{
		result = 'Please enter a valid ID. A number 1-8';
	} else {
		result = '<h5>Albums from artist ID ' + (artistId + 1) + ' are:</h5>';
		resultArray.sort();
		for (var i = 0; i < resultArray.length;i++)
		{
		    result += '<input type="checkbox" name="result"  value="' + resultArray[i].album + ' By ' + resultArray[i].artist + '"/>' + resultArray[i].album + ' By ' + resultArray[i].artist + '</br>';
		}
		result+='<input type="submit" id="submit" value="Add to Cart">';
	}
	output.innerHTML = result;
	U.addEvent(U.$('cart').onsubmit = addToCart);
	return false;
}
function getAlbumsByCategory (categoryId) {
	var category = U.$('categoryInput').value;
	var resultArray = [];
	var output = document.getElementById('output');
	var result = '';
	for (var i = 0;i < categories.length;i++)
	{
		if (category == categories[i].category)
		{
			for (var p = 0;p < categories.length;p++)
			{
				if (categories[i].category == artistList[p].category)
				{
				    resultArray.push({ artist: artistList[p].artist, album: artistList[p].title, price:artistList[p].price, quantity: 1 });
				}
			}
		}
	}
	if (resultArray.length == 0)
	{
		result = 'Please enter a valid category';
	} else {
		result = '<h5>Albums from category ' + category + ' are:</h5>';
		resultArray.sort();
		for (var i = 0; i < resultArray.length;i++)
		{
		    result += '<input type="checkbox" name="'+resultArray[i].price+'" value="' + resultArray[i].album + ' By ' + resultArray[i].artist + '"/>' + resultArray[i].album + ' By ' + resultArray[i].artist + '</br>';
		}
		result += '<input type="submit" id="submit" value="Add to Cart">';
	}
	output.innerHTML = result;
	U.addEvent(U.$('cart').onsubmit = addToCart);
	return false;
}
function getAllAlbums () {
	'use strict';
	var resultArray = [];
	var output = document.getElementById('output');
	var result = '<h5>Results</h5>';
	for (var i = 0; i < artistList.length; i++) {
		if(artistList[i].quantity > 0){
		    resultArray.push({ artist: artistList[i].artist, album: artistList[i].title, price: artistList[i].price, quantity: 1 });
		}
	}
	resultArray.sort();
	for (var p = 0; p < resultArray.length;p++) {
	    result += '<input type="checkbox" name="' + resultArray[p].price + '" value="' + resultArray[p].album + ' By ' + resultArray[p].artist + '"/>' + resultArray[p].album + ' By ' + resultArray[p].artist + '</br>';
	}
	result += '<input type="submit" id="submit" value="Add to Cart">';
	output.innerHTML = result;
	U.addEvent(U.$('cart').onsubmit = addToCart);
	return false;
}
function getAllCategories() {
    'use strict';
    var resultArray = [];
	var output = document.getElementById('output');
	var result = '<h5>Results</h5><dl>';
	for (var i = 0; i < categories.length; i++) {
		result += '<dt>'+ categories[i].category +'</dt>';
		for(var p = 0; p < artistList.length; p++)
		{
			if(artistList[p].category == categories[i].category)
			{
			    if (artistList[p].quantity > 0) {
			        resultArray.push({ artist: artistList[p].artist, album: artistList[p].title, price:artistList[p].price, quantity: 1 });
			        result += '<dd><input type="checkbox" name="' + resultArray[i].price + '" value="' + artistList[p].title + ' By ' + artistList[p].artist + '"/>' + artistList[p].title + ' By ' + artistList[p].artist + '</dd>';
				}
			}
		}
	}
	result += '</dl><input type="submit" id="submit" value="Add to Cart">';
	output.innerHTML = result;
	U.addEvent(U.$('cart').onsubmit = addToCart);
	return false;
}

 window.onload = function() {
	 'use strict';
	U.addEvent(U.$('allAlbums').onsubmit = getAllAlbums);
	U.addEvent(U.$('inputForm').onsubmit = getAlbumsByArtist);
	U.addEvent(U.$('allCategories').onsubmit = getAllCategories);
	U.addEvent(U.$('albumsByCategory').onsubmit = getAlbumsByCategory);
	//var cookie = COOKIE.getCookie('loginCookie');
	if (COOKIE.getCookie('loginCookie')) {
	    alert('test');
	}
    //else {
	//    window.location = "login.html";
	//}
 }
 
 var artist1 = 
	{id:1,
	title: 'Title 1',
	artist: 'Artist 1',
	price: 9.99,
	category: 'classic',
	releaseDate: '1/1/2013',
	quantity: 0,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
var artist2 =
	{id:2,
	title: 'Title 2',
	artist: 'Artist 2',
	price: 9.99,
	category: 'rock',
	releaseDate: '2/2/2013',
	quantity: 0,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
var artist3 =	
	{id:3,
	title: 'Title 3',
	artist: 'Artist 3',
	price: 9.99,
	category: 'rap',
	releaseDate: '3/3/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
var artist4 =	
	{id:4,
	title: 'Title 4',
	artist: 'Artist 4',
	price: 9.99,
	category: 'classic',
	releaseDate: '4/4/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
var artist5=	
	{id:5,
	title: 'Title 5',
	artist: 'Artist 5',
	price: 9.99,
	category: 'rock',
	releaseDate: '5/5/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
var artist6=	
	{id:6,
	title: 'Moving Pictures',
	artist: 'Rush',
	price: 9.99,
	category: 'rock',
	releaseDate: '5/5/1980',
	quantity: 3,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
 var artist7=	
	{id:7,
	title: 'Gold',
	artist: 'Rush',
	price: 9.99,
	category: 'rock',
	releaseDate: '5/5/2013',
	quantity: 1,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
var artist8=	
	{id:8,
	title: 'Greatest Hits 1970-1978',
	artist: 'Black Sabbath',
	price: 9.99,
	category: 'rock',
	releaseDate: '5/5/2013',
	quantity: 6,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
var artistList = [artist1,artist2,artist3,artist4,artist5,artist6, artist7,artist8];
 var categories = [{id:1,category:'rock'},{id:2,category:'pop'},{id:3,category:'rap'},{id:4,category:'classic'},{id:5,category:'metal'}];
