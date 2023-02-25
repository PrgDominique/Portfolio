import Icons from '../localdata/home/Social.json'
import uuid from 'react-uuid'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
        <div className='flex justify-center gap-20 mt-24 flex-wrap '>
        {Icons &&
        Icons.map((icon) => {
          return (
            <div key={uuid()}>
              <a
                target='_blank'
                href={icon.href}
                rel='noopener noreferrer'
              >
                <img
                  src={icon.image}
                  alt={icon.name}
                  className='w-14 h-14 border rounded-lg'
                />
              </a>
            </div>
          )
        })}
        </div>
      </div>
    </motion.div>
  )
}

export default Home
