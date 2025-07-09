const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if (!this.drinkRequirements[drinkType])
        console.log("Sorry, we don't make filtered")
    else{
        beansAmount = this.beans - this.drinkRequirements[drinkType]
        if (beansAmount>0)
            this.beans = beansAmount
        else
            console.log("Sorry, we're all out of beans!")
    }
  }
}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
