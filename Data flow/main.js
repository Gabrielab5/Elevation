const posts = [
    { name: "Alice", text: "Just learned about the DOM! It's amazing." },
    { name: "Bob", text: "MVC seems like a great way to organize code." }
];

// --- CONTROLLER ---
const postsContainer = document.getElementById('posts-container');
const nameInput = document.getElementById('name-input');
const postInput = document.getElementById('post-input');
const postButton = document.getElementById('post-button');

function addPost() {
    const name = nameInput.value;
    const text = postInput.value;

    if (name && text) {
        posts.push({ name: name, text: text });
        render();
        nameInput.value = '';
        postInput.value = '';
    } else alert("Please enter both a name and a post text.");
}

postButton.addEventListener('click', addPost);

// --- REMOVE POST ---
postsContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-post')) {
        const postIndex = parseInt(event.target.getAttribute('data-id'));
        posts.splice(postIndex, 1);
        render();
    }
});

// --- VIEW ---
function render() {
    postsContainer.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        const headerDiv = document.createElement('div');
        headerDiv.className = 'post-header';
        headerDiv.textContent = post.name;
        const textP = document.createElement('p');
        textP.className = 'post-text';
        textP.textContent = post.text;

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-post';
        removeButton.textContent = 'X';
        removeButton.setAttribute('data-id', i);
        postDiv.appendChild(headerDiv);
        postDiv.appendChild(textP);
        postDiv.appendChild(removeButton);
        postsContainer.appendChild(postDiv);
    }
}

render();
