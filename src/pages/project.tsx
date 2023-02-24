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
                <motion.div className='item' variants={item} key={uuid()}>
                  <ImageProject src={card.image} alt={card.title} />
                  <h1>{card.title}</h1>
                  <h2>{card.description}</h2>
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
