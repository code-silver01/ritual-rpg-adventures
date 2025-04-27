import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-fantasy-dark text-fantasy-light px-4 py-12">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-fantasy text-fantasy-accent">
            Habitify
          </h1>
          <p className="text-xl md:text-2xl">
            Turn your habits into epic quests and adventures
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-lg mx-auto space-y-6"
        >
          <p className="text-fantasy-light text-opacity-90">
            Join thousands of adventurers who transform their daily habits into 
            an immersive fantasy RPG experience. Create your hero, complete quests, 
            join guilds, and embark on an epic journey of self-improvement.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={onStart}
              className="bg-fantasy-primary hover:bg-opacity-80 text-white px-8 py-6 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Begin Your Adventure
            </Button>
          </div>
          
          <div className="pt-4 text-sm text-fantasy-light text-opacity-60">
            Already have an account? <a href="#" className="text-fantasy-accent underline">Sign In</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
        >
          {['Track Habits', 'Join Guilds', 'Complete Quests', 'Earn Rewards'].map((feature, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-fantasy-primary bg-opacity-20 mb-3">
                <span className="text-fantasy-accent">✦</span>
              </div>
              <h3 className="text-fantasy-accent">{feature}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
