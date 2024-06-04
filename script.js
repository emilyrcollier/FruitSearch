document.addEventListener('DOMContentLoaded', function() {
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

//event listener for key strokes
input.addEventListener('keyup', function(event) {
	console.log('user typed:', event.target.value);




	const userInput = event.target.value;
	const results = search(userInput);
	console.log('filtered list:', results);


});


const inputElement = document.getElementById('fruit');
const resultsElement = document.getElementById('results'); 

//hover event listeners
resultsElement.addEventListener('mouseover', function(e) {
	const hoveredItem = e.target;
	if(hoveredItem.classList.contains('dropdown-item')) {
		 const inputVal = inputElement ? inputElement.value : '';
		 showSuggestions([hoveredItem], inputVal);
		console.log('hovered over', hoveredItem.textContent);
	}
});
resultsElement.addEventListener('mouseout', function(e) {
	const suggestions = Array.from(resultsElement.getElementsByClassName('dropdown-item'));
	suggestions.forEach(suggestion => {
		suggestion.classList.remove('highlighted');
	});
});


//click event listener
resultsElement.addEventListener('click', function(e) {
	const clickedItem = e.target;
	if (clickedItem.classList.contains('dropdown-item')) {
		const clickedText = clickedItem.textContent;
		console.log('clicked on suggestion:', clickedText);
	}
});

resultsElement.addEventListener('click', useSuggestion);





const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// TODO
const normalizedInput = str.toLowerCase().replace(/\W/g, '');
return fruit.filter(item => {
	const normalizedItem = item.toLowerCase().replace(/\W/g, '');
	return [normalizedInput].some(char => normalizedItem.includes(char));
});

}



function searchHandler(e) {
	// TODO
const userInput = e.target.value.toLowerCase().replace(/\W/g, '');
const results = search(userInput);


resultsElement.innerHTML = '';

if (results.length > 0 && userInput !== '') {
	resultsElement.style.display = 'block';

	results.forEach(item => { 
		const div = document.createElement('div');
		div.className = 'dropdown-item';
		div.textContent = item;
		resultsElement.appendChild(div);
	
	});
	} else {
		resultsElement.style.display = 'none';
 	}
	
}




function showSuggestions(results, inputVal) {

	// TODO
	const highlightedText = inputVal.toLowerCase();
	results.forEach(item => {
		const itemText = item.textContent.toLowerCase();
		const index = itemText.indexOf(highlightedText);
		if (index !== -1) {
			item.classList.add('highlighted');
		} else {
			item.classList.remove('highlighted');
		}
	});

		}
	



function useSuggestion(e) {
	// TODO
	const clickedItem = e.target;
	const inputElement = document.getElementById('fruit');

	if(clickedItem.classList.contains('dropdown-item')) {
		inputElement.value = clickedItem.textContent;
		resultsElement.style.display = 'none';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion); 

});



