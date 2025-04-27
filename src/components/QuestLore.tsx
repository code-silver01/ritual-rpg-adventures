import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface QuestLoreProps {
  questId: string;
  questName: string;
}

const questLoreData: Record<string, { title: string; description: string }> = {
  'exercise': {
    title: 'The Warrior\'s Training',
    description: 'Through consistent training, you strengthen not just your body but your spirit. Each drop of sweat is a testament to your growing power.'
  },
  'meditation': {
    title: 'The Mind\'s Eye',
    description: 'In the quiet of meditation, you discover the vastness of your inner world. Each moment of stillness brings you closer to enlightenment.'
  },
  'reading': {
    title: 'The Scholar\'s Path',
    description: 'Knowledge is power, and through reading, you unlock the secrets of the ancients. Each page turned is a step toward wisdom.'
  },
  'water': {
    title: 'The Fountain of Vitality',
    description: 'Water is the essence of life. By maintaining proper hydration, you ensure your body and mind remain in perfect harmony.'
  },
  'journal': {
    title: 'The Chronicler\'s Tale',
    description: 'Your journal is a map of your journey. Each entry is a marker of your growth and a guide for future adventures.'
  },
  'sleep': {
    title: 'The Dreamer\'s Rest',
    description: 'In sleep, you recharge your spirit and prepare for the challenges ahead. Each night\'s rest is a gift of renewal.'
  }
};

const QuestLore: React.FC<QuestLoreProps> = ({ questId, questName }) => {
  const lore = questLoreData[questId] || {
    title: 'The Unknown Quest',
    description: 'This quest\'s lore is yet to be discovered. Continue your journey to uncover its secrets.'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="fantasy-card border-fantasy-primary border-opacity-20">
        <CardHeader>
          <CardTitle className="text-fantasy-accent">{lore.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-fantasy-light">{lore.description}</p>
          <p className="mt-4 text-sm text-fantasy-light text-opacity-60">
            Quest: {questName}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default QuestLore; 