// songs block

let songsList = document.querySelector(".songs-list")

for (let song of songs) {

    songsList.innerHTML += `
        <div class="song-card">

            <h3>${song.name}</h3>

            <p>${song.artist}</p>

            <span>${song.type}</span>

        </div>
    `
}