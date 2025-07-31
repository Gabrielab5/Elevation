const fetch = function (ISBN) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,
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

fetch(9780575087057);
fetch(9782806269171);
fetch(1440633908);
fetch(9781945048470);
fetch(9780307417138);