import { useColorMode } from '@/hooks/useColorMode'
import { useRouter } from 'next/router'
import { ToggleButton } from './ui/button/ToggleButton'
import { ListItem } from './ui/navbar/ListItem'

const Navbar = () => {
  const [colorMode, toggleColor] = useColorMode()
  const router = useRouter()

  // get the current path name from router object
  const currentPathname = router.pathname

  return (
    <div className='bg-[#212529] p-6'>
      <div className='grid grid-cols-3 gap-8 text-white text-xl'>
        <div className='flex justify-end col-span-2'>
          <ul className='flex gap-5'>
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
              <ListItem
                href='#'
                name='Resume'
                active={currentPathname === '/resume'}
              />
            </li>
          </ul>
        </div>
        <div className='flex justify-end'>
          <ToggleButton colorMode={colorMode} toggleColor={toggleColor} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
