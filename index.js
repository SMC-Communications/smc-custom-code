/* === GLOBAL === */
import './styles/styles.css'
import './animations.js'
import './gsap-header.js'
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
        import ('./gsap-hero.js')
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
        import ('./slider.js')
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
        import ('./our-process.js')
    }
}