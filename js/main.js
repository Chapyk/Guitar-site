// songs block

let songsList = document.querySelector(".songs-list")
let buttons = document.querySelectorAll(".filter-btn")

function showSongs(type) {

    songsList.innerHTML = ""

    for (let song of songs) {

        if (type === "all" || song.type === type) {

            songsList.innerHTML += `
                <div class="song-card" onclick="openSong(${song.id})">

                    <h3>${song.name}</h3>
                    <p>${song.artist}</p>
                    <span>${song.type}</span>

                </div>
            `
        }
    }
}

showSongs("all")

for (let btn of buttons) {

    btn.addEventListener("click", function () {

        let type = this.dataset.type

        showSongs(type)
    })
}

function openSong(id) {
    window.location.href = "song.html?id=" + id
}