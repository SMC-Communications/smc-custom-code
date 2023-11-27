const header = document.querySelector('[data-header]')
const sections = [...document.querySelectorAll('[data-section]')]
const scrollRoot = document.querySelector('[data-scroller]')

let prevYPosition = 0
let direction = 'up'

const options = {
  root: scrollRoot,
  rootMargin: `${header.offsetHeight * -1}px`,
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