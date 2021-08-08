function getQuotes() {
	let url = '/quotes.json';
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			let quotes = data.quotes;
			let randomIndex = Math.floor(Math.random() * quotes.length);
			let quote = quotes[randomIndex];
			document.getElementById('quote').innerHTML = quote.quote;
			document.getElementById('source').innerHTML = quote.author;
		});
}

getQuotes();