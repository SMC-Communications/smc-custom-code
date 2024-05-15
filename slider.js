import './node_modules/tiny-slider/dist/tiny-slider.css'
import { tns } from './node_modules/tiny-slider/src/tiny-slider.js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//import './gsap-hero.js'
import { preloadVideo } from './gsap-hero.js'
import { smoother } from './smoother.js'

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
    activeSlides[0].classList.add("active-slide0")
    activeSlides[1].classList.add("active-slide1")
    activeSlides[2].classList.add("active-slide2")

    activeSlides[0].addEventListener("click", prevSlide)
    activeSlides[2].addEventListener("click", nextSlide)

}
function sliderInit() {
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
/*const scrollRoot = document.querySelector("[data-scroller]")
const videoSection = document.querySelector("[data-video-section]")
if (videoSection) {
    const options = {
        root: scrollRoot,
        threshold: 0
    }
    const onVideoIntersect = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                //playMainSlide();
            } else {
                //pauseMainSlide();
            }
        })
    }
    try {
        const videoObserver = new IntersectionObserver(onVideoIntersect, options)
        videoObserver.observe(videoSection)
    } catch (error) {
        console.error(error)
    }
}*/

/* SCROLL TRIGGER */
// Fallback to load videos
ScrollTrigger.create({
    trigger: '#magnify-stories',
    start: "top 150%",
    once:true,    
    onEnter: ()=> {
        console.log("loading")
        preloadVideo()
    }
})

mm = gsap.matchMedia()
mm.add('(pointer:fine)',
    () => {
        let prevProgress = 0
        let length = slider.getInfo().slideCount
        let start, smoothStart, prevDirection

        ScrollTrigger.create({
            trigger: '#magnify-stories',
            start: 'top top',
            pin:true,
            end: self => "+=" + (self.trigger.offsetHeight * length * 0.5),
            onEnter: self => {
                start = smoother.scrollTop()
                smoothStart = smoother.smooth()
                console.debug("Start:" + start)
            },
            onToggle: self => {
                if (self.isActive){
                    playMainSlide()
                } else {
                    pauseMainSlide()
                }
            },
            onUpdate: self => {
                let delta = Math.abs(self.progress - prevProgress)
                if (delta > (1 / (length / 0.5))){

                    console.debug("Scroll:" + self.scroll())
                    if ((self.direction === 1) && (prevDirection === 1)){
                        nextSlide()
                    }
                    prevProgress = self.progress
                    prevDirection = self.direction
                }
            },
            onEnterBack: self => {
                console.debug("Scrolling to:" + (start))
                //smoother.smooth(0);
                smoother.scrollTop(start)
                setTimeout(()=>{
                    self.kill()
                    //smoother.smooth(smoothStart)
                }, 1000)
            }
        })
    }
)
mm.add('(pointer:coarse)',
    () => {
        let prevProgress = 0
        let length = slider.getInfo().slideCount
        let start

        ScrollTrigger.create({
            trigger: '#magnify-stories',
            start: 'top top',
            pin:true,
            normalizeScroll: true,
            end: self => "+=" + self.trigger.offsetHeight,
            onEnter: self => {
                start = smoother.scrollTop()
                console.debug("Start:" + start)
            },
            onToggle: self => {
                if (self.isActive){
                    playMainSlide()
                } else {
                    pauseMainSlide()
                }
            },
            onEnterBack: self => {
                console.debug("Scrolling to:" + (start))
                smoother.scrollTop(start)
                self.kill()
            }
        })
    }
)