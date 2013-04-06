function getAlbumsByArtist (artistId) {
	var artistIdInput = document.getElementById('artistIdInput').value;
	alert(artistId[artistIdInput].id);
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
	// do stuff to retrieve all albums
	return results;
}
function getAllCategories() {
	// do stuff to retrieve all categories
	return results;
}
function init () {
	'use strict';
 	document.getElementById('inputForm').onsubmit = getAlbumsByArtist;
 }
 window.onload = init;

var artistId = [
	{id:1,
	title: 'Title 1',
	artist: 'Artist 1',
	price: '9.99',
	releaseDate: '1/1/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	},
	{
	id:2,
	title: 'Title 2',
	artist: 'Artist 2',
	price: '9.99',
	releaseDate: '2/2/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	},
	{
	id:3,
	title: 'Title 3',
	artist: 'Artist 3',
	price: '9.99',
	releaseDate: '3/3/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	},
	{
	id:4,
	title: 'Title 4',
	artist: 'Artist 4',
	price: '9.99',
	releaseDate: '4/4/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	},
	{
	id:5,
	title: 'Title 5',
	artist: 'Artist 5',
	price: '9.99',
	releaseDate: '5/5/2013',
	quantity: 10,
	tracks: ['song 1','song 2','song 3','song 4','song 5']
	}];