var products = [
	{
		img: "",
		name: "",
		desc: "",
		price: "",
		url: "",
	},
	{
		img: "",
		name: "",
		desc: "",
		price: "",
		url: "",
	},
	{
		img: "",
		name: "",
		desc: "",
		price: "",
		url: "",
	},
	{
		img: "",
		name: "",
		desc: "",
		price: "",
		url: "",
	},
	{
		img: "",
		name: "",
		desc: "",
		price: "",
		url: "",
	},{
		img: "",
		name: "",
		desc: "",
		price: "",
		url: "",
	},
	{
		img: "",
		name: "",
		desc: "",
		price: "",
		url: "",
	},
	{
		img: "",
		name: "",
		desc: "",
		price: "",
		url: "",
	}
];

for (var i = 0; i < products.length; i++) {
	var code = document.getElementById("wrapper-main");
	code.innerHTML = "<section class='product-card'>";
	code.innerHTML += "<img src='" + products[i].img + "'/>";
	code.innerHTML += "<p>" + products[i].name + "<p>";
	code.innerHTML += "<p>" + products[i].desc + "<p>";
	code.innerHTML += "<p>" + products[i].price + "<p>";
	code.innerHTML += "<p>" + products[i].url + "<p>";
	code.innerHTML += "</section>";
	console.log("code: ", code);
}












