import { motion } from 'framer-motion'

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
        </div>
      </div>
    </motion.div>
  )
}

export default Project
