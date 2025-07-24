import AutoCompleteTrie from './AutoCompleteTrie.js';

   const trie = new AutoCompleteTrie();
   const addWordInput = document.getElementById('word-adding-input');
   const addWordButton = document.getElementById('add-word-button');
   const suggestInput = document.getElementById('word-suggest-input');
   const suggestionsContainer = document.getElementById('suggestions-container');
   const wordsNumberDisplay = document.getElementById('words-number');
   const successMessage = document.getElementById('success-message');
   const failMessage = document.getElementById('fail-message');

   addWordButton.addEventListener('click', () => {
      const word = addWordInput.value.trim().toLowerCase();
      const wordRegex = /^[a-z]+$/;

      if (!word) {
         showMessage(failMessage, "Word cannot be empty.");
         return;
      }
      if (word.length <= 1) {
         showMessage(failMessage, "Word must be longer than 1 character.");
         return;
      }
      if (!wordRegex.test(word)) {
         showMessage(failMessage, "Word can only contain letters (a-z).");
         return;
      }
      const wasAdded = trie.addWord(word);
      if (wasAdded) {
         showMessage(successMessage, `Successfully added "${word}"!`);
         wordsNumberDisplay.textContent = trie.wordCount;
      }
      else {
        showMessage(failMessage, `The word "${word}" already exists.`);
      }
      
       addWordInput.value = '';
   });

   suggestInput.addEventListener('input', () => {
       const prefix = suggestInput.value.trim().toLowerCase();
       if (prefix) {
           const suggestions = trie.predictWords(prefix);
           renderSuggestions(suggestions, prefix);
       } else {
           suggestionsContainer.innerHTML = '';
       }
   });  

   document.addEventListener('click', (event) => {
       if (!event.target.closest('.suggestions-wrapper')) {
           suggestionsContainer.innerHTML = '';
       }
   });

   function renderSuggestions(suggestions, prefix) {
       suggestionsContainer.innerHTML = '';
       suggestions.slice(0, 10).forEach(word => {
           const item = document.createElement('div');
           item.className = 'suggestion-item';
           item.textContent = word;
           const restOfWord = word.substring(prefix.length);
           item.innerHTML = `<span class="suggestion-highlight">${prefix}</span>${restOfWord}`;
           item.addEventListener('click', () => {
               suggestInput.value = word;
               suggestionsContainer.innerHTML = word;
           });
           suggestionsContainer.appendChild(item);
       });
   } 

   function showMessage(element, message) {
       successMessage.style.display = 'none';
       failMessage.style.display = 'none';               
       element.textContent = message;
       element.style.display = 'block';               
       setTimeout(() => {
           element.style.display = 'none';
       }, 3000);
   }
