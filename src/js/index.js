document.addEventListener("DOMContentLoaded", () =>{

	fetch("/json/featured.json")
		.then((response) => response.json())
		.then((result) =>{
			console.log(result)

			result.forEach(element => {
				const featuredCardList = document.getElementById("cardList");
				const reauturedTemplate = document.getElementById("featured__template");
		
				const clone = featuredTemplate.content.cloneNode(true);

				if (element.sku == skuID) {
			
					clone.querySelector(".product-page__current-product__img").src = element.images[0];
					clone.querySelector(".current-product__name").innerText = element.make + " " + element.model + ", " + element.category;
					clone.querySelector(".current-product__price").innerText = element.price;
					clone.querySelector(".current-product__description").innerText = element.description;
					clone.querySelector(".current-product__info-table__manufacturer").innerText = element.make;
					clone.querySelector(".current-product__info-table__manufacturer-link").innerText = element.make + " " + element.model;
					
		
					productsCardList.appendChild(clone);
				} 
		})
	

});