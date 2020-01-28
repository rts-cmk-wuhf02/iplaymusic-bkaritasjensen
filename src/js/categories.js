document.addEventListener("DOMContentLoaded", () =>{
	
	//////////////////////////////// CATEGORI //////////////////////////////////
	let categoriesURL = "https://api.spotify.com/v1/browse/categories?country=DK";
	
	fetch(categoriesURL, {
		method: "GET",
		headers: {
			"Authorization": 'Bearer ' + sessionStorage.token
		}
	})
	.then((response) => response.json())
	.then((result) => {
		if (result.error && result.error.status === 401){
			//console.log(result)
			getToken();
		}else{
			//console.log(result)
			result.categories.items.forEach(element => {
				//console.log(element)
				//Template
				const containerCategories = document.getElementById("dropdown");
				const templateCategories = document.getElementById("categories-template");
				const cloneCategories = templateCategories.content.cloneNode(true);
				
				cloneCategories.querySelector(".categories__title").innerText = element.name;
				
				// Tilføjer clone
				containerCategories.appendChild(cloneCategories);


				////////////////////////// TILFØJER SUBCATEGORIES /////////////////////////////////////
				var subCategoriesID = element.id;
				//console.log(subCategoriesID)

				fetch(`https://api.spotify.com/v1/browse/categories/${subCategoriesID}/playlists`, {
					method: "GET",
					headers: {
						"Authorization": 'Bearer ' + sessionStorage.token
					}
				})
				.then((response) => response.json())
				.then((result) => {
					if (result.error && result.error.status === 401){
						getToken();
					}else{
						console.log(result)
						result.playlists.items.forEach(element => {
							//console.log(element)
							const containerSubcategories = document.querySelector(".subcategories__cardList");
							const templateSubcategories = document.getElementById("subcategories-template");
							const cloneSubcategories = templateSubcategories.content.cloneNode(true);
				
							cloneSubcategories.querySelector(".subcategories__text").innerText = element.name;
				
							containerSubcategories.appendChild(cloneSubcategories); 

						});
					}
				})

			});
			
			
		}
	});
	
	
	/* fetch(subcategoriesURL, {
		method: "GET",
		headers: {
			"Authorization": 'Bearer ' + sessionStorage.token
		}
	})
	.then((response) => response.json())
	.then((result) => {
		//console.log(result)
		if (result.error){
			getToken();
		}else{
			result.playlists.items.forEach(element => {
				const containerSubcategories = document.querySelector(".subcategories__cardList");
				const templateSubcategories = document.getElementById("subcategories-template");
				const cloneSubcategories = templateSubcategories.content.cloneNode(true);
				
				cloneSubcategories.querySelector(".subcategories__text").innerText = element.name;
				
				containerSubcategories.appendChild(cloneSubcategories); 
			})
		}
	})
 */

});