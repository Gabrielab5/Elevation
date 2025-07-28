// Simulated inventory database
const inventory = {
  'laptop': { price: 999, stock: 5 },
  'mouse': { price: 25, stock: 10 },
  'keyboard': { price: 75, stock: 0 }, // Out of stock
  'monitor': { price: 299, stock: 3 }
};

function checkInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 500ms (simulating database check)
  // 2. Checks if all items are in stock
  // 3. Resolves with items if all available
  // 4. Rejects with specific item that's out of stock
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const outOfStockItems = [];
        const confirmedOrderItems = {}; 
        for (const itemName in items) {
            if (inventory[itemName] && inventory[itemName].stock > 0) {
                confirmedOrderItems[itemName] = { ...inventory[itemName] };
            } else {
                outOfStockItems.push(itemName);
            }
        }
        if (outOfStockItems.length > 0) {
            reject(new Error(`Inventory check failed: The following items are out of stock or invalid: ${outOfStockItems.join(', ')}`));
        } else {
            console.log(`✓ Inventory check passed for: ${Object.keys(confirmedOrderItems).join(', ')}`);
            resolve(confirmedOrderItems);
        }
       
    },500)
  })
}

function calculateTotal(items) {
  // TODO: Return a promise that:
  // 1. Waits 200ms
  // 2. Calculates total price including 8% tax
  // 3. Resolves with { subtotal, tax, total }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const tax = 0.08
        let subtotal = 0
        subtotal = Object.values(items).reduce((sum, itemDetails) => {
                const itemPrice = typeof itemDetails.price === 'number' ? itemDetails.price : 0;
                const itemStock = typeof itemDetails.stock === 'number' ? itemDetails.stock : 0;
                return sum + (itemStock*itemPrice)
            },0);
        const total = subtotal + subtotal * tax
        resolve({
        subtotal: parseFloat(subtotal.toFixed(2)),
        tax: parseFloat(tax.toFixed(2)), 
        total: parseFloat(total.toFixed(2))   
      });
    }, 200)
  })
}

function processPayment(amount) {
  // TODO: Return a promise that:
  // 1. Waits 1500ms (simulating payment processing)
  // 2. 90% success rate
  // 3. Resolves with { transactionId, amount, status: 'success' }
  // 4. Rejects with payment failure error
  return new Promise((resolve, reject) => {
    setTimeout( () => {
        const randomNumber = Math.random();
        if(randomNumber < 0.9 ){
            const transactionId = Math.floor(Math.random() * 1000000);
            resolve({ transactionId: transactionId, amount: amount, status : 'success'})
            console.log(`✓ Payment for $${amount} successful. Transaction ID: ${transactionId}`);
        } else { 
        reject(new Error(`Payment for $${amount} failed.`));
        console.warn(`✗ Payment for $${amount} failed.`);
        }
    },1500)
  })
}

function updateInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 300ms
  // 2. Reduces stock for each item
  // 3. Resolves with updated inventory status
  return new Promise((resolve, reject) => {
    setTimeout( () => {
        const updatedItemNames = [];
        for (const itemName in items) {
            if (inventory[itemName] && inventory[itemName].stock > 0) {
                inventory[itemName].stock -= 1; 
                updatedItemNames.push(itemName);
            }
      }
      console.log(`✓ Inventory updated for: ${updatedItemNames.join(', ')}`);
      resolve({
        message: `Inventory updated for: ${updatedItemNames.join(', ')}.`,
        updatedInventorySnapshot: { ...inventory } 
      });
    },300)
  })
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately
function checkout(itemNames) {
  return new Promise((resolve, reject) => {
    let orderItemsDetails = {};
    let calculatedTotals = {}; 
    let paymentConfirmation = {}; 

    console.log(`\n checkout for: ${itemNames.join(', ')} ---`);
    const requestedItemsForCheck = {};
    let hasInvalidRequestedItem = false;
    itemNames.forEach(name => {
      if (inventory[name])  requestedItemsForCheck[name] = inventory[name];
      else {
        hasInvalidRequestedItem = true;
        reject(new Error(`Checkout failed: Requested item '${name}' does not exist in inventory.`));
        return; 
      }
    });

    if (hasInvalidRequestedItem)  return;
    
    checkInventory(requestedItemsForCheck)
      .then(checkedItems => {
        orderItemsDetails = checkedItems;
        return calculateTotal(orderItemsDetails); 
      })
      .then(totals => {
        calculatedTotals = totals; 
        return processPayment(calculatedTotals.total); 
      })
      .then(paymentResult => {
        paymentConfirmation = paymentResult;
        return updateInventory(orderItemsDetails);
      })
      .then(updateResult => {
        resolve({
          status: 'Order Placed Successfully',
          itemsOrdered: Object.keys(orderItemsDetails),
          transactionDetails: calculatedTotals,
          paymentConfirmation: paymentConfirmation,
          inventoryUpdateMessage: updateResult.message,
          currentInventorySnapshot: updateResult.updatedInventorySnapshot 
        });
      })
      .catch(error => {
        console.error(`✗ Checkout process failed: ${error.message}`);
        reject(error); 
      });
  });
}

// Test cases:
checkout(['laptop', 'mouse'])           // Should succeed
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['laptop', 'keyboard'])        // Should fail - keyboard out of stock
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop']) // Might fail at payment (10% chance)
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));
