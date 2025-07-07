const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]

 for (let j = 0; j < posts.length; j++) {
    if (posts[j].id === 2) {
      posts.splice(j, 1);
      break; 
    }
}

console.log(posts);