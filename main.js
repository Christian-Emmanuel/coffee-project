"use strict"


function renderCoffee(coffee) {
    let html = '<li class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee (coffees[i]);
    }
    return html;
}


//function to create new coffees and add them to coffees array//
function addNewCoffee(input){
   var newId = coffees.length+1;
   var newName = coffeeInput.value.toString();
   var newRoastName = newRoast.value.toString();
   input = {id: newId, name: newName, roast: newRoastName};
   coffees.push(input);
   mainUl.innerHTML = renderCoffees(coffees)
}



//filters coffees based off of value from roast selection//
function updateCoffees(e) {
    e.preventDefault (); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach ( function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push (coffee);
        } else if (selectedRoast === 'All') {
            filteredCoffees.push (coffee);
        }
    } );
    mainUl.innerHTML = renderCoffees (filteredCoffees);
}

//filters coffees based on keyup in text field//
function searchForCoffees() {
    var searchRoastType = coffeeSearch.value.toUpperCase();
    var filteredCoffees = [];
    coffees.forEach ( function (coffee) {
        if (coffee.name.toUpperCase ().includes (searchRoastType)) {
            filteredCoffees.push (coffee);
        }
    } )
    mainUl.innerHTML = renderCoffees (filteredCoffees);
}


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

var mainUl = document.querySelector ( '#coffee' );
mainUl.innerHTML = renderCoffees (coffees);

var roastSelection = document.querySelector ( '#roast-selection' );
var newRoast = document.querySelector(`#new-roast-selection`);

var submitButton = document.querySelector ( '#submit' );
submitButton.addEventListener ( 'click', updateCoffees );

var coffeeSearch = document.querySelector ( '#coffee-selection' );
coffeeSearch.addEventListener ( 'keyup', searchForCoffees );

var addedCoffee = document.querySelector("#new-coffee");
addedCoffee.addEventListener(`click`, addNewCoffee);

var coffeeInput = document.querySelector(`#new-coffee-selection`);