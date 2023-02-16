import { useColorMode } from '@/hooks/useColorMode'
import Link from 'next/link'
import { useState } from 'react'
import { ToggleButton } from './ui/button/ToggleButton'
import { ListItem } from './ui/navbar/ListItem'

const Navbar = () => {
  const [colorMode, toggleColor] = useColorMode()

  return (
    <div className='bg-[#212529] p-6'>
      <div className='flex md:justify-end gap-5 text-white text-xl'>
        <ul className='flex gap-5'>
          <li>
            <ListItem href='#' name='Home' />
          </li>
          <li>
            <ListItem href='#' name='About' />
          </li>
          <li>
            <ListItem href='#' name='Skills' />
          </li>
          <li>
            <ListItem href='#' name='Projects' />
          </li>
          <li>
            <ListItem href='#' name='Resume' />
          </li>
          <li>
            {' '}
            <ToggleButton colorMode={colorMode} toggleColor={toggleColor} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
