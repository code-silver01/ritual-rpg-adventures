import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Sparkles } from 'lucide-react';

interface QuestCompletionEffectProps {
  show: boolean;
  xpGained: number;
  questName: string;
  onComplete: () => void;
}

const QuestCompletionEffect: React.FC<QuestCompletionEffectProps> = ({
  show,
  xpGained,
  questName,
  onComplete
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onComplete}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="bg-fantasy-dark p-8 rounded-lg border border-fantasy-primary border-opacity-20 max-w-md w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-fantasy-primary bg-opacity-20 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-fantasy-accent" />
                </div>
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-fantasy text-fantasy-accent"
              >
                Quest Complete!
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-fantasy-light"
              >
                {questName}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center space-x-2 text-fantasy-accent"
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-xl font-bold">+{xpGained} XP</span>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-4"
              >
                <button
                  onClick={onComplete}
                  className="fantasy-button bg-fantasy-primary hover:bg-opacity-90"
                >
                  Continue
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuestCompletionEffect; 