const fs = require('fs');
const http = require('http');

// name : mg/FL
CaffineCount = {
  "redbull": 9.5,
  "monster": 10,
  "celsius": 12,
  "c4": 12.4
}

document.addEventListener('DOMContentLoaded', function() {
  // Get references to the input field and the output element
  const caffeine = document.getElementById('caffeine-amount')
  const water = document.getElementById('water-amount')

  // Get a reference to the button and add a click event listener
  const amountOfCaffeine = document.getElementById('caffeine-input');
  const amountOfOunces = document.getElementById('oz-input');
  button.addEventListener('click', function() {
      const caffeineValue = amountOfCaffeine.value;
      const ouncesValue = amountOfOunces.value;
      
      const currentCaffeine = parseInt(caffeine.textContent);
      const textContent = parseInt(water.textContent);

      // get the caffeineName passed in
      const drinkName = document.getElementById('drink-input').toLowerCase().replace(" ", "");
      // Get the value from the input field
      if (CaffineCount.has(drinkName)){
        const caffeineValue = int(CaffineCount[drinkName] * ouncesValue);
        document.getElementById("caffeine-amount").innerHTML = int (currentCaffeine - caffeineValue);
      }
      else{
        console.log(`${drinkName} is not available`);
      }

  });
});

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Handle HTTP requests here
});

// Start the server on a specific port
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Read the JSON data from "caffeine_database.json" file
fs.readFile('./caffeine_database.json', 'utf8', (err, data) => {
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