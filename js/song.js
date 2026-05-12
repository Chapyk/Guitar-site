// song page

let params = new URLSearchParams(window.location.search)

let id = params.get("id")

let song = songs.find(s => s.id == id)

let title = document.querySelector(".song-title")
let artist = document.querySelector(".song-artist")
let content = document.querySelector(".song-content")
let buttons = document.querySelectorAll(".mode-btn")

title.innerText = song.name
artist.innerText = song.artist

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light")
}

function showMode(mode) {

    if (mode === "chords") {
        content.innerHTML = formatChords(song.chords)
    }

    if (mode === "tabs") {
        content.innerText = song.tabs
    }
}

showMode("chords")
buttons[0].classList.add("active")

for (let btn of buttons) {

    btn.addEventListener("click", function () {

        let mode = this.dataset.mode

        showMode(mode)

        for (let b of buttons) {
            b.classList.remove("active")
        }

        this.classList.add("active")
    })
}

function formatChords(text) {

    let chords = [
        "A", "Am",
        "B", "Bm",
        "C", "Cm",
        "D", "Dm",
        "E", "Em",
        "F", "Fm",
        "G", "Gm",

        "A#", "C#", "D#", "F#", "G#",

        "A#m", "C#m", "D#m", "F#m", "G#m",

        "Em9",
        "G6",
        "Baug"
    ]

    let result = text

    for (let chord of chords) {

        let regex = new RegExp(`\\b${chord}\\b`, "g")

        result = result.replace(
            regex,
            `<span class="chord">${chord}</span>`
        )
    }

    return result
}