import Navbar from '../Navbar'
import { AnimatePresence } from 'framer-motion'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <div>
        <Navbar />
        <div className='dark:bg-[#121212] transition duration-300 ease-in h-full min-h-screen text-[#121212] dark:text-[#ede2e2] '>
          <div className='flex justify-center items-center'>{children}</div>
        </div>
      </div>
    </AnimatePresence>
  )
}
export default Layout
