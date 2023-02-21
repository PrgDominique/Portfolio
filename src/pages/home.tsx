import { Github } from '@/components/home/Github'
import { LinkedIn } from '@/components/home/LinkedIn'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center '>
        <h1 className='md:text-[5rem] text-[3rem] font-bold text-center uppercase'>
          Dominique Simbillo
        </h1>
        <div className='md:text-[3rem] text-[2rem] flex justify-center font-bold mt-5 '>
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
        <div className='flex justify-center gap-20 mt-10 '>
          <LinkedIn />
          <Github />
      </div>
    </div>
  )
}

export default Home
