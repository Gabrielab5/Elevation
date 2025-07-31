const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            if (data.items && data.items.length > 0) {
                data.items.forEach(item => {
                    const book = item.volumeInfo;
                    const title = book.title;
                    const authors = book.authors ? book.authors.join(', ') : 'Unknown';
                    const isbn = book.industryIdentifiers ? book.industryIdentifiers.find(id => id.type === "ISBN_13" || id.type === "ISBN_10") : null;
                    const isbnValue = isbn ? isbn.identifier : 'N/A';

                    console.log(`Title: ${title}, Author: ${authors}, ISBN: ${isbnValue}`);
                });
            } else {
                console.log(`No books found for ${queryType}: ${queryValue}.`);
            }
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
}

fetch("isbn", 9789814561778);
fetch("title", "How to Win Friends and Influence People");
fetch("author", "Stephen King");