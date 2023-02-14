import { useColorMode } from '@/hooks/useColorMode'
import { useState } from 'react'
import { ToggleButton } from './ui/ToggleButton'

const Navbar = () => {
  const [colorMode, toggleColor] = useColorMode()



  return (
    <div className='bg-[#212529] p-6'>
      <div className='flex md:justify-end gap-5'>
        <div>Home</div>

        {/* <button
          className='text-black dark:text-white '
          onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
        >
          Toggle
        </button> */}

        {/* make a condition that check if the currentstate dark or light mode is equal it will render the icon*/}

        <ToggleButton colorMode={colorMode} toggleColor={toggleColor} />
      </div>
    </div>
  )
}

export default Navbar
