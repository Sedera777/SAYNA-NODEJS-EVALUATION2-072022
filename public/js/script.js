'use strict'

function displayStar() {
    const notes = document.querySelectorAll('.n')
    const stars = document.querySelectorAll('.star')
    for (let i = 0; i < notes.length; i++) {
        for (let i = 0; i < stars.length; i++) {
            if (notes[i].innerText == 1) {
                stars[i].innerText = '⭐'
            } else if (notes[i].innerText == 2) {
                stars[i].innerText = '⭐⭐'
            } else if (notes[i].innerText == 3) {
                stars[i].innerText = '⭐⭐⭐'
            } else if (notes[i].innerText == 4) {
                stars[i].innerText = '⭐⭐⭐⭐'
            } else {
                stars[i].innerText = '⭐⭐⭐⭐⭐'
            }
        }
    }
}
displayStar()