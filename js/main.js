


(function () {

	function numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

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
			// {
			// 	title: 'East sister rock island',
			// 	description: 'Private Island (1.5 Acres) fully developed and self-efficient, located 1/4 mile off the Atlantic shore of Marathon, Florida Keys. On the island sits a Bahamian style home (+5,000 sf) with a wide veranda and ocean views surrounding it, 3 bed/2bath, open living areas, high ceilings, sliding glass-doors and wood floors throughout.',
			// 	imageUrl: 'http://placehold.it/500x250',
			// 	priceFormatted: '$1,000,000',
			// 	price: '1000000',
			// 	url: ''
			// },
			// {
			// 	title: 'NAVYS ACRE ISLAND',
			// 	description: 'Unquestionably a turnkey property it features a gracious main cottage, a separate master cottage, three bedroom guest cottage and a four bunk waterside sleeping cabin. Designed by noted architect Peter Burton of C.A. Ventin Architect Ltd. and built to exacting standards by Paul Hannon Construction, the buildings, decks and boardwalks have been immaculately maintained and cared for.',
			// 	imageUrl: 'http://placehold.it/500x250',
			// 	priceFormatted: '$2,250,000',
			// 	price: '2250000',
			// 	url: 'http://www.privateislandsonline.com/islands/navys-acre-island'
			// },
			{"title":"Navy's Acre Island","description":"Unquestionably a turnkey property it features a gracious main cottage, a separate master cottage, three bedroom guest cottage and a four bunk waterside sleeping cabin. Designed by noted architect Peter Burton of C.A. Ventin Architect Ltd. and built to exacting standards by Paul Hannon Construction, the buildings, decks and boardwalks have been immaculately maintained and cared for.","imageUrl":"/img/NavysAcreIsland.jpg","priceFormatted":"$2,250,000","price":"2250000","url":"http://www.privateislandsonline.com/islands/navys-acre-island"},
			{"title":"Isla Palenquita","description":"Palenquita is self-standing Island and not a part of a bigger Island property, which is very valuable and special. It has total of 4.3 hectares of land and a small peninsula which is not included in this measurement but could be utilized as a helicopter pad or additional area. ","imageUrl":"/img/IslaPalenquita.jpg","priceFormatted":"$3,000,000","price":"3000000","url":"http://www.privateislandsonline.com/islands/isla-palenquita"},
			{"title":"North Saddle Caye","description":"North Saddle Caye, situated approximately 45 minutes ENE of the very popular, Placencia Peninsula, is a 4 acre private island paradise that has been fully developed, with all the comforts and amenities of a luxury estate.","imageUrl":"/img/NorthSaddleCaye.jpg","priceFormatted":"$6,000,000","price":"6000000","url":"http://www.privateislandsonline.com/islands/north-saddle-caye"},
			{"title":"Big Gull Island","description":"Gull Island is a private 11.58-acre island located just minutes from the quaint fishing community of Sitka. The 5200 sq. ft. 4 bdrm, 4.5 bath home was architecturally drawn and custom built. The magnificent living room and master bedroom feature high vaulted ceilings, plenty of windows and a grand fireplace in each room. Many more features throughout!","imageUrl":"/img/BigGullIsland.jpg","priceFormatted":"$3,000,000","price":"3000000","url":"http://www.privateislandsonline.com/islands/big-gull-island"},
			{"title":"Arthur Island","description":"Located in the heart of one of southern Georgian Bay’s most vibrant and active communities, this classic and stunning 2-storey custom designed cottage with 3,600 sq. ft., provides a large family with 4 bedrooms and 4 baths.","imageUrl":"/img/ArthurIsland.jpg","priceFormatted":"$1,675,000","price":"1675000","url":"http://www.privateislandsonline.com/islands/arthur-island"},
			{"title":"Franquility Island","description":"This spectacular private island in Georgian Bay is nestled in a quiet bay of popular Franklin Island and is just a short 5 minute boat ride from the marina. This 3.64 acre property of Georgian Bay rock and picturesque wind swept pines features the main Viceroy cottage which was finished in 2009 and is 2600 sq. ft. of pure perfection.","imageUrl":"/img/FranquilityIsland.jpg","priceFormatted":"$1,295,000","price":"1295000","url":"http://www.privateislandsonline.com/islands/309c"},
			{"title":"Navy's Acre Island","description":"Unquestionably a turnkey property it features a gracious main cottage, a separate master cottage, three bedroom guest cottage and a four bunk waterside sleeping cabin. Designed by noted architect Peter Burton of C.A. Ventin Architect Ltd. and built to exacting standards by Paul Hannon Construction, the buildings, decks and boardwalks have been immaculately maintained and cared for.","imageUrl":"/img/NavysAcreIsland.jpg","priceFormatted":"$2,250,000","price":"2250000","url":"http://www.privateislandsonline.com/islands/navys-acre-island"},
			{"title":"Manchee Island","description":"The three season home of a noted local builder, this 5.2 acre private island, features a gracious custom built, three bedroom, two bath, main cottage, a 550 sq. ft. guest cabin, a covered, 2 slip boat shed, a dockside workshop, spacious terraced decking for waterside entertaining and generous docking for 6-8 boats.","imageUrl":"/img/MancheeIsland.jpg","priceFormatted":"$1,580,000","price":"1580000","url":"http://www.privateislandsonline.com/islands/manchee-island"},
			{"title":"Turn Island","description":"Turn Island is a dramatically diverse 82 acre substantial private island estate with 3km of shoreline located on the east end of Johnstone Strait where Johnstone Strait, Discovery Passage and Nodales Channel converge. A spectacular coastal setting! The shoreline ranges from gentle slopes down to walk-on beachfront to sheer granite bluffs, with a well-protected bay providing deep water moorage year round. ","imageUrl":"/img/TurnIsland.jpg","priceFormatted":"$3,900,000","price":"3900000","url":"http://www.privateislandsonline.com/islands/turn-island"},
			{"title":"Mowgli Island","description":"Mowgli Island is an exceptional opportunity to own an exclusive private island. Properties such as this rarely become available within the Southern Gulf Islands. The island is 9 acres in size with approximately 3400 linear feet of low bank waterfront with sandy beaches and a 50' L shaped dock for year round moorage of numerous vessels. ","imageUrl":"/img/MowgliIsland.jpg","priceFormatted":"$3,800,000","price":"3800000","url":"http://www.privateislandsonline.com/islands/mowgli-island12"},
			{"title":"Trump Island","description":"A once-in-a-lifetime opportunity! Own your own PRIVATE 29+ Acre Island in the San Juan's of the beautiful Pacific northwest! Trump Island is located between Decatur and Lopez Islands in the archipelago of 170 islands that make up the San Juan Islands. 360 degrees of water & forest views. 4230 feet of saltwater frontage with tidelands. ","imageUrl":"/img/TrumpIsland.jpg","priceFormatted":"$8,750,000","price":"8750000","url":"http://www.privateislandsonline.com/islands/trump-island"},
			{"title":"Schloss Island","description":"Schloss island is a lush 82 acre private island situated in Koprino Harbour, Quatsino Sound. The Island is located only 7 miles from the Pacific ocean between Winter Harbour and the village of Quatsino. ","imageUrl":"/img/SchlossIsland.jpg","priceFormatted":"$798,600","price":"798600","url":"http://www.privateislandsonline.com/islands/schloss-island3"},
			{"title":"Saddle Caye 5.9","description":"Ever dreamed of owning a piece of paradise? Saddle Caye is such an opportunity right here in spectacular Belize and one that should not be missed. Belize real estate does not get much better than this. Saddle Caye is located just 15 minutes from the 2nd largest barrier reef in the world and 45 minutes (9 miles) off the coast of the booming tourism destination of Placencia Peninsula in southern Belize.","imageUrl":"/img/SaddleCaye.jpg","priceFormatted":"$350,000","price":"350000","url":"http://www.privateislandsonline.com/islands/saddle-caye-59"},
			{"title":"Saddle Caye 2.19","description":"This parcel on Saddle Caye is approximately 2.190 acres and has previously been cleared and filled and a minor top fill with beach sand would be needed. A perfect paradise. This island has its own reef system and has a lagoon inside the reef system. This lagoon is about 90 to 100 feet deep and could serve as a marina for your paradise.","imageUrl":"/img/SaddleCaye.jpg","priceFormatted":"$425,000","price":"425000","url":"http://www.privateislandsonline.com/islands/saddle-caye-219"},
			{"title":"South Saddle Caye","description":"This wonderful, ready to be developed, 4.84 acre island, South Saddle Caye, is located approximately 15 minutes from Placencia and sits in the Lark Caye Range. The possibilities with this island are endless: private island resort, residential all island or even a fishing retreat.","imageUrl":"/img/SouthSaddleCaye.jpg","priceFormatted":"$800,000","price":"800000","url":"http://www.privateislandsonline.com/islands/south-saddle-caye2"},
			{"title":"North East Caye","description":"This is an incredible opportunity to own a rare piece of island conveniently located just 8 miles off the coast of Riversdale on the Placencia Peninsula. This property located on North East Caye is ideally situated near Saddle Caye, Cat Caye and Manatee Caye.","imageUrl":"/img/NorthEastCave.jpg","priceFormatted":"$400,000","price":"400000","url":"http://www.privateislandsonline.com/islands/north-east-caye"}
			]
		},
		{
		category: 'cars',
		products: [
			{
				title: 'Ferrari',
				description: 'Private Island (1.5 Acres) fully developed and self-efficient, located 1/4 mile off the Atlantic shore of Marathon, Florida Keys. On the island sits a Bahamian style home (+5,000 sf) with a wide veranda and ocean views surrounding it, 3 bed/2bath, open living areas, high ceilings, sliding glass-doors and wood floors throughout.',
				imageUrl: 'http://placehold.it/500x250',
				priceFormatted: '$13,000,000',
				price: '13000000',
				url: ''
			},
			{
				title: 'East sister rock island',
				description: 'Private Island (1.5 Acres) fully developed and self-efficient, located 1/4 mile off the Atlantic shore of Marathon, Florida Keys. On the island sits a Bahamian style home (+5,000 sf) with a wide veranda and ocean views surrounding it, 3 bed/2bath, open living areas, high ceilings, sliding glass-doors and wood floors throughout.',
				imageUrl: 'http://placehold.it/500x250',
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
			$('.progress').text(formatted);
			// console.log(formatted);
			$('.progress-css').css('top', formatted + '%');
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
			var number = ((i + 1) * 100000);

			number = numberWithCommas(number);
			var newRowString = ['<li><ul class="billions__inner"><span class="label">$' + number + '</span>'];

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
				var li = $('<li class="product" data-index="' + i + '" data-price="' + product.price + '"></li>');
				var image = '<img src="' + product.imageUrl + '" />';
				var title = '<h3>' + product.title + '</h3>';
				var description = '<p>' + product.description + '</p>';
				var price = '<p class="product__price">' + product.priceFormatted + '</p>';
				var button = '<button class="btn btn-success buy">Buy</button>';
				var contentBlock = '<div class="content-block"></div>';

				var $contentBlock = $(contentBlock).append(title).append(description).append(price).append(button)
				li.append(image).append($contentBlock);

				$ul.append(li);

			}

			return $ul;
		}


		for(var x = 0; x < products.length; x ++) {

			var productsInCategory = products[x].products;
			var key = products[x].category;


			$('#' + key).append(getProductUl(productsInCategory));

		}

		



		







		$('.products li .buy').on('click', function (e) {
			e.preventDefault();




			//scrollto top of stack
			var rowHeight = 40;
			var rowsToScroll = ((BILLION - amountLeft) / 100000) * rowHeight; 

			// $('#scrollArea').animate({
		 //        scrollTop:  rowsToScroll
		 //    }, 2000);







			var amount =  $(this).parent().parent().attr('data-price');



			var amountLeftAdjusted = amountLeft - parseInt(amount, 10);
			// amountLeft -= parseInt(amount, 10);

			// $('#amount-left').text(amountLeft);
			// var currentAmount = parseInt($('#amount-left').text(), 10);
			var currentAmount = parseInt($('#amount-left').attr('data-amount-left'), 10);

			$('#amount-left').attr('data-amount-left', amountLeftAdjusted);

			$({countNum: currentAmount}).animate({countNum: amountLeftAdjusted}, {
			  duration: 1000,
			  easing:'linear',
			  step: function() {
			    $('#amount-left').text(Math.floor(this.countNum));
			  },
			  complete: function() {
			    $('#amount-left').text(this.countNum);
			  }
			});


			var percentLeft = amountLeftAdjusted / BILLION * 100;
			$('#left').height(percentLeft + '%');

			console.log(amountLeftAdjusted);

			var updatedAmount = amountLeftAdjusted / 100000;




			//animate the boxes going white
			var whiteBlocks = amount / 10000;
			// var offset = (BILLION - amountLeft) / 10000;
			var offset = 0;

			var tick = function (whiteBlocks) {
				if(!(whiteBlocks === 0)) {

					var index = whiteBlocks;
					var $li = $($('.billions__inner li').get(index));
					$li.addClass('spent').addClass('animate');

					whiteBlocks--;

					setTimeout(function () {
						tick(whiteBlocks);
					}, 20);

				} else {
					//then update the data array
					
					// var newData = getData();

					//then republish data to clusrerize
					// clusterize.update(newData);
				}
			};

			// tick(whiteBlocks);

			destoryMoney(amount);
			amountLeft -= parseInt(amount, 10);

			console.log('Iv updated the data fam');
		});
	}


	var destoryMoney = function(amountToDestroy, updatedAmount) {
		amountToDestroy = parseInt(amountToDestroy, 10);

		var offset = (BILLION - (amountLeft) );
		var offsetAdjusted;
		if(offset === 0) {
			offsetAdjusted = 0;
		} else {
			offsetAdjusted = offset / 10000;
		}

		var amountToDestroyAdjusted = amountToDestroy / 10000;
		var $lis = $('.billions .billions__inner li');
		console.log('amountToDestroyAdjusted',amountToDestroyAdjusted);
		var index = 0 + offsetAdjusted;
		var change = function (index) {
			var $li = $($lis.get(index));

			$li.addClass('spent');
			setTimeout(function() {
				if(index === amountToDestroyAdjusted + offsetAdjusted) {

					// var newData = getData(updatedAmount);
					// clusterize.update(newData);
					console.log('Finished spening, getting new data');
					updateDataArray(amountToDestroy);

					var newData = getData();

					//then republish data to clusrerize
					clusterize.update(newData);
					return;
				}



				change(index += 1);
			}, 5);

		}
		// change(index);

		

		updateDataArray(amountToDestroy);

		var newData = getData();

		//then republish data to clusrerize
		clusterize.update(newData);


		var rowHeight = 40;
		var rowsToScroll = ((amountToDestroy + ( BILLION - amountLeft )) / 100000) * rowHeight; 
		console.log(amountToDestroy);

		// setTimeout(function () {
			$('#scrollArea').animate({
		        scrollTop:  rowsToScroll
		    }, 2000);
		// }, 500);

		


	}


	//go go go
	$(function () {
		init();
	});

}());





