function caffeineChange(){
  // name : mg/FL
  const CaffineCount = new Map([
      ["redbull", 9.5],
      ["monster", 10],
      ["celsius", 12],
      ["c4", 12.4]
  ]);

  // Elements
  const caffeine = document.getElementById('caffeine-amount')
  const water = document.getElementById('water-amount')
  const amountOfCaffeine = document.getElementById('drink-input');
  const amountOfOunces = document.getElementById('oz-input');

  // get the caffeineName passed in
  const drinkName = (document.getElementById('drink-input').value).toLowerCase().replace(" ", "");
  
  // Get the value from the input field
  if (CaffineCount.has(drinkName)){

      let drinkAmountCaffiene = parseFloat(parseFloat(amountOfOunces.value) * CaffineCount.get(drinkName));

      if (drinkAmountCaffiene > parseFloat(caffeine.textContent)){
          caffeine.textContent = 0.0;
      }
      else{
          let drinkAmountWater = parseFloat(.07 * drinkAmountCaffiene);

          caffeine.textContent = (parseFloat(parseFloat(caffeine.textContent) - drinkAmountCaffiene)).toFixed(1);
          water.textContent = (parseFloat(water.textContent) + drinkAmountWater).toFixed(1);
      }

  }   
  else{
      // please display this on screen if possible
      console.log(`${drinkName} is not available`);
  }        
}
caffeineChange();