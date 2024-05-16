/* === GLOBAL === */
import './styles/styles.css'
import './animations.js'
import './gsap-header.js'
import './our-process.js'
import './smoother.js'
import { gsap } from 'gsap'

/* === HERO === */
let hero, header
try {
    hero = document.getElementById('gsap-hero')
    header = document.querySelector(".header_container")
} catch (error) {
    console.error(error)
} finally {
    if (hero){
        console.debug("loading gsap-hero.js...")
        import ('./gsap-hero.js')
        .then(()=>{
            console.debug("gsap-hero.js loaded")
        })
    } else {
        gsap.to(header, {duration:0, opacity:1, ease:"none"})
    }
}
/* === SLIDER === */
let slider
try {
    slider = document.getElementById('tiny-slider')
} catch (error) {
    console.error(error)
} finally {
    if (slider){
        console.debug("loading slider.js...")
        import ('./slider.js')
        .then(()=>{
            console.debug("slider.js loaded")
        })
    }
}
/* === OUR PROCESS === */
let section
try {
    section = document.getElementById('process-section')
} catch (error) {
    console.error(error)
} finally {
    if (section){
        console.log("loading our-process.js...")
        import ('./our-process.js')
        .then(()=>{
            console.debug("our-process.js loaded")
        })
    }
}