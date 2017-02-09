Name
$('#specs > table > tbody > tr:first-child td:not(".label")').html()


Desctipton


imageUrl:



Url


price
$('.currency_price').html()

priceformatted


title: 'East sister rock island',
description: 'Privatei',
imageUrl: 'http://placehold.it/500x250',
priceFormatted: '$1,000,000',
price: '1000000',
url: ''

var object = {
	title: $('#specs > table > tbody > tr:first-child td:not(".label")').html(),
	description: '',
	imageUrl: '/images/' + $('#specs > table > tbody > tr:first-child td:not(".label")').html().replace(/\s/g, '').replace(/[^a-zA-Z ]/g, "") + '.jpg',
	priceFormatted: $('.currency_price').html().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
	price: $('.currency_price').html().replace(/[^a-zA-Z0-9 ]/g, ""),
	url: window.location.href
}

console.log(JSON.stringify(object));


