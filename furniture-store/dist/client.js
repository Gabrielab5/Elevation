let money = 1500

document.addEventListener('DOMContentLoaded', () => {
    const priceCheckBtn = document.getElementById('priceCheckBtn');
    const buyBtn = document.getElementById('buyBtn');
    const furnitureNameInput = document.getElementById('furnitureName');
    const buyNameInput = document.getElementById('buyName');
    const priceResultDiv = document.getElementById('priceResult');
    const buyResultDiv = document.getElementById('buyResult');
    
    if (!priceCheckBtn || !buyBtn || !furnitureNameInput || !buyNameInput || !priceResultDiv || !buyResultDiv) {
        console.error('Error: One or more required HTML elements were not found.');
        return;
    }

    const updateMoneyDisplay = () => {
        moneyDisplay.textContent = `$${money}`;
    };
    updateMoneyDisplay();

    priceCheckBtn.addEventListener('click', async () => {
        const furnitureName = furnitureNameInput.value.trim();
        priceResultDiv.textContent = ''; 
        
        if (!furnitureName) {
            priceResultDiv.textContent = 'Please enter a furniture name.';
            return;
        }

        try {
            const url = `/priceCheck/${furnitureName}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.price !== null) {
                priceResultDiv.textContent = `The price of a ${furnitureName} is $${data.price}.`;
                priceResultDiv.classList.add('text-green-600');
                priceResultDiv.classList.remove('text-red-600');
            } else {
                priceResultDiv.textContent = `Sorry, a "${furnitureName}" was not found in our store.`;
                priceResultDiv.classList.add('text-red-600');
                priceResultDiv.classList.remove('text-green-600');
            }
        } catch (error) {
            console.error('Error fetching price:', error);
            priceResultDiv.textContent = 'An error occurred. Please try again.';
            priceResultDiv.classList.add('text-red-600');
            priceResultDiv.classList.remove('text-green-600');
        }
    });

    buyBtn.addEventListener('click', async () => {
        const furnitureName = buyNameInput.value.trim();
        buyResultDiv.textContent = ''; 
        
        if (!furnitureName) {
            buyResultDiv.textContent = 'Please enter a furniture name to buy.';
            return;
        }

        try {
            const priceCheckUrl = `/priceCheck/${furnitureName}`;
            const priceResponse = await fetch(priceCheckUrl);
            const priceData = await priceResponse.json();

            if (priceData.price === null) {
                buyResultDiv.textContent = `Sorry, a "${furnitureName}" was not found in our store.`;
                buyResultDiv.classList.add('text-red-600');
                buyResultDiv.classList.remove('text-green-600');
                return;
            }

            const itemPrice = priceData.price;
        if (money >= itemPrice) {
            const url = `/buy/${furnitureName}`;
            const response = await fetch(url);
            const data = await response.json();
            money-= itemPrice;
            updateMoneyDisplay();

            if (data.error) {
                buyResultDiv.textContent = `Error: ${data.error}.`;
                buyResultDiv.classList.add('text-red-600');
                buyResultDiv.classList.remove('text-green-600');
            } else {
                buyResultDiv.textContent = `Congratulations, you've just bought a ${data.name} for $${data.price}. There are ${data.inventory} left now in the store.`;
                buyResultDiv.classList.add('text-green-600');
                buyResultDiv.classList.remove('text-red-600');
            }
        } else {
                // If not enough money
                buyResultDiv.textContent = `You don't have enough money to buy a ${furnitureName}. You should get a job!`;
                buyResultDiv.classList.add('text-red-600');
                buyResultDiv.classList.remove('text-green-600');
            }
        } catch (error) {
            console.error('Error during purchase:', error);
            buyResultDiv.textContent = 'An error occurred. Please try again.';
            buyResultDiv.classList.add('text-red-600');
            buyResultDiv.classList.remove('text-green-600');
        }
    });
});
