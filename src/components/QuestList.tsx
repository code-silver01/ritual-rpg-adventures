import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Sword } from 'lucide-react';
import { HabitData } from './HabitSelection';

interface QuestListProps {
  habitData: HabitData;
  onQuestComplete: (questName: string, xp: number) => void;
}

const QuestList: React.FC<QuestListProps> = ({ habitData, onQuestComplete }) => {
  const handleCompleteQuest = (habitName: string) => {
    // Calculate XP based on habit difficulty
    const xp = 10; // Base XP
    onQuestComplete(habitName, xp);
  };

  return (
    <div className="space-y-4">
      {habitData.habits.map((habit) => (
        <Card key={habit.id} className="fantasy-card border-fantasy-primary border-opacity-20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-fantasy-primary bg-opacity-20 flex items-center justify-center">
                  <Sword className="w-5 h-5 text-fantasy-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-fantasy-light">{habit.name}</h3>
                  <p className="text-sm text-fantasy-light text-opacity-60">
                    {habit.frequency} • {habit.difficulty}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => handleCompleteQuest(habit.name)}
                className="fantasy-button bg-fantasy-primary hover:bg-opacity-90"
              >
                <Check className="w-4 h-4 mr-2" />
                Complete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuestList;
