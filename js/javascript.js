var shop = [
	["heart print T-shirt", 114],
	["mini heart v-neck jumper", 379],
	["double heart T-shirt", 114],
	["polka dot heart print T-shirt", 122],
	["striped long-sleeve T-shirt", 192],
	["heart logo shirt", 224],
	["'Double Heart' cardigan", 501],
	["embroidered heart cardigan", 501],
	["brand logo V neck jumper", 474],
	["embroidered heart polka dot jumper", 479],
	["embroidered heart jumper", 445],
	["heart application hoodie", 384]
];
var CartItems = 0;
var ItemsIWantToBuy = [];
function AddToCart(item) {
	var Item = item;
	var Amount = document.getElementById("item" + Item).value;
	CartItems += parseInt(Amount);
	// Verander de CartItems 0 op de site naar het aantal 
	document.getElementById("AmountItems").innerHTML = CartItems;
	document.getElementById("ClickHere").innerHTML = "Klik op het winkelkarretje bovenaan om af te rekenen!";
	document.getElementById("ShoppingCart").style.transform = "scale(1.5)";
	ItemsIWantToBuy.push([Item, Amount]);
}
function Payment() {
	alert("You will be redirected to pay for your shoppigncart!");
}
function GetCartItems() {
	//document.write("<table width='100%'><thead>");
	//document.write("<tr>");
	var WhatdoIHAveToAdd = "";
	var TotalPrice = 0;
	var TableRow = "";
	var TableStart = "<span id='Close' onclick='CloseCart()'>X</span><div class='table'><table width='100%'><h3>Your Cart</h3><thead><tr><th>Item</th><th>Prijs p/s</th><th>Stuks</th><th>Totaal Prijs</th></tr></thead>"; 
	for (var i = 0; i < ItemsIWantToBuy.length; i++) {
		var ThisItem = ItemsIWantToBuy[i][0];
		var ItemTotalPrice = ItemsIWantToBuy[i][1] * shop[ThisItem][1];
		//document.write("<td>" + ItemsIWantToBuy[i][0] + shop[0][0] + "</td><td>€" + shop[0][1] + "</td><td> " + ItemsIWantToBuy[i][1] + "</td><td>€" + ItemTotalPrice + "</td><br>");
		var TableRow = TableRow + "<tr><td>" +  shop[ThisItem][0] + "</td><td>€" + shop[ThisItem][1] + "</td><td> " + ItemsIWantToBuy[i][1] + "</td><td>€" + ItemTotalPrice + "</td></tr>";
		var TotalPrice = TotalPrice + ItemTotalPrice;
		
	}
	var TableEnd = "</table>";
	if (document.getElementById("CheckBoxClient").checked) {
		var PriceSale = (TotalPrice / 100) * 10;
		var DisplayPrice = TotalPrice - PriceSale;
	} else {
		var PriceSale = 0;
		var DisplayPrice = TotalPrice;
	}
	var Footer = "<footer><p>Korting: €" + PriceSale + "</p><p>Totaalprijs €" + DisplayPrice +"</p><p><button onclick='Payment()'>Koop</button></p></footer>";
	document.getElementById("Cart").innerHTML = TableStart + TableRow + TableEnd + Footer;
	//document.write("</tr>");
	//document.write("</thead>");
	//document.write("</table>");

}
function OpenCart() {
	if(CartItems <= 0) {
		document.getElementById("error").innerHTML = "Je moet minstens 1 item aanduiden om je shoppingcart te openen!";
	} else {	
		document.getElementById("CartOverlay").style.display = "block";
		document.getElementById("body").style.overflow = "hidden";
		document.getElementById("Cart").style.display = "block";
		GetCartItems();
	}
}
function CloseCart() {
		document.getElementById("CartOverlay").style.display = "none";
		document.getElementById("body").style.overflow = "visible";
		document.getElementById("Cart").style.display = "none";
}
function GetItems(amount) {
	if(amount > shop.length) {
		var ForAmount = shop.length;
	} else {
		var ForAmount = amount;
	}
	var ShopItems = "";
	for(var i = 0; i < ForAmount; i++) {
		var ShopItems = ShopItems + "<article><img src='../image/items/" + i + ".jpg'  data-aos='flip-down' data-aos-duration='2000'><main><p class='artikel' data-aos='flip-up' data-aos-duration='1500'>" + shop[i][0] + "</p></main><main><p class='prijs' data-aos='fade-left' data-aos-duration='2000'>€" + shop[i][1] +"</p></main><main class='bottom'><input name='item" + i + "' id='item" + i + "' value='0' min='0' type='number' data-aos='fade-down-left' data-aos-duration='2000'><button data-aos='fade-down-right' data-aos-duration='2000' onclick='AddToCart(" + i + ")'>BUY</button></main></article>"; 
	}
	document.getElementById("sale").innerHTML = ShopItems;


}