import { useColorMode } from '@/hooks/useColorMode'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ToggleButton } from './ui/button/ToggleButton'
import { ListItem } from './ui/navbar/ListItem'
import Menu from './ui/navbar/Menu'
import { Resume } from './ui/navbar/Resume'

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(true)
  const [colorMode, toggleColor] = useColorMode()
  const router = useRouter()

  // get the current path name from router object
  const currentPathname = router.pathname

  return (
    <div className='bg-[#212529] p-6 absolute z-[2] w-full'>
      <div className=' text-white text-xl'>
        {/* dark mode / light mode icon */}
        <div className='flex justify-between md:hidden'>
          <div className='flex md:justify-end'>
            <ToggleButton colorMode={colorMode} toggleColor={toggleColor} />
          </div>

          {/* hamburger menu */}

          <div className='flex justify-end  text-white '>
            <Menu setMenuActive={setMenuActive} menuActive={menuActive} />
          </div>
        </div>

        <div className='flex md:justify-end justify-start '>
          <ul
            className={
              menuActive
                ? 'md:flex gap-5 hidden'
                : 'md:flex grid grid-cols-1 gap-5'
            }
          >
            <li>
              <ListItem
                href='/home'
                name='Home'
                active={currentPathname === '/home'}
              />
            </li>
            <li>
              <ListItem
                href='/about'
                name='About'
                active={currentPathname === '/about'}
              />
            </li>
            <li>
              <ListItem
                href='/skill'
                name='Skills'
                active={currentPathname === '/skill'}
              />
            </li>
            <li>
              <ListItem
                href='/project'
                name='Projects'
                active={currentPathname === '/project'}
              />
            </li>
            <li>
              <Resume
                href='https://drive.google.com/file/d/1S8qsXlBSnJsZSwaf3XwQ60s9fLItotHW/view'
                name='Resume'
              />
            </li>
            <li>
              <div className='flex justify-end max-md:hidden'>
                <ToggleButton colorMode={colorMode} toggleColor={toggleColor} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
