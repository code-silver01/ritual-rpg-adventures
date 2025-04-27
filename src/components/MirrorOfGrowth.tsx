
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Mirror } from 'lucide-react';
import { HabitData } from './HabitSelection';

interface MirrorOfGrowthProps {
  habitData: HabitData;
}

const MirrorOfGrowth: React.FC<MirrorOfGrowthProps> = ({ habitData }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Sample data - in a real app this would come from your backend
  const weeklyProgress = {
    completed: 15,
    total: 21,
    strongHabits: ['Morning Meditation', 'Daily Exercise'],
    improvementAreas: ['Evening Reading', 'Healthy Eating'],
    suggestedChallenges: [
      'Try meditating for 5 extra minutes tomorrow',
      'Add one more exercise session this week',
    ],
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full fantasy-button-outline mt-4 flex items-center gap-2">
          <Mirror className="h-5 w-5" />
          Mirror of Growth
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-b from-fantasy-dark to-gray-900 text-fantasy-light">
        <DialogHeader>
          <DialogTitle className="text-2xl text-fantasy-accent font-fantasy flex items-center gap-2">
            <Mirror className="h-6 w-6" />
            Mirror of Growth
          </DialogTitle>
          <DialogDescription>
            Reflect on your journey and discover insights about your habits
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Weekly Progress */}
          <Card className="fantasy-card border-fantasy-primary border-opacity-20">
            <CardHeader>
              <CardTitle className="text-fantasy-accent">Weekly Progress</CardTitle>
              <CardDescription>
                You've completed {weeklyProgress.completed} out of {weeklyProgress.total} quests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress 
                value={(weeklyProgress.completed / weeklyProgress.total) * 100} 
                className="fantasy-progress-bar mb-4" 
              />
            </CardContent>
          </Card>

          {/* Strong Habits */}
          <Card className="fantasy-card border-fantasy-primary border-opacity-20">
            <CardHeader>
              <CardTitle className="text-fantasy-accent">Your Strongest Quests</CardTitle>
              <CardDescription>
                These habits are becoming your powerful allies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {weeklyProgress.strongHabits.map((habit) => (
                  <li key={habit} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-fantasy-accent"></span>
                    {habit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Areas for Improvement */}
          <Card className="fantasy-card border-fantasy-primary border-opacity-20">
            <CardHeader>
              <CardTitle className="text-fantasy-accent">Quests Needing Attention</CardTitle>
              <CardDescription>
                Focus on these areas to level up faster
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {weeklyProgress.improvementAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    {area}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Suggested Micro-Challenges */}
          <Card className="fantasy-card border-fantasy-primary border-opacity-20">
            <CardHeader>
              <CardTitle className="text-fantasy-accent">New Side Quests</CardTitle>
              <CardDescription>
                Take on these challenges to boost your progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {weeklyProgress.suggestedChallenges.map((challenge) => (
                  <li key={challenge} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-fantasy-primary"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MirrorOfGrowth;
