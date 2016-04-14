var products = [
	{
		img: "img/experiences/bluebird.jpg",
		name: "You are a bluebird.",
		desc: "Nestled deeply in the interior of a national forest, you’re free to flip and flap around, eating delicious grubs and chasing some fellow bluebird tail (don’t worry, we’ll give you some tips on mate choice). Might we suggest some malicious, targeted pooping? Birdwatching may seem like  a harmless hobby to a human, but to a bluebird, it’s voyeuristic and requires discipline.",
		price: "$50 per session",
	},
	{
		img: "img/experiences/bonnaroo.jpg",
		name: 'Bonnaroo “trip”',
		desc: "Bonnaroo is a music festival in Manchester Tn, that feels as if it was in a deforested Vietnamese rainforest. Everyone is drunk, dehydrated, and on a cocktail of drugs that are different from what they were told they were. Sounds dangerous, right? Play it safe and immerse yourself in the Bonnaverse safely with our trip. You choose your drugs! ",
		price: "$150 per session",
	},
	{
		img: "img/experiences/Lazyland.jpg",
		name: "Electric Lazyland",
		desc: "You. Recliner. Kiera Knightely bringing you a double cheeseburger? In Electric Lazyland, your slobitude is fostered and encouraged by the likeness of any celebrity you think is attractive. Judgement free.",
		price: "$75 per session, +$25 additional stars",
	},
	{
		img: "img/experiences/safari.jpg",
		name: "Safari Trip",
		desc: "You know how pissed people like to get on social media if you kill some majestic game animal? Yeah, we agree. They’re probably jealous. Kill ALL the game animals you want, we don’t judge. Or just look at them, whatever.",
		price: "$90 per session",
	},
	{
		img: "img/experiences/revolution.jpg",
		name: "Revolutionary Leader",
		desc: "Revolution is scary! And being a rebel leader is a lot less stable than getting your M.B.A. Well, experience the thrill of overtaking an out of control government  with 1000 of your closest friends! We can upload their faces from facebook. We promise they won’t look like botched snapchat face-swaps.",
		price: "$200 per session",
	},{
		img: "img/experiences/internet.jpg",
		name: "Inside the Internet",
		desc: "Is the internet real? Does it prefer to be called the world wide web? Find out yourself! Become one with the internet and explore on foot, or a tron-like motorcycle. Switch some cables around, redirect everyone asking googling yahoo.com. Just don’t question rule 34.",
		price: "$250 per session",
	},
	{
		img: "img/experiences/drfoo.jpg",
		name: "Dr Foo 2 Electric Boogaloo",
		desc: 'Your favorite crime-fighting, time-traveling, 80s icon is back with this brand new sequel DR FOO 2 ELECTRIC BOOGALOO! With over 5,000 all new catchphrases such as shouting, "I PITY THE FOO THAT ISN’T YOU!” every time you look into a mirror!"',
		price: "$125 per session",
	},
	{
		img: "img/experiences/sportsballs.jpg",
		name: "Sportsballs Animals Edition",
		desc: "Ever wanted to be the penguin that scored a game-winning homerun by hurling a bowling ball through the basket from the 50 yard line with an oversized lacrosse stick at the buzzer? We got you covered.",
		price: "$75 per session",
	},
	{
		img: "img/experiences/hydraulicpress.jpg",
		name: "Hydraulic Press Simulator",
		desc: "Use our 10 ,100, hell even 10,000 ton hydraulic press to find out what happens when you crush VIRTUALLY any item you can think of! Make all of your wildest dreams come true!",
		price: "$5 a crush",
	}
];

for (var i = 0; i < products.length; i++) {
	var code = document.getElementById("wrapper-products");
	code.innerHTML += "<section class='product-card'>" + "<img src='" + products[i].img + "'/>" + "<h2>" + products[i].name + "</h2>" + "<p>" + products[i].desc + "</p>" + "<p>" + products[i].price + "</p>" + "<a href='" + products[i].img + "'>Preview image</a>" + "</section>";
	console.log("code: ", code);
}












