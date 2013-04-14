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
	var category = U.$('categoryInput').value;
	var alertText='';
	for (var i = 0;i < categories.length;i++)
	{
		if (category == categories[i].category)
		{
			for (var p = 0;p < categories.length;p++)
			{
				if (categories[i].category == artistList[p].category)
				{
					alertText = alertText + artistList[p].title + ' ';
				}
			}
		}
	}
	if (alertText=='')
	{
		alert('Please enter a valid category');
	} else {
		alert('Albums from category ' + category + ' are : ' + alertText);
	}
	return false;
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
	'use strict';
	var text = '';
	for (var i = 0; i < categories.length; i++) {
		text = text + categories[i].category + ', ';
	}
	alert('Categories: ' + text);
	return false;
}

 window.onload = function() {
	 'use strict';
	U.addEvent(U.$('allAlbums').onsubmit = getAllAlbums);
	U.addEvent(U.$('inputForm').onsubmit = getAlbumsByArtist);
	U.addEvent(U.$('allCategories').onsubmit = getAllCategories);
	U.addEvent(U.$('albumsByCategory').onsubmit = getAlbumsByCategory);
 }
 
 var artist1 = 
	{id:1,
	title: 'Title 1',
	artist: 'Artist 1',
	price: '9.99',
	category: 'classic',
	releaseDate: '1/1/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
var artist2 =
	{id:2,
	title: 'Title 2',
	artist: 'Artist 2',
	price: '9.99',
	category: 'rock',
	releaseDate: '2/2/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
var artist3 =	
	{id:3,
	title: 'Title 3',
	artist: 'Artist 3',
	price: '9.99',
	category: 'rap',
	releaseDate: '3/3/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
var artist4 =	
	{id:4,
	title: 'Title 4',
	artist: 'Artist 4',
	price: '9.99',
	category: 'classic',
	releaseDate: '4/4/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
var artist5=	
	{id:5,
	title: 'Title 5',
	artist: 'Artist 5',
	price: '9.99',
	category: 'rock',
	releaseDate: '5/5/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	};
 var artistList = [artist1,artist2,artist3,artist4,artist5];
 var categories = [{id:1,category:'rock'},{id:2,category:'pop'},{id:3,category:'rap'},{id:4,category:'classic'},{id:5,category:'metal'}];
