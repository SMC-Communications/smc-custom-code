import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

let section = document.querySelector('.our-process-section')

let items = gsap.utils.toArray('.our-process-process-item')
        let progress = 0
        let i = 1

        items.forEach((item) => {
            item.dataset.index = i++
            ScrollTrigger.create({
                trigger:item,
                start:"top bottom",
                onEnter:()=> {
                   section.style.cursor = 'var(--process-cursor-' + item.dataset.index + '), auto' 
                },
                onEnterBack:()=> {
                    section.style.cursor = 'var(--process-cursor-' + item.dataset.index + '), auto'
                }
            })
        })