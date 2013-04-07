function getAlbumsByArtist () {
	'use strict';
	var artistId = document.getElementById('artistIdInput').value;
	if (artistId >= 1 && artistId <= 5) {
		artistId = artistList[artistId - 1];
		alert('Album: '+  artistId.title);
	} else {
		alert('Please enter a valid ID');
	}
	return false;
}
function getAlbumsByCategory (categoryId) {
	if (typeof categoryid == 'number') {
		//do some stuff
		return results;
	} else {
		alert('Please enter a valid category ID.');
	}
}
function getAllAlbums () {
	'use strict';
	var text = '';
	for (var i = 0; i < artistList.length; i++) {
		text = text + artistList[i].title + ' ';
	}
	alert('Albums: ' + text);
	return false;
}
function getAllCategories() {
	// do stuff to retrieve all categories
	return results;
}
function init () {
	'use strict';
 	document.getElementById('inputForm').onsubmit = getAlbumsByArtist;
	document.getElementById('allAlbums').onsubmit = getAllAlbums;
 }
 window.onload = init;
 var artist1 = new Object();
 var artist2 = new Object();
 var artist3 = new Object();
 var artist4 = new Object();
 var artist5 = new Object();
 
 var artist1 = 
	{id:1,
	title: 'Title 1',
	artist: 'Artist 1',
	price: '9.99',
	releaseDate: '1/1/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
var artist2 =
	{id:2,
	title: 'Title 2',
	artist: 'Artist 2',
	price: '9.99',
	releaseDate: '2/2/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
var artist3 =	
	{id:3,
	title: 'Title 3',
	artist: 'Artist 3',
	price: '9.99',
	releaseDate: '3/3/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
var artist4 =	
	{id:4,
	title: 'Title 4',
	artist: 'Artist 4',
	price: '9.99',
	releaseDate: '4/4/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
var artist5=	
	{id:5,
	title: 'Title 5',
	artist: 'Artist 5',
	price: '9.99',
	releaseDate: '5/5/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
 var artistList = [artist1,artist2,artist3,artist4,artist5];

