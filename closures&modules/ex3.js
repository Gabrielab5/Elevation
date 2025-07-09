
const SongsManager = function(){

    const _urlStart = "https://www.youtube.com/watch?v="
    const _songs = {}
    const addSong = (song, url) => _songs[song]=url.slice(_urlStart.length)
    const getSong = song => console.log(_urlStart + _songs[song])
    
    return{
        addSong:addSong,
        getSong:getSong
    }
}



const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
