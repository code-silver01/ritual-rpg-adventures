import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Calendar, BarChart, Trophy, MessageCircle, Users } from 'lucide-react';
import AppHeader from './AppHeader';
import QuestList from './QuestList';
import GuildPanel from './GuildPanel';
import BadgeSystem, { sampleBadges } from './BadgeSystem';
import { AvatarData } from './AvatarCreation';
import { HabitData } from './HabitSelection';
import MirrorOfGrowth from './MirrorOfGrowth';

interface DashboardProps {
  avatarData: AvatarData;
  habitData: HabitData;
}

const Dashboard: React.FC<DashboardProps> = ({ avatarData, habitData }) => {
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
              
              <div className="w-full space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>XP Progress</span>
                    <span>25/100</span>
                  </div>
                  <Progress value={25} className="fantasy-progress-bar" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Health</span>
                    <span>85/100</span>
                  </div>
                  <Progress value={85} className="fantasy-progress-bar" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Energy</span>
                    <span>60/100</span>
                  </div>
                  <Progress value={60} className="fantasy-progress-bar" />
                </div>
              </div>
              
              <div className="border-t border-gray-700 w-full mt-6 pt-4 flex justify-around">
                <div className="text-center">
                  <div className="text-xl font-bold text-fantasy-accent">3</div>
                  <div className="text-xs">Quests</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-fantasy-accent">2</div>
                  <div className="text-xs">Streaks</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-fantasy-accent">5</div>
                  <div className="text-xs">Badges</div>
                </div>
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
                <QuestList habitData={habitData} />
              </CardContent>
            </Card>
            
            <Card className="fantasy-card border-fantasy-primary border-opacity-20">
              <CardHeader>
                <CardTitle className="text-fantasy-accent">Habit Dashboard</CardTitle>
                <CardDescription>
                  Track your progress and consistency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="weekly">
                  <TabsList>
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  </TabsList>
                  <TabsContent value="weekly" className="pt-4">
                    <div className="h-40 flex items-center justify-center bg-gray-800 bg-opacity-30 rounded-md">
                      <div className="text-center">
                        <BarChart className="h-10 w-10 mx-auto mb-2 text-fantasy-accent opacity-60" />
                        <p>Weekly habit tracking charts will appear here</p>
                        <p className="text-xs text-fantasy-light text-opacity-60 mt-1">
                          Complete quests to see your progress
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="monthly" className="pt-4">
                    <div className="h-40 flex items-center justify-center bg-gray-800 bg-opacity-30 rounded-md">
                      <div className="text-center">
                        <Calendar className="h-10 w-10 mx-auto mb-2 text-fantasy-accent opacity-60" />
                        <p>Monthly habit calendar will appear here</p>
                        <p className="text-xs text-fantasy-light text-opacity-60 mt-1">
                          Complete quests to build your streak
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            {/* Badges section */}
            <BadgeSystem userBadges={sampleBadges} />
          </div>
          
          {/* Guild Panel & Rewards */}
          <div className="lg:col-span-3 space-y-6">
            <GuildPanel />
            
            <Card className="fantasy-card border-fantasy-primary border-opacity-20">
              <CardHeader>
                <CardTitle className="text-fantasy-accent flex items-center">
                  <Trophy className="mr-2 h-5 w-5" />
                  <span>Rewards</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-fantasy-dark bg-opacity-40 rounded-lg p-3 border border-fantasy-primary border-opacity-20">
                  <p className="font-medium mb-1">Mystery Chest</p>
                  <p className="text-sm text-fantasy-light text-opacity-70">Complete 5 more quests to unlock</p>
                  <Progress value={60} className="fantasy-progress-bar mt-2" />
                </div>
                
                <div className="bg-fantasy-dark bg-opacity-40 rounded-lg p-3 border border-fantasy-primary border-opacity-20">
                  <p className="font-medium mb-1">30% off Fitness App</p>
                  <p className="text-sm text-fantasy-light text-opacity-70">Unlocked - Health milestone achieved!</p>
                  <Button variant="outline" className="mt-2 w-full text-sm h-8 fantasy-button-outline">
                    Claim Reward
                  </Button>
                </div>
                
                <Button variant="outline" className="w-full fantasy-button-outline">
                  View All Rewards
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
