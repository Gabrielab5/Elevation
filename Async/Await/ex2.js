async function getUserWithPosts(userId) {
    try{
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const user = await userResponse.json();
        const posts = await userPosts.json();
        if (!user || !posts) {
            throw new Error("User or posts not found");
        }
        return { user, posts };
    } catch (error) {
        console.error("Error fetching user with posts:", error);
        throw error;
    }
  }

getUserWithPosts(1)
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
