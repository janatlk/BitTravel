import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FadeIn = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
