import { motion } from 'framer-motion'

const contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>contact</div>
    </motion.div>
  )
}

export default contact
