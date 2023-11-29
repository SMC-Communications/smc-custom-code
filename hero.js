import {ready} from './ready.js'
import Typed from 'typed.js';

const headline = document.querySelector("#new-hero_heading-h1")
let count

createCircles()

if(headline){
    try {
        ready(()=>{
            window.requestAnimationFrame(step)
        })
    } catch (error) {
        console.error(error)
    }
}
let circles
function createCircles(){
    const container = document.querySelector(".new-hero_circles-container")
    if (container){
        const targetDiameter = 256
        let windowWidth = window.innerWidth
        count = Math.round(windowWidth / targetDiameter)
        let newDiameter = (windowWidth / count)

        try {
            container.style.setProperty('--d', newDiameter + 'px')
        } catch (error) {
            console.error(error)
        }

        for (let i = 0; i < (count * 2); i++){
            let el = document.createElement("div")
            el.classList.add("circle")
            try {
                container.append(el)
            } catch (error) {
                console.error(error)
            }
        }
        circles = [...document.querySelectorAll(".circle")]
    }
}
function invertColors(){
    const section = document.querySelector(".home_new-hero")
    if (section){
        try {
            section.classList.add("invert")
        } catch (error) {
            console.error(error)
        }
    }
}
function createTypedElement(){
    let typed = new Typed('#type-span', {
        strings: ['by \ninfluencing consumers at \nevery stage of their journey'],
        typeSpeed: 50,
        showCursor: false
    })
}

let start, previousTimeStamp
let circlesDone = false
let typewriterDone = false
let headingRevealed = false
let colorsInverted = false
i = 0

function step(timeStamp){
    if (start === undefined){
        start = timeStamp
    }
    const elapsed = timeStamp - start

    if (!headingRevealed && (elapsed > 0)){
        headline.classList.add("reveal")
        headingRevealed = true
    }
    if (circles && (elapsed > (500+(100*i))) && (i < circles.length)){
        circles[i].classList.add("reveal")
        if (i == (circles.length - 1)){
            circlesDone = true
        } else {
            i++
        }
    }
    if (!colorsInverted && (elapsed > 2500)){
        invertColors()
        colorsInverted = true
    }
    if (!typewriterDone && (elapsed > 3000)){
        createTypedElement()
        typewriterDone = true
    }

    previousTimeStamp = timeStamp

    if ((!typewriterDone) || (!circlesDone)) {
        window.requestAnimationFrame(step)
    }
}
