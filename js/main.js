
(function () {

	var BILLION = 1000000000;
	var amountLeft = BILLION;
	var clusterize = null;

	var products = [
		{
			title: 'EAST SISTER ROCK ISLAND',
			description: 'Private Island (1.5 Acres) fully developed and self-efficient, located 1/4 mile off the Atlantic shore of Marathon, Florida Keys. On the island sits a Bahamian style home (+5,000 sf) with a wide veranda and ocean views surrounding it, 3 bed/2bath, open living areas, high ceilings, sliding glass-doors and wood floors throughout.',
			imageUrl: 'http://www.privateislandsonline.com/content/listings/1292/cimage_c79d401e69-thumbb.jpg',
			priceFormatted: '$13,000,000',
			price: '13000000'
		},
		{
			title: 'EAST SISTER ROCK ISLAND',
			description: 'Private Island (1.5 Acres) fully developed and self-efficient, located 1/4 mile off the Atlantic shore of Marathon, Florida Keys. On the island sits a Bahamian style home (+5,000 sf) with a wide veranda and ocean views surrounding it, 3 bed/2bath, open living areas, high ceilings, sliding glass-doors and wood floors throughout.',
			imageUrl: 'http://www.privateislandsonline.com/content/listings/1292/cimage_c79d401e69-thumbb.jpg',
			priceFormatted: '$13,000,000',
			price: '13000000'
		}

	]
	
	var init = function () {
		console.log('Im running ');

		
		clusterize = new Clusterize({
		  rows: getData(1000000),
		  scrollId: 'scrollArea',
		  contentId: 'contentArea'
		});


		$('#scrollArea').on('scroll', function () {
			var progress = clusterize.getScrollProgress();
			var parsed = parseFloat(progress, 10);
			var formatted = parsed.toFixed(5);
			console.log(formatted);
			$('#progress').text(formatted);
		})

		initProducts();
	}


	var getData = function (number) {
		var data = [];
		for(var i = 0; i < number; i++) {
			var x = i + 1; //0 offset

			data.push('<li><ul class="billions__inner"><span class="label">$'+ (x * 10000) + '</span><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>')
		}

		return data;
	}

	var initProducts = function() {
		for(var i = 0; i < products.length; i++) {

			var product = products[i];
			var li = $('<li data-index="' + i + '" data-price="' + product.price + '"></li>');
			var title = '<h2>' + product.title + '</h2>';
			var description = '<p>' + product.description + '</p>';
			var image = '<img src="' + product.imageUrl + '" />';
			var price = '<p>' + product.priceFormatted + '</p>';
			var button = '<button class="btn btn-primary">Buy</button>';

			li.append(title).append(description).append(image).append(price).append(button);

			$('#products').append(li);

		}

		$('#products li').on('click', function (e) {
			e.preventDefault();

			var amount =  $(this).attr('data-price');
			amountLeft -= parseInt(amount, 10);

			$('#amount-left').text(amountLeft);


			var percentLeft = amountLeft / BILLION * 100;
			$('#left').height(percentLeft + '%');

			console.log(amountLeft);

			var updatedAmount = amountLeft / 1000;

			var newData = getData(updatedAmount);
			clusterize.update(newData);
			console.log('Iv updated the data fam');
		});
	}


	//go go go
	$(function () {
		init();
	});

}());




$({countNum: 99}).animate({countNum: 1000}, {
  duration: 8000,
  easing:'linear',
  step: function() {
    // What todo on every count
    console.log(Math.floor(this.countNum));
  },
  complete: function() {
    console.log('finished');
  }
})