const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true,
    fridge: {
        price: 500,
        works: true,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const ownerName = kitchen.owner;
const hasOven = kitchen.hasOven;
const fridge = kitchen.fridge;
const fridgeWorks = fridge.works;
const fridgeRepairCost = fridge.price / 2;
const radish = fridge.items[1]; 
const radishName = radish.name;
const daysExpired = date - radish.expiryDate;

if (hasOven && fridgeWorks) {
    console.log(`${ownerName}'s ${radishName} expired ${daysExpired} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${radishName} in.`);
} else if (!hasOven && fridgeWorks) {
    console.log(`${ownerName}'s ${radishName} expired ${daysExpired} day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the ${radishName} in.`);
} else if (hasOven && !fridgeWorks) {
    console.log(`${ownerName}'s ${radishName} expired ${daysExpired} day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the ${radishName} in. And she'll have to pay ${fridgeRepairCost} to fix the fridge.`);
} else {
    console.log(`${ownerName}'s ${radishName} expired ${daysExpired} day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the ${radishName} in. And she'll have to pay ${fridgeRepairCost} to fix the fridge.`);
}  