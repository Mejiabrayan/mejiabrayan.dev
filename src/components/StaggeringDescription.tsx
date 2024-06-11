import { motion } from 'framer-motion';
import { CornerRightDown } from 'lucide-react';

const StaggeringDescription = () => {
  const fadeAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const paragraphContent = [
    { text: 'Continuous learning', isAccent: true },
    {
      text: "is a core value of mine. I'm always looking to expand my skillset and learn new technologies. Here are some of the projects I've worked on",
      isAccent: false,
    },
  ];

  return (
    <motion.div className='absolute text-lg md:text-xl lg:text-6xl text-accents-6'>
      {paragraphContent.map((segment, index) => (
        <motion.p
          key={index}
          className={segment.isAccent ? 'text-accents-7' : ''}
          variants={fadeAnimationVariants}
          initial='initial'
          whileInView='animate'
          viewport={{
            once: true,
          }}
          custom={index}
        >
          {segment.text}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default StaggeringDescription;
