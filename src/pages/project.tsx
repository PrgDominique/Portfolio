import { ImageProject } from '@/components/Image/ImageProject'
import { motion } from 'framer-motion'
import Projects from '../localdata/projects/Project.json'
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
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-5'>
              {Projects.map((card) => {
                return (
                  <>
                    <div className=''>
                      <ImageProject src={card.image} alt={card.title} />
                      <h1>{card.title}</h1>
                      <h2>{card.description}</h2>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Project
