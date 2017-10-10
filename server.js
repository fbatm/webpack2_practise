var mongoose = require('mongoose');
var express = require('express');
var app = express();

var booksSchema = new mongoose.Schema({
	name: String,
	author: String,
	price: Number,
	tags: [String],
	remain: Number
})

var booksModel = mongoose.model('books', booksSchema);

mongoose.connect('mongodb://localhost/practice');
var db = mongoose.connection;
db.on('error', ()=>{console.log('connect error')});
db.once('open', function() {
  	console.log('mongodb connected');
  	// new booksModel({name: 'new', author: 'wb', price: 666, tag: ['fake', 'real'], remain: 1}).save();
});