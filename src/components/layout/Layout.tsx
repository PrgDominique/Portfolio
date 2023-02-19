import Navbar from '../Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='dark:bg-[#121212] transition duration-300 ease-in h-screen text-[#121212] '>
      <Navbar />
      <div >
        <div className='p-5'>{children}</div>
      </div>
    </div>
  )
}
export default Layout
