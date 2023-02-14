import Navbar from '../Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='dark:bg-[#121212] h-screen '>
      <Navbar />
      <div >
        <div className='p-5'>{children}</div>
      </div>
    </div>
  )
}
export default Layout
