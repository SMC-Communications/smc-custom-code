import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


let sections = gsap.utils.toArray("section")
let header = document.querySelector("[data-header]")
console.log(sections[0].dataset.section)
header.setAttribute("data-theme", sections[0].dataset.section)
let height = header.offsetHeight;

sections.forEach(section => {
    ScrollTrigger.create({
        trigger:section,
        start:()=> "top +=" + (height / 2) + "px",
        onUpdate:()=> {
            let theme = section.dataset.section;
            header.setAttribute("data-theme", theme)
        }
    })
});
// Select the node that will be observed for mutations
const targetNode = document.getElementById("main-nav");

// Options for the observer (which mutations to observe)
const config = { attributes: true};

// Callback function to execute when mutations are observed
let navOpen = false
const callback = (mutationList, mutationObserver) => {
  for (const mutation of mutationList) {
    if (mutation.type === "attributes") {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
      if ((mutation.attributeName === "data-nav-menu-open") && !navOpen){
        console.log("open")
        navOpen = true
        header.classList.add("nav-open")
      } else if ((mutation.attributeName === "data-nav-menu-open") && navOpen){
        console.log("closed")
        navOpen = false
        header.classList.remove("nav-open")
      }
    }
  }
}
// Create an observer instance linked to the callback function
const mutationObserver = new MutationObserver(callback);

// Start observing the target node for configured mutations
mutationObserver.observe(targetNode, config)