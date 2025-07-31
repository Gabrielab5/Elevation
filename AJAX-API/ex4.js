const API_KEY = "2JdGcFddAz3HQCS2axn3pBY2uaD1zpR4";
const query = "cats"; 

$.ajax({
    method: "GET",
    url: `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}`,
    success: function(response) {
        if (response.data && response.data.length > 0) {
            const firstGif = response.data[0];
            const embedUrl = firstGif.embed_url;
            const iframe = `<iframe src="${embedUrl}" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
            $('#gif-container').append(iframe);
        } else {
            $('#gif-container').append('<p>No GIFs found for cats.</p>');
        }
    },
    error: function(xhr, text, error) {
        console.log("Error fetching GIF:", text);
        $('#gif-container').append('<p>Error loading GIF. Please try again later.</p>');
    }
});