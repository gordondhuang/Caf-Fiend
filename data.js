const fs = require('fs');

document.addEventListener('DOMContentLoaded', function() {
  // Get references to the input field and the output element
  const caffeine = document.getElementById('caffeine-amount')
  const water = document.getElementById('water-amount')

  // Get a reference to the button and add a click event listener
  const amountOfCaffeine = document.getElementById('caffeine-input');
  const amountOfOunces = document.getElementById('oz-input');
  button.addEventListener('click', function() {
      // Get the value from the input field
      const caffeineValue = amountOfCaffeine.value;
      const ouncesValue = amountOfOunces.value;
      
      const currentCaffeine = parseInt(caffeine.textContent);
      const textContent = parseInt(water.textContent);
  });
});

// Read the JSON data from "caffeine_database.json" file
fs.readFile('caffeine_database.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  const parsedData = JSON.parse(data);
  console.log(parsedData);

  // You can access and work with the parsed data here
  // For example, iterating through the items in the JSON array
  parsedData.forEach(drink => {
    drink = drink.toLowerCase().replace(" ", "")
    available = {}
    if (drink.includes("input")){
      available.push(drink);
    }
    // give the user back the available list to push in
  });
});