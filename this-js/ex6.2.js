const coffeeShop = {
  beans: 40,
  money:100,

  drinkRequirements: {
    latte: {beanRequirement: 10, price: 5},
    americano: {beanRequirement: 5, price: 5},
    doubleShot: {beanRequirement: 15, price: 5},
    frenchPress: {beanRequirement: 12, price: 5}
  },

  makeDrink: function (drinkType) {
    const drink = this.drinkRequirements[drinkType];

    if (!drink) {
      console.log("Sorry, we don't make " + drinkType);
    } else if (this.beans >= drink.beanRequirement) {
      this.beans -= drink.beanRequirement;
    } else {
      console.log("Sorry, we're all out of beans!");
    }
  },

  buyBeans: function (numBeans){
    let beanCost =2
    this.money -= numBeans*beanCost
  },

  buyDrink: function (drinkType){  
    const drink = this.drinkRequirements[drinkType];

    if (!drink) {
      console.log("Sorry, we don't make " + drinkType);
    } else if (this.beans >= drink.beanRequirement) {
      this.money -= drink.price;
      this.makeDrink(drinkType);
    } else {
      this.makeDrink(drinkType); 
    }
}
}

coffeeShop.buyDrink("latte"); 
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should console "Sorry, we're all out of beans"
