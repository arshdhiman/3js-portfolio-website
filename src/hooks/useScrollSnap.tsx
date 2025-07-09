
import { useEffect, useCallback } from 'react'

export const useScrollSnap = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [])

  useEffect(() => {
    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top >= -200 && rect.top <= 200
        }
        return false
      })

      if (currentSection) {
        const currentIndex = sections.indexOf(currentSection)
        let nextIndex

        if (e.deltaY > 0 && currentIndex < sections.length - 1) {
          nextIndex = currentIndex + 1
        } else if (e.deltaY < 0 && currentIndex > 0) {
          nextIndex = currentIndex - 1
        }

        if (nextIndex !== undefined) {
          e.preventDefault()
          isScrolling = true
          scrollToSection(sections[nextIndex])

          clearTimeout(scrollTimeout)
          scrollTimeout = setTimeout(() => {
            isScrolling = false
          }, 1500)
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact']
        const currentSection = sections.find(section => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top >= -200 && rect.top <= 200
          }
          return false
        })

        if (currentSection) {
          const currentIndex = sections.indexOf(currentSection)
          let nextIndex

          if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
            nextIndex = currentIndex + 1
          } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            nextIndex = currentIndex - 1
          }

          if (nextIndex !== undefined) {
            e.preventDefault()
            scrollToSection(sections[nextIndex])
          }
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(scrollTimeout)
    }
  }, [scrollToSection])

  return { scrollToSection }
}
