import { useEffect, useState } from 'react'

export const useColorMode = () => {
  const [colorMode, setColorMode] = useState('light')

  useEffect(() => {
    const color = localStorage.getItem('color-mode')
    color === null
      ? localStorage.setItem('color-mode', 'light')
      : setColorMode(color)
    const className = 'dark'
    const bodyClasses = window.document.body.classList

    color === 'dark'
      ? bodyClasses.add(className)
      : bodyClasses.remove(className)
  }, [colorMode])

  const toggleColor = () => {
    colorMode === 'light'
      ? localStorage.setItem('color-mode', 'dark')
      : localStorage.setItem('color-mode', 'light')

    setColorMode(colorMode === 'light' ? 'dark' : 'light')
    const className = 'dark'
    const bodyClasses = window.document.body.classList

    colorMode === 'light'
      ? bodyClasses.add(className)
      : bodyClasses.remove(className)
  }

  return [colorMode, toggleColor]
}
