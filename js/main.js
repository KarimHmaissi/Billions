
(function () {

	var BILLION = 1000000000;
	var amountLeft = BILLION;
	var clusterize = null;

	var amountOfRows = 10000;
	var numberOfBoxesInRow = 10;


	var dataArray = function () {

		var finishedArray = [];

		for(var i = 0; i < amountOfRows; i++) {
			var newRow = [];

			for(var x = 0; x < numberOfBoxesInRow; x++) {
				newRow.push(false);
			}

			finishedArray.push(newRow);
		}

		return finishedArray;
	}();

	console.log(dataArray);



	var products = [
		{
		category: 'privateIslands',
		products: [
			{
				title: 'EAST SISTER ROCK ISLAND',
				description: 'Private Island (1.5 Acres) fully developed and self-efficient, located 1/4 mile off the Atlantic shore of Marathon, Florida Keys. On the island sits a Bahamian style home (+5,000 sf) with a wide veranda and ocean views surrounding it, 3 bed/2bath, open living areas, high ceilings, sliding glass-doors and wood floors throughout.',
				imageUrl: 'http://www.privateislandsonline.com/content/listings/1292/cimage_c79d401e69-thumbb.jpg',
				priceFormatted: '$13,000,000',
				price: '13000000',
				url: ''
			},
			{
				title: 'EAST SISTER ROCK ISLAND',
				description: 'Private Island (1.5 Acres) fully developed and self-efficient, located 1/4 mile off the Atlantic shore of Marathon, Florida Keys. On the island sits a Bahamian style home (+5,000 sf) with a wide veranda and ocean views surrounding it, 3 bed/2bath, open living areas, high ceilings, sliding glass-doors and wood floors throughout.',
				imageUrl: 'http://www.privateislandsonline.com/content/listings/1292/cimage_c79d401e69-thumbb.jpg',
				priceFormatted: '$13,000,000',
				price: '13000000',
				url: ''
			}]
		},
		{
		category: 'cars',
		products: [
			{
				title: 'Ferrari',
				description: 'Private Island (1.5 Acres) fully developed and self-efficient, located 1/4 mile off the Atlantic shore of Marathon, Florida Keys. On the island sits a Bahamian style home (+5,000 sf) with a wide veranda and ocean views surrounding it, 3 bed/2bath, open living areas, high ceilings, sliding glass-doors and wood floors throughout.',
				imageUrl: 'http://www.privateislandsonline.com/content/listings/1292/cimage_c79d401e69-thumbb.jpg',
				priceFormatted: '$13,000,000',
				price: '13000000',
				url: ''
			},
			{
				title: 'EAST SISTER ROCK ISLAND',
				description: 'Private Island (1.5 Acres) fully developed and self-efficient, located 1/4 mile off the Atlantic shore of Marathon, Florida Keys. On the island sits a Bahamian style home (+5,000 sf) with a wide veranda and ocean views surrounding it, 3 bed/2bath, open living areas, high ceilings, sliding glass-doors and wood floors throughout.',
				imageUrl: 'http://www.privateislandsonline.com/content/listings/1292/cimage_c79d401e69-thumbb.jpg',
				priceFormatted: '$13,000,000',
				price: '13000000',
				url: ''
			}]
		}

	]
	
	var init = function () {
		console.log('Im running ');

		
		clusterize = new Clusterize({
		  rows: getData(10000),
		  scrollId: 'scrollArea',
		  contentId: 'contentArea',
		  rows_in_block: 32
		});


		$('#scrollArea').on('scroll', function () {
			var progress = clusterize.getScrollProgress();
			var parsed = parseFloat(progress, 10);
			var formatted = parsed.toFixed(5);
			$('#progress').text(formatted);
		})

		initProducts();
	}


	var getData = function () {
		// var data = [];
		// for(var i = 0; i < number; i++) {
		// 	var x = i + 1; //0 offset

		// 	data.push('<li><ul class="billions__inner"><span class="label">$'+ (x * 100000) + '</span><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>')
		// }

		// return data;


		var data = [];

		for(var i = 0; i < dataArray.length; i++) {
			//loop over rows
			var currentRow = dataArray[i];
			// var $newLiForRow = $('<li><ul class="billions__inner"><span class="label">' + number + '</span></ul></li>');
			var newRowString = ['<li><ul class="billions__inner"><span class="label">' + ((i + 1) * 100000) + '</span>'];

			for(var x = 0; x < currentRow.length; x++) {
				//loop over blocks in row
				// $newLiForRow.append(currentRow[x]);

				if(currentRow[x] === false) {
					//not spent
					newRowString.push('<li></li>');
				} else {
					//spent
					newRowString.push('<li class="spent"></li>');
				}

			}

			newRowString.push('</ul></li>');

			var finishedRow = newRowString.join('');

			data.push(finishedRow);
		}

		return data;
	}


	var updateDataArray = function(amountSpent) {
		console.log('About to change the data array fam');

		//find current position ?
		var offset = (BILLION - amountLeft) / 100000;

		//loop over data and update for amount
		var numberOfRows = amountSpent / 100000;

		for(x = 0; x< numberOfRows + offset; x++) {
			for(var i = 0; i < dataArray[x].length; i++) {
				dataArray[x][i] = true;
			}
		}
	};

	var initProducts = function() {

		var getProductUl = function (products) {
			var $ul = $('<ul></ul>');

			for(var i = 0; i < products.length; i++) {

				var product = products[i];
				var li = $('<li data-index="' + i + '" data-price="' + product.price + '"></li>');
				var title = '<h2>' + product.title + '</h2>';
				var description = '<p>' + product.description + '</p>';
				var image = '<img src="' + product.imageUrl + '" />';
				var price = '<p>' + product.priceFormatted + '</p>';
				var button = '<button class="btn btn-primary">Buy</button>';

				li.append(title).append(description).append(image).append(price).append(button);

				$ul.append(li);

			}

			return $ul;
		}


		for(var x = 0; x < products.length; x ++) {

			var productsInCategory = products[x].products;
			var key = products[x].category;


			$('#' + key).append(getProductUl(productsInCategory));

		}

		



		







		$('.products li').on('click', function (e) {
			e.preventDefault();

			var amount =  $(this).attr('data-price');

			updateDataArray(amount);

			
			amountLeft -= parseInt(amount, 10);

			// $('#amount-left').text(amountLeft);
			// var currentAmount = parseInt($('#amount-left').text(), 10);
			var currentAmount = parseInt($('#amount-left').attr('data-amount-left'), 10);

			$('#amount-left').attr('data-amount-left', amountLeft);

			$({countNum: currentAmount}).animate({countNum: amountLeft}, {
			  duration: 1000,
			  easing:'linear',
			  step: function() {
			    $('#amount-left').text(Math.floor(this.countNum));
			  },
			  complete: function() {
			    $('#amount-left').text(this.countNum);
			  }
			});


			var percentLeft = amountLeft / BILLION * 100;
			$('#left').height(percentLeft + '%');

			console.log(amountLeft);

			var updatedAmount = amountLeft / 100000;




			console.log('AmountSpent: ', amount);
			console.log('AmountLeft: ', amountLeft);

			//animate the boxes going white

			//then update the data array
			
			var newData = getData();

			//then republish data to clusrerize
			clusterize.update(newData);


			

			console.log('Iv updated the data fam');
		});
	}


	//go go go
	$(function () {
		init();
	});

}());





