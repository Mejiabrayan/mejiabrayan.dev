import { motion } from 'framer-motion';

const StaggeringHeading = () => {
  const fadeAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  const paragraphContent = [
    { text: "I'm a ", isAccent: false },
    { text: 'Full-Stack Developer', isAccent: true },
    { text: ' with a interest for crafting ', isAccent: false },
    { text: 'intuitive and dynamic web applications', isAccent: true },
    { text: '. Leveraging a ', isAccent: false },
    { text: 'creative background', isAccent: true },
    { text: ' and a', isAccent: false },
    { text: 'continuous learning ethos', isAccent: true },
    { text: ', I build modern digital solutions that ', isAccent: false },
    { text: 'empower', isAccent: true },
    { text: ' and ', isAccent: false },
    { text: 'inspire', isAccent: true },
    { text: '.', isAccent: false },
  ];
  return (
    <div className='text-xl md:text-2xl lg:text-3xl text-accents-5'>
      {paragraphContent.map((segment, index) => (
        <motion.span 
        key={index} 
        className={segment.isAccent ? 'text-accents-7' : ''}
        variants={fadeAnimationVariants}
        initial='initial'
       whileInView='animate'
       viewport={{
        once: true,
       }}
        >
          {segment.text}
        </motion.span>
      ))}
    </div>
  );
};

export default StaggeringHeading;
