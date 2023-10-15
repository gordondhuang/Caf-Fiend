const fs = require('fs');

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
    console.log('Drink:', drink.Drink);
    console.log('Fluid Ounces:', drink['fl oz']);
    console.log('Calories:', drink.Calories);
    console.log('Caffeine (mg):', drink['Caffeine (mg)']);
    console.log('mg per floz:', drink.mg[' floz']);
    console.log('---');
  });
});