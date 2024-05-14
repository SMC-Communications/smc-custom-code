import './node_modules/tiny-slider/dist/tiny-slider.css'
import { tns } from './node_modules/tiny-slider/src/tiny-slider.js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let activeSlides = []

function nextSlide() {
    slider.goTo("next")
    slider.events.on("transitionEnd", playMainSlide)
}
function prevSlide() {
    slider.goTo("prev")
    slider.events.on("transitionEnd", playMainSlide)
}
function playMainSlide() {
    document.querySelector(".active-slide1 video").play()
}
function pauseMainSlide() {
    document.querySelector(".active-slide1 video").pause()
}
function updateSlides() {
    console.log("Update called")
    if (activeSlides.length) {
        activeSlides.forEach((slide) => {
            slide.removeEventListener("click", prevSlide)
            slide.removeEventListener("click", nextSlide)
            slide.classList.remove("active-slide0")
            slide.classList.remove("active-slide1")
            slide.classList.remove("active-slide2")
            slide.querySelector("video").pause()
        })
    }

    activeSlides = [...document.querySelectorAll("#tiny-slider .tns-slide-active")]
    console.log("Updating slides")
    activeSlides[0].classList.add("active-slide0")
    activeSlides[1].classList.add("active-slide1")
    activeSlides[2].classList.add("active-slide2")

    activeSlides[0].addEventListener("click", prevSlide)
    activeSlides[2].addEventListener("click", nextSlide)

}
function sliderInit() {
    console.log("Init called")
    updateSlides();
}
let slider
if (document.querySelector("#tiny-slider")) {

    try {
        slider = tns({
            container: '#tiny-slider',
            items: 3,
            slideBy: 1,
            speed: 500,
            swipeAngle: 30,
            preventActionWhenRunning: true,
            preventScrollOnTouch: "auto",
            onInit: sliderInit,
            controls: false,
            nav: false,
            responsive: {
                1280: {

                }
            }
        })
    } catch (error) {
        console.error(error)
    }
    try {
        slider.events.on("indexChanged", updateSlides)
    } catch (error) {
        console.error(error)
    }
}
/* INTERSECTION OBSERVER */
const scrollRoot = document.querySelector("[data-scroller]")
const videoSection = document.querySelector("[data-video-section]")
if (videoSection) {
    const options = {
        root: scrollRoot,
        threshold: 0
    }
    const onVideoIntersect = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                playMainSlide();
            } else {
                pauseMainSlide();
            }
        })
    }
    try {
        const videoObserver = new IntersectionObserver(onVideoIntersect, options)
        videoObserver.observe(videoSection)
    } catch (error) {
        console.error(error)
    }
}

/* SCROLL TRIGGER */
let section = document.getElementById('magnify-stories')
if (section){
    ScrollTrigger.create({
        trigger: '#magnify-stories',
        start: 'top top',
        end: ()=> "+=" + document.getElementById('magnify-stories').offsetHeight,
        pin:true
    })
}
