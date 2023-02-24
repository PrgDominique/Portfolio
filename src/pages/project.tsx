import { ImageProject } from '@/components/Image/ImageProject'
import { motion } from 'framer-motion'
import Projects from '../localdata/projects/Project.json'
import uuid from 'react-uuid'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.5,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='container mx-auto'>
        <div className='mt-[8rem]'>
          <h1 className='text-center md:text-[4rem] text-[3rem] font-bold'>
            Projects
          </h1>
          <div className='container mx-auto mt-10'>
            <motion.div
              className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-5'
              variants={container}
              initial='hidden'
              animate='visible'
            >
              {Projects.map((card) => (
                <motion.div
                  className='item shadow-lg border-2 dark:border-solid dark:border-white rounded-lg' 
                  variants={item}
                  key={uuid()}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                  >
                    {' '}
                    <ImageProject src={card.image} alt={card.title} />{' '}
                  </motion.div>
                  <div className='p-5'>
                    <h1 className='text-2xl font-bold'>{card.title}</h1>
                    <h2 className='text-lg mt-10'>{card.description}</h2>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Project
