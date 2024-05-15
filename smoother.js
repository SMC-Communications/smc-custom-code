import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

let smoother = ScrollSmoother.create({
  smooth:2,
  effects: true,
  wrapper: '.site-wrapper',
  content: '.page-wrapper'
})

if (document.readyState === "loading") {
    // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", startSmoother);
  } else {
    // `DOMContentLoaded` has already fired
    //smoother = startSmoother();
  }
function startSmoother(){
  smoother = ScrollSmoother.create({
      smooth:1,
      effects: true,
      wrapper: '.site-wrapper',
      content: '.page-wrapper'
  })
}

export { smoother }