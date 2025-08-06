document.addEventListener('DOMContentLoaded', () => {
    const wisdomInput = document.getElementById('wisdomInput');
    const saveWisdomBtn = document.getElementById('saveWisdomBtn');
    const clearWisdomBtn = document.getElementById('clearWisdomBtn');
    const wisdomList = document.getElementById('wisdomList');
    const feedbackMessage = document.getElementById('feedbackMessage');
    let wisdom = [];
    
    function renderWisdom() {
        wisdomList.innerHTML = ''; 
        if (wisdom.length === 0) {
            const noWisdomDiv = document.createElement('div');
            noWisdomDiv.className = 'no-wisdom-message';
            noWisdomDiv.textContent = 'No wisdom saved yet. Start by adding some!';
            wisdomList.appendChild(noWisdomDiv);
            return;
        }
        wisdom.forEach(item => {
            const wisdomItemDiv = document.createElement('div');
            wisdomItemDiv.className = 'wisdom-item';
            wisdomItemDiv.dataset.id = item.id; 
            const textSpan = document.createElement('span');
            textSpan.className = 'wisdom-text';
            textSpan.textContent = item.text;
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-wisdom-btn';
            deleteButton.textContent = 'x';
            wisdomItemDiv.appendChild(textSpan);
            wisdomItemDiv.appendChild(deleteButton);
            wisdomList.appendChild(wisdomItemDiv);
        });
    }
    function loadWisdom() {
        const storedWisdom = localStorage.getItem('wisdom');
        if (storedWisdom) {
            try {
                wisdom = JSON.parse(storedWisdom);
            } catch (e) {
                console.error("Error parsing wisdom from Local Storage:", e);
                localStorage.removeItem('wisdom');
                wisdom = [];
            }
        }
        renderWisdom(); 
    }
    function saveWisdomToLocalStorage() {
        localStorage.setItem('wisdom', JSON.stringify(wisdom));
        console.log('Wisdom saved to Local Storage.');
    }
    if (saveWisdomBtn && wisdomInput) {
        saveWisdomBtn.addEventListener('click', () => {
            const inputText = wisdomInput.value.trim(); 
            if (inputText) {
                const newId = Date.now().toString(); 
                wisdom.push({ text: inputText, id: newId });
                renderWisdom(); 
                wisdomInput.value = ''; 
                if (wisdom.length % 2 === 0) saveWisdomToLocalStorage();
                else console.log('Wisdom not saved to Local Storage yet (waiting for next even count).');                      
            } 
        });
    } else {
        console.error("Save button or input field not found.");
    }
    if (clearWisdomBtn) {
        clearWisdomBtn.addEventListener('click', () => {
            wisdom = []; 
            localStorage.removeItem('wisdom');
            renderWisdom(); 
            console.log('All wisdom cleared from Local Storage.');
        });
    } else {
        console.error("Clear button not found.");
    }
    if (wisdomList) {
        wisdomList.addEventListener('click', (event) => {
            if (event.target.classList.contains('delete-wisdom-btn')) {
                const itemToDeleteDiv = event.target.closest('.wisdom-item');
                if (itemToDeleteDiv) {
                    const itemToDeleteId = itemToDeleteDiv.dataset.id;
                    wisdom = wisdom.filter(item => item.id !== itemToDeleteId);
                    saveWisdomToLocalStorage(); 
                    renderWisdom(); 
                    console.log(`Wisdom item with ID ${itemToDeleteId} deleted.`);
                }
            }
        });
    } else {
        console.error("Wisdom list container not found.");
    }
    loadWisdom();
});