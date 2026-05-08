// songs block

let songsList = document.querySelector(".songs-list")
let buttons = document.querySelectorAll(".filter-btn")
let searchInput = document.querySelector(".search-input")

function showSongs(type) {

    songsList.innerHTML = ""

    let text = searchInput.value.toLowerCase()

    for (let song of songs) {

        let matchName = song.name.toLowerCase().includes(text)

        let matchType = type === "all" || song.type === type

        if (matchName && matchType) {

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

searchInput.addEventListener("input", function () {

    showSongs("all")
})