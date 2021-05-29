var prices = [0.23, 0.75, 1.13, 2.49, 5.99, 10.38, 20.44, 45.57, 105.48, 276.10, 358.41];
var labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var initPrice = 358.41;

var timer = setInterval(updateValues,500);
document.getElementById("priceTag").innerHTML = "$" + (358.41).toFixed(2);

var scamChart = new Chart("realPriceChart", {
	type: "line",
	data: {
		labels: labels,
		datasets: [{
			label: "Price of our coin!",
			data: prices,
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)',
		}]
	},
	options: {}
});

function updateValues()
{
	var newPrice = initPrice;
	newPrice += Math.random() * 3 - 1;
	
	if(newPrice >= initPrice)
	{
		document.getElementById("priceTag").className = "priceGreen";
		document.getElementById("priceTag").innerHTML = "$" + newPrice.toFixed(2);
	} else {
		document.getElementById("priceTag").className = "priceRed";
		document.getElementById("priceTag").innerHTML = "$" + newPrice.toFixed(2);
	}
	
	document.getElementById("sendPrice").innerHTML = "$" + newPrice.toFixed(2);
	
	console.log("Old Price: " + initPrice + " New Price: " + newPrice);
	initPrice = newPrice;
}