const fs = require('fs');
arrayUse = {}

// Read the JSON data from "caffeine_database.json" file
fs.readFile('caffeine_database.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  const parsedData = JSON.parse(data);
  arrayUse = parsedData;
});