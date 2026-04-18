'use client'

import { useEffect, useState, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const position = useRef({ x: 0, y: 0 })
  const targetPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(false)
      }
    }

    // Lerp animation
    const animate = () => {
      position.current.x += (targetPosition.current.x - position.current.x) * 0.15
      position.current.y += (targetPosition.current.y - position.current.y) * 0.15

      if (cursorRef.current) {
        cursorRef.current.style.left = `${position.current.x}px`
        cursorRef.current.style.top = `${position.current.y}px`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(animationId)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor hidden lg:block ${isHovering ? 'hover' : ''}`}
    />
  )
}
