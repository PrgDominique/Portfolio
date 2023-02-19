import { Github } from '@/components/home/Github'
import { LinkedIn } from '@/components/home/LinkedIn'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div className=' flex justify-center items-center dark:text-[#ede2e2]'>
      <div className='md:mt-[12rem] mt-[5rem]'>
        <h1 className='md:text-[5rem] text-[3rem] m-10 font-bold uppercase'>
          Dominique Simbillo
        </h1>
        <div className='md:text-[3rem] text-[2rem] flex justify-center md:mt-3 font-bold '>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`I'm Developer`)
                .pauseFor(2500)
                .deleteAll()
                .pauseFor(1500)
                .start()
            }}
          />
        </div>
        <div className='flex justify-center mt-10 gap-10'>
          <LinkedIn />
          <Github />
        </div>
      </div>
    </div>
  )
}

export default Home
