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

    let words = text.split(" ")

    let result = ""

    let chords = [
        "Am", "C", "G", "G6", "F",
        "Em", "Em9", "Dm", "D", "A",
        "A#", "E", "Baug", 
    ]

    for (let word of words) {

        if (chords.includes(word)) {

            result += `<span class="chord">${word}</span> `
        }

        else {
            result += word + " "
        }
    }

    return result
}