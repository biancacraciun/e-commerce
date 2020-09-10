// Framework de node
const express = require('express');
// Librărie care îți generează date, doar ca să nu pierzi tu timpul generându-le
const patternMock = require('pattern-mock');

// Se instanțiază frameworkul
const app = express();
// Se setează un port [poate fi oricare alt port disponibil eg. 3000, 5000 etc.]
const port = 8080;

// Folosind librăria patternMock se generează un obiect cu 2 liste
// cred că e destul de evidentă structura obiectului
const mockData = patternMock({
	categories: [{
		id: 'COUNTER',
		name: 'NAME'
	}, {
		length: 10
	}],
	products: [{
		name: 'FULL_NAME',
		description: 'SENTENCE',
		price: 'CUSTOM_NUMBER_10-500',
		categories: ['CUSTOM_NUMBER_0-10']
	}]
});

// Se crează o rută pentru categorii
// atunci când se accesează node, lista cu categorii e returnată
app.get('/categories', (req, res) => res.json(mockData.categories));

// Se crează o rută pentru produse
// exact aceeași treabă ca mai sus
app.get('/products', (req, res) => res.json(mockData.products));

// Se crează o rută pentru filtrarea produselor
// atunci când se accesează http://localhost:8080/products/category1/category2
// se face o filtrare și se returnează doar produsele care fac parte din toate categoriile
// mai jos mă folosesc de o expresie regulată care face match la orice se află după 'products'
// asta înseamnă că pot fi înșiruite o groază de categorii, dacă este găsit vreun produs, este returnat
app.get(/^(\/products\/.*)/, (req, res) => {
	const categoryNames = req.path.split('/').slice(2).map(categoryName => categoryName.toLowerCase());
	const mockedCategories = mockData.categories.filter(({name}) => categoryNames.includes(name.toLowerCase()));

	return res.json(
		mockData.products.filter(product => 
			mockedCategories.every(category => 
				product.categories.includes(category.id)
			)
		)
	);
});

// Se deschide serverul pe portul specificat, și se apelează funcția [al 2-lea parametru]
// atunci când serverul a fost pornit cu succes.
app.listen(port, () => console.log(`Example app listening on port ${port}!`));