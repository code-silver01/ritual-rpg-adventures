import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Star, Award, Shield, Zap, Heart } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt?: string;
}

const achievements: Achievement[] = [
  {
    id: 'first-quest',
    title: 'First Steps',
    description: 'Complete your first quest',
    icon: <Trophy className="w-8 h-8" />,
    rarity: 'common'
  },
  {
    id: 'week-streak',
    title: 'Consistent Adventurer',
    description: 'Maintain a 7-day streak',
    icon: <Star className="w-8 h-8" />,
    rarity: 'common'
  },
  {
    id: 'month-streak',
    title: 'Legendary Dedication',
    description: 'Maintain a 30-day streak',
    icon: <Award className="w-8 h-8" />,
    rarity: 'epic'
  },
  {
    id: 'guild-leader',
    title: 'Guild Master',
    description: 'Create and lead a guild',
    icon: <Shield className="w-8 h-8" />,
    rarity: 'rare'
  },
  {
    id: 'habit-master',
    title: 'Habit Master',
    description: 'Complete 100 quests',
    icon: <Zap className="w-8 h-8" />,
    rarity: 'legendary'
  },
  {
    id: 'supportive',
    title: 'Supportive Soul',
    description: 'Help 10 other adventurers',
    icon: <Heart className="w-8 h-8" />,
    rarity: 'rare'
  }
];

interface TrophyRoomProps {
  unlockedAchievements: string[];
}

const rarityColors = {
  common: 'text-gray-300',
  rare: 'text-blue-400',
  epic: 'text-purple-400',
  legendary: 'text-yellow-400'
};

const TrophyRoom: React.FC<TrophyRoomProps> = ({ unlockedAchievements }) => {
  return (
    <Card className="fantasy-card border-fantasy-primary border-opacity-20">
      <CardHeader>
        <CardTitle className="text-fantasy-accent flex items-center gap-2">
          <Trophy className="w-6 h-6" />
          Trophy Room
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => {
            const isUnlocked = unlockedAchievements.includes(achievement.id);
            
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`
                  relative p-4 rounded-lg border
                  ${isUnlocked 
                    ? `bg-fantasy-dark bg-opacity-40 border-${rarityColors[achievement.rarity]}`
                    : 'bg-gray-900 bg-opacity-30 border-gray-800'}
                `}
              >
                <div className="flex items-start gap-3">
                  <div className={`
                    ${isUnlocked ? rarityColors[achievement.rarity] : 'text-gray-600'}
                    transition-colors duration-300
                  `}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className={`
                      font-medium mb-1
                      ${isUnlocked ? 'text-fantasy-light' : 'text-gray-500'}
                    `}>
                      {achievement.title}
                    </h3>
                    <p className={`
                      text-sm
                      ${isUnlocked ? 'text-fantasy-light text-opacity-80' : 'text-gray-600'}
                    `}>
                      {achievement.description}
                    </p>
                    {isUnlocked && achievement.unlockedAt && (
                      <p className="text-xs text-fantasy-accent mt-2">
                        Unlocked on {new Date(achievement.unlockedAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
                
                {!isUnlocked && (
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">🔒 Locked</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrophyRoom; 