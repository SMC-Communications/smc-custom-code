import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
let elements = gsap.utils.toArray("[gsap]")
gsap.set("[gsap]",{opacity:0})
/*elements.forEach((element) => {
    gsap.from(element, {duration:1, yPercent:50, opacity:0, scrollTrigger:{trigger:element, start:"top 50%" }})
})*/
ScrollTrigger.batch("[gsap]", {
    // interval: 0.1, // time window (in seconds) for batching to occur. 
    // batchMax: 3,   // maximum batch size (targets)
    start:"top 66%",
    onEnter: batch => {
        gsap.to(batch, {duration:0.3, opacity:1, stagger: 0.2, ease:"power1.out"})
    },
    // also onLeave, onEnterBack, and onLeaveBack
    // also most normal ScrollTrigger values like start, end, etc.
  });