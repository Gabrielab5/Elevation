const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            //console.log(data);
            if(data.items && data.items.length > 0) {
                const book = data.items[0].volumeInfo;
                console.log(`Title: ${book.title}, Author: ${book.authors ? book.authors.join(', ') : 'Unknown'}`);
            } else {
                console.log("No book found for this ISBN.");
            }
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
}

fetch("isbn", 9789814561778);
fetch("title", "How to Win Friends and Influence People");