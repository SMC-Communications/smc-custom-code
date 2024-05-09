const header = document.querySelector('[data-header]')
const sections = [...document.querySelectorAll('[data-section]')]
const scrollRoot = document.querySelector('body')

let prevYPosition = 0
let direction = 'up'

const options = {
  root: scrollRoot,
  rootMargin: `${header.offsetHeight * -0.5}px 0px ${(window.innerHeight - header.offsetHeight) * -1}px 0px`,
  threshold: 0
}

const getTargetSection = (entry) => {
  const index = sections.findIndex((section) => section == entry.target)
  
  if (index >= sections.length - 1) {
   return entry.target
  } else {
   return sections[index + 1]
  }
}

const updateColors = (target) => {
  const theme = target.dataset.section
  header.setAttribute('data-theme', theme)
}

const shouldUpdate = (entry) => {

  if (direction === 'down' && !entry.isIntersecting) {
    return true
  }

  if (direction === 'up' && entry.isIntersecting) {
    return true
  }
  
  return false
}

const onIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (scrollRoot.scrollTop > prevYPosition) {
      direction = 'down'
    } else {
      direction = 'up'
    }

    prevYPosition = scrollRoot.scrollTop
    
    const target = direction === 'down' ? getTargetSection(entry) : entry.target
    
    if (shouldUpdate(entry)) {
      updateColors(target)
    }
  })
}

const observer = new IntersectionObserver(onIntersect, options)

sections.forEach((section) => {
  observer.observe(section)
})

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
