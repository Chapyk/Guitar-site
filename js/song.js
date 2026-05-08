// song page

let params = new URLSearchParams(window.location.search)

let id = params.get("id")

let songBlock = document.querySelector(".song-page")

let song = songs.find(item => item.id == id)

songBlock.innerHTML = `
    <h2>${song.name}</h2>
    <p>${song.artist}</p>

    <pre>${song.type}</pre>
`