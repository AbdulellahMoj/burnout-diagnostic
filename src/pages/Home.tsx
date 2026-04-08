import { motion } from 'motion/react';
import Hero from '../components/Hero';
import BurnoutExplanation from '../components/BurnoutExplanation';
import TechLifeExamples from '../components/TechLifeExamples';
import Symptoms from '../components/Symptoms';
import Roadmap from '../components/Roadmap';
import Prevention from '../components/Prevention';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <BurnoutExplanation />
      <TechLifeExamples />
      <Symptoms />
      <Roadmap />
      <Prevention />
    </motion.div>
  );
}
