
/* getToken and save ind sesision storage  */
(function getToken() {
	const clientId = "da7eb70a3a7e4d25ae8f80e7746078c0";
	const ClientSecret = "eaad342834ca418aa85427b2dc264530";
	fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"Authorization": "Basic " + btoa(clientId + ":" + ClientSecret)
		},
		body: "grant_type=client_credentials"
	})
		.then(respons => respons.json())
		.then(resultat => sessionStorage.setItem('token', resultat.access_token))
		console.log(sessionStorage.token)
})();

////////////////////////////////////HENTER DATA//////////////////////////////
fetch("https://api.spotify.com/v1/browse/categories", {
	headers: {
		"Authorization": 'Bearer ' + sessionStorage.token
	}
})
	.then((respons) => respons.json())
	.then((resultat) => {
		/* console.log(resultat) */
		/* console.log(resultat.categories.items) */
		resultat.categories.items.forEach(element => {
			/* console.log(element); */
			console.log(element.name);
		});
		resultat.forEach(element => {
			// Template Variabler
			const container = document.querySelector("");
			/* const template = document.getElementById("");
			const clone = template.content.cloneNode(true);
			clone.querySelector("").src = element.images[0];
			clone.querySelector("").innerText = element.make;
			clone.querySelector("").innerText = element.price;
			clone.querySelector("").href = `/product/?sku=${element.sku}`; */
			// Tilføjer clone
			container.appendChild(clone);
		})
	});
