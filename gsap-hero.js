import { gsap } from "gsap";

/* The following plugin is a Club GSAP perk */
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

let circles
createCircles()

window.addEventListener('load', ()=>{
    let root = document.documentElement
    let hero = document.querySelector(".gsap-hero_light-bg")
    let header = document.querySelector(".header_container")
    let heading = document.querySelector(".gsap-hero_heading")
    let split, tagline, typed
    
    if (heading){
        heading.style.opacity = "1"
        split = new SplitText(".gsap-hero_heading")
        tagline = split.chars.slice(0, 15)
        typed = split.chars.slice(15, -1)
    }
 
    let tl = gsap.timeline()

    // Draw Circles
    tl.to(circles, {duration:0, opacity:1, stagger:0.05, ease:"none"})

    //Invert colors
    tl.to(hero, {duration:0.5, opacity:0, ease:"power1.inOut"},"-=0.25")
    tl.to(tagline, {duration:0.5, color:"var(--light-teal)", ease:"power1.inOut"}, "<")
    tl.to(circles, {duration:0.5, borderColor:"var(--light-teal)", ease:"power1.inOut"}, "<")
    tl.to(root, {duration:0.5, ["--nav-color"]:"var(--light-teal)",  ease:"power1.inOut"}, "<")

    //Reveal Tagline
    tl.to(tagline, {duration:1, opacity:1, ease:"power1.out"})    

    //Type Headeing
    tl.to(typed, {duration:0, color:"var(--light-teal)"},"-=0.5")
    tl.from(typed, {duration:0.5, stagger:0.03, rotateZ:"1deg", translateY:"0.1em", ease:"power1.out", onComplete: preloadVideo},"<")
    tl.to(typed, {duration:0.5, stagger:0.03, opacity: 1, ease:"power1.out", onComplete: preloadVideo},"<")

    //Reveal Header
    tl.to(header, {duration:0.5, opacity:1, ease:"power1.out"}, "+=0.25")
})

function preloadVideo(){
    console.log("Preloading Metadata")
    videos = [...document.querySelectorAll(".slider-video")]
    videos.forEach(el => {
        el.setAttribute("preload", "metadata")
    });
}

function createCircles(){
    const container = document.querySelector(".gsap-hero_circles-wrapper")
    if (container){
        const targetDiameter = container.offsetHeight
        let windowWidth = window.innerWidth
        count = 2 * Math.round((windowWidth / targetDiameter) / 2)
        let newDiameter = (windowWidth / count)

        try {
            container.style.setProperty('--d', newDiameter + 'px')
            container.style.setProperty('--offset', (newDiameter / -4) + 'px')
        } catch (error) {
            console.error(error)
        }

        for (let i = 0; i < (count * 2); i++){
            let el = document.createElement("div")
            el.classList.add("gsap-hero_circle")
            try {
                container.append(el)
            } catch (error) {
                console.error(error)
            }
        }
        circles = [...document.querySelectorAll(".gsap-hero_circle")]
    }
}