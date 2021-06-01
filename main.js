"use strict"


function renderCoffee(coffee) {
	var coffeeDiv = document.createElement("div")
	coffeeDiv.setAttribute("class", "coffee")

	var coffeeHeader = document.createElement("h1")
	coffeeHeader.textContent = coffee.name

	var roastParagraph = document.createElement("p")
	roastParagraph.textContent = coffee.roast


	coffeeDiv.append(coffeeHeader, roastParagraph)

	return coffeeDiv;
}


function renderCoffees(coffees) {
	coffeesDiv.replaceChildren();
	for (var i = coffees.length - 1; i >= 0; i--) {
		coffeesDiv.appendChild(renderCoffee(coffees[i]));
	}
}


//function to create new coffees and add them to coffees array//
function addNewCoffee(input) {
	var newId = coffees.length + 1;
	var newName = coffeeInput.value.toString();
	var newRoastName = newRoast.value.toString();
	input = {id: newId, name: newName, roast: newRoastName};
	coffees.push(input);
	renderCoffees(coffees)
}


//filters coffees based off of value from roast selection//
function updateCoffees(e) {
	e.preventDefault(); // don't submit the form, we just want to update the data
	var selectedRoast = roastSelection.value;
	var filteredCoffees = [];
	coffees.forEach(function (coffee) {
		if (coffee.roast === selectedRoast) {
			filteredCoffees.push(coffee);
		} else if (selectedRoast === 'All') {
			filteredCoffees.push(coffee);
		}
	});
	renderCoffees(filteredCoffees);
}

//filters coffees based on keyup in text field//
function searchForCoffees() {
	var searchRoastType = coffeeSearch.value.toUpperCase();
	var filteredCoffees = [];
	coffees.forEach(function (coffee) {
		if (coffee.name.toUpperCase().includes(searchRoastType)) {
			filteredCoffees.push(coffee);
		}
	})
	renderCoffees(filteredCoffees);
}

function deleteCoffee() {
	coffees.pop()
	renderCoffees(coffees)
}

// function saveCoffees(arr) {
// 	localStorage.setItem("coffees", JSON.stringify(arr))
// }
//
// function getCoffees(){
// 	return JSON.parse(localStorage.getItem("coffees"));
// }
//
// console.log(getCoffees())


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
	{id: 1, name: 'Light City', roast: 'light'},
	{id: 2, name: 'Half City', roast: 'light'},
	{id: 3, name: 'Cinnamon', roast: 'light'},
	{id: 4, name: 'City', roast: 'medium'},
	{id: 5, name: 'American', roast: 'medium'},
	{id: 6, name: 'Breakfast', roast: 'medium'},
	{id: 7, name: 'High', roast: 'dark'},
	{id: 8, name: 'Continental', roast: 'dark'},
	{id: 9, name: 'New Orleans', roast: 'dark'},
	{id: 10, name: 'European', roast: 'dark'},
	{id: 11, name: 'Espresso', roast: 'dark'},
	{id: 12, name: 'Viennese', roast: 'dark'},
	{id: 13, name: 'Italian', roast: 'dark'},
	{id: 14, name: 'French', roast: 'dark'},
];

// function setInitialCoffees() {
// 	if(!localStorage.getItem("coffees"))
// 	saveCoffees(coffees)
// }

// setInitialCoffees()
//


var coffeesDiv = document.querySelector('#coffee');
renderCoffees(coffees);

var roastSelection = document.querySelector('#roast-selection');
var newRoast = document.querySelector(`#new-roast-selection`);

var submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', updateCoffees);

var coffeeSearch = document.querySelector('#coffee-selection');
coffeeSearch.addEventListener('keyup', searchForCoffees);

var addedCoffee = document.querySelector("#new-coffee");
addedCoffee.addEventListener(`click`, addNewCoffee);

var coffeeInput = document.querySelector(`#new-coffee-selection`);

var removeCoffee = document.querySelector(`#delete-coffee`)
removeCoffee.addEventListener(`click`, deleteCoffee)