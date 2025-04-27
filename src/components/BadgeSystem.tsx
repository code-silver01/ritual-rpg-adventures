
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Trophy, Award, Brain, Users, Badge } from 'lucide-react';
import { Badge as UIBadge } from '@/components/ui/badge';

export interface BadgeItem {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  earned: boolean;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  category: 'streak' | 'achievement' | 'social' | 'personal' | 'special';
}

interface BadgeSystemProps {
  userBadges: BadgeItem[];
}

const BadgeSystem: React.FC<BadgeSystemProps> = ({ userBadges }) => {
  // Group badges by category
  const badgesByCategory = userBadges.reduce<Record<string, BadgeItem[]>>(
    (acc, badge) => {
      if (!acc[badge.category]) {
        acc[badge.category] = [];
      }
      acc[badge.category].push(badge);
      return acc;
    },
    {}
  );

  const categoryTitles: Record<string, string> = {
    streak: 'Streak Badges',
    achievement: 'Achievements',
    social: 'Social Recognition',
    personal: 'Personal Growth',
    special: 'Special Events'
  };

  return (
    <Card className="fantasy-card border-fantasy-primary border-opacity-20">
      <CardHeader>
        <CardTitle className="text-fantasy-accent flex items-center">
          <Award className="mr-2 h-5 w-5" />
          <span>Badges & Achievements</span>
        </CardTitle>
        <CardDescription>
          Your collection of earned badges and achievements
        </CardDescription>
      </CardHeader>
      <CardContent>
        {Object.keys(badgesByCategory).length > 0 ? (
          <div className="space-y-6">
            {Object.entries(badgesByCategory).map(([category, badges]) => (
              <div key={category}>
                <h3 className="text-sm font-medium text-fantasy-light mb-3">
                  {categoryTitles[category] || category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {badges.map((badge) => (
                    <BadgeCard key={badge.id} badge={badge} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Badge className="h-12 w-12 mx-auto text-fantasy-accent opacity-40" />
            <p className="mt-4 text-fantasy-light text-opacity-70">
              Complete quests and challenges to earn badges!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const BadgeCard: React.FC<{ badge: BadgeItem }> = ({ badge }) => {
  const rarityColors = {
    common: 'bg-gray-500',
    uncommon: 'bg-green-500',
    rare: 'bg-blue-500',
    legendary: 'bg-purple-500',
  };

  const iconVariants = {
    earned: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: { 
        duration: 0.5,
        delay: 0.1
      }
    },
    notEarned: {
      scale: 1,
      opacity: 0.3
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`relative p-3 rounded-lg text-center border ${
        badge.earned 
          ? 'border-fantasy-accent border-opacity-50 bg-gradient-to-b from-fantasy-primary/10 to-transparent' 
          : 'border-gray-700 bg-gray-800 bg-opacity-40'
      }`}
    >
      <div className="absolute top-0 right-0 -mt-2 -mr-2">
        <UIBadge 
          className={`${rarityColors[badge.rarity]} text-white text-xs px-2 py-0.5`}
        >
          {badge.rarity}
        </UIBadge>
      </div>
      <motion.div 
        className="flex justify-center items-center h-12 mb-2"
        variants={iconVariants}
        initial={badge.earned ? "earned" : "notEarned"}
        animate={badge.earned ? "earned" : "notEarned"}
      >
        {badge.icon}
      </motion.div>
      <h4 className={`font-medium text-sm ${badge.earned ? 'text-fantasy-light' : 'text-fantasy-light text-opacity-50'}`}>
        {badge.name}
      </h4>
      <p className="text-xs mt-1 text-fantasy-light text-opacity-70">
        {badge.description}
      </p>
    </motion.div>
  );
};

// Sample badge data for demonstration
export const sampleBadges: BadgeItem[] = [
  {
    id: '1',
    name: '7-Day Streaker',
    description: 'Complete habits for 7 days in a row',
    icon: <Star className="h-8 w-8 text-yellow-400" />,
    earned: true,
    rarity: 'common',
    category: 'streak'
  },
  {
    id: '2',
    name: '30-Day Maestro',
    description: 'Maintain a habit for a full month',
    icon: <Star className="h-8 w-8 text-blue-400" />,
    earned: false,
    rarity: 'uncommon',
    category: 'streak'
  },
  {
    id: '3',
    name: 'First Boss Slayer',
    description: 'Help your guild defeat a boss',
    icon: <Trophy className="h-8 w-8 text-green-400" />,
    earned: true,
    rarity: 'uncommon',
    category: 'achievement'
  },
  {
    id: '4',
    name: 'Guild MVP',
    description: 'Complete the most quests in your guild this week',
    icon: <Award className="h-8 w-8 text-purple-400" />,
    earned: false,
    rarity: 'rare',
    category: 'social'
  },
  {
    id: '5',
    name: 'Mindfulness Master',
    description: 'Complete 20 mindfulness sessions',
    icon: <Brain className="h-8 w-8 text-cyan-400" />,
    earned: true,
    rarity: 'uncommon',
    category: 'personal'
  },
  {
    id: '6',
    name: 'Social Butterfly',
    description: 'Invite 5 friends to join Questify',
    icon: <Users className="h-8 w-8 text-pink-400" />,
    earned: false,
    rarity: 'common',
    category: 'social'
  },
];

export default BadgeSystem;
