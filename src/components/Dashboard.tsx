import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Calendar, BarChart, Trophy, MessageCircle, Users, Sword } from 'lucide-react';
import AppHeader from './AppHeader';
import QuestList from './QuestList';
import GuildPanel from './GuildPanel';
import BadgeSystem, { sampleBadges } from './BadgeSystem';
import { AvatarData } from './AvatarCreation';
import { HabitData } from './HabitSelection';
import MirrorOfGrowth from './MirrorOfGrowth';
import QuestCompletionEffect from './QuestCompletionEffect';
import QuestLore from './QuestLore';
import HabitDashboard from './HabitDashboard';
import TrophyRoom from './TrophyRoom';
import GuildHall from './GuildHall';

interface DashboardProps {
  avatarData: AvatarData;
  habitData: HabitData;
}

const Dashboard: React.FC<DashboardProps> = ({ avatarData, habitData }) => {
  const [showCompletionEffect, setShowCompletionEffect] = useState(false);
  const [completedQuest, setCompletedQuest] = useState<{ name: string; xp: number } | null>(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>(['first-quest']);
  const [activeGuild, setActiveGuild] = useState<any>(null);
  const [publicGuilds] = useState([
    {
      id: '1',
      name: 'The Morning Warriors',
      description: 'Early risers who conquer their habits before dawn',
      memberCount: 42,
      level: 3,
      challenges: [],
      activeMembers: []
    },
    {
      id: '2',
      name: 'The Mindful Mystics',
      description: 'Masters of meditation and mental clarity',
      memberCount: 28,
      level: 2,
      challenges: [],
      activeMembers: []
    }
  ]);

  const handleQuestComplete = (questName: string, xp: number) => {
    setCompletedQuest({ name: questName, xp });
    setShowCompletionEffect(true);
    
    // Check for achievements
    const newAchievements = [...unlockedAchievements];
    if (!newAchievements.includes('first-quest')) {
      newAchievements.push('first-quest');
    }
    setUnlockedAchievements(newAchievements);
  };

  const handleJoinGuild = (guildId: string) => {
    const guild = publicGuilds.find(g => g.id === guildId);
    if (guild) {
      setActiveGuild(guild);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-fantasy-dark to-gray-900 text-fantasy-light">
      <AppHeader />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Hero Status */}
          <Card className="lg:col-span-3 fantasy-card border-fantasy-primary border-opacity-20">
            <CardHeader>
              <CardTitle className="text-center text-fantasy-accent">Hero Status</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarFallback className="bg-fantasy-primary text-white text-2xl">
                  {avatarData.class === 'warrior' && '⚔️'}
                  {avatarData.class === 'wizard' && '🧙‍♂️'}
                  {avatarData.class === 'rogue' && '🏹'}
                  {avatarData.class === 'cleric' && '✨'}
                </AvatarFallback>
              </Avatar>
              
              <h3 className="text-xl font-fantasy mb-1">{avatarData.name || 'Adventurer'}</h3>
              <p className="text-fantasy-accent mb-3 capitalize">{avatarData.class} • Level 1</p>
              
              <div className="w-full space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Experience</span>
                  <span>0/100</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          {/* Main Content */}
          <div className="lg:col-span-6 space-y-6">
            <Card className="fantasy-card border-fantasy-primary border-opacity-20">
              <CardHeader>
                <CardTitle className="text-fantasy-accent flex items-center">
                  <span className="mr-2">Today's Quests</span>
                  <span className="text-sm bg-fantasy-accent bg-opacity-20 text-fantasy-accent px-2 py-1 rounded-full">
                    3 Remaining
                  </span>
                </CardTitle>
                <CardDescription>
                  Complete your daily quests to earn XP and rewards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <QuestList 
                  habitData={habitData} 
                  onQuestComplete={handleQuestComplete}
                />
              </CardContent>
            </Card>
            
            {/* Habit Dashboard */}
            <HabitDashboard habitData={[
              {
                id: 'exercise',
                name: 'Exercise',
                streak: 5,
                completedDates: ['2024-04-20', '2024-04-21', '2024-04-22', '2024-04-23', '2024-04-24'],
                totalCompletions: 15
              },
              {
                id: 'meditation',
                name: 'Meditation',
                streak: 3,
                completedDates: ['2024-04-22', '2024-04-23', '2024-04-24'],
                totalCompletions: 8
              }
            ]} />
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            {/* Trophy Room */}
            <TrophyRoom unlockedAchievements={unlockedAchievements} />
            
            {/* Guild Hall */}
            <GuildHall 
              activeGuild={activeGuild}
              publicGuilds={publicGuilds}
              onJoinGuild={handleJoinGuild}
            />
          </div>
        </div>
      </div>

      {/* Quest Completion Effect */}
      {completedQuest && (
        <QuestCompletionEffect
          show={showCompletionEffect}
          xpGained={completedQuest.xp}
          questName={completedQuest.name}
          onComplete={() => {
            setShowCompletionEffect(false);
            setCompletedQuest(null);
          }}
        />
      )}

      {/* Quest Lore */}
      {completedQuest && (
        <QuestLore
          questId={completedQuest.name.toLowerCase().split(' ')[0]}
          questName={completedQuest.name}
        />
      )}
    </div>
  );
};

export default Dashboard;
