async function getAllData() {
    try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        if (!userResponse.ok || !postResponse.ok || !commentsResponse.ok) {
            throw new Error("Failed to fetch data");
        }
        const users = await userResponse.json();
        const posts = await postResponse.json();
        const comments = await commentsResponse.json();
        if (!users || !posts || !comments) {
            throw new Error("Failed to parse JSON");
        }
        return { users, posts, comments };
    } catch (error) {
        console.error("Error fetching all data:", error);
        throw error;
    }
}

getAllData()
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
