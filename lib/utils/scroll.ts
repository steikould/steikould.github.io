/**
 * Smooth scroll utility functions
 */

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

/**
 * Adds scroll-based animations to elements
 */
export function observeScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }
  )

  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el)
  })

  return observer
}

/**
 * Track mouse position for card hover effects
 */
export function initializeMouseTracking() {
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('[data-mouse-track]')
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      card.setAttribute('style', `--mouse-x: ${x}px; --mouse-y: ${y}px;`)
    })
  })
}
