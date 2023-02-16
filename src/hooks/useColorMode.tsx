import { useEffect, useState } from 'react'

export const useColorMode = () => {
  const [colorMode, setColorMode] = useState('light')

  useEffect(() => {
    // Retrieve the current color mode from local storage
    const color = localStorage.getItem('color-mode')

    // If no color mode is set, set the default color mode to "light"
    // Otherwise, set the color mode to the value retrieved from local storage
    color === null
      ? localStorage.setItem('color-mode', 'light')
      : setColorMode(color)

    // Define the class name for the "dark" color mode
    const className = 'dark'

    // Get the list of classes for the document body
    const bodyClasses = window.document.body.classList

    // If the current color mode is "dark", add the "dark" class to the body
    // Otherwise, remove the "dark" class from the body
    color === 'dark'
      ? bodyClasses.add(className)
      : bodyClasses.remove(className)
  }, [colorMode])

  // This function toggles the color mode between 'light' and 'dark'
  const toggleColor = () => {
    // Check the current color mode and store the opposite value in local storage
    colorMode === 'light'
      ? localStorage.setItem('color-mode', 'dark')
      : localStorage.setItem('color-mode', 'light')

    // Update the state variable 'colorMode' to the opposite value
    setColorMode(colorMode === 'light' ? 'dark' : 'light')

    // Get a reference to the body element's class list
    const className = 'dark'
    const bodyClasses = window.document.body.classList

    // If the color mode is 'light', add the 'dark' class to the body element's class list
    // If the color mode is 'dark', remove the 'dark' class from the body element's class list
    colorMode === 'light'
      ? bodyClasses.add(className)
      : bodyClasses.remove(className)
  }

  return [colorMode, toggleColor]
}
