import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

interface Habit {
  id: string;
  name: string;
  frequency: string;
  difficulty: string;
}

interface HabitSelectionProps {
  onHabitsSelected: (selectedIds: string[]) => void;
  onBack: () => void;
  habits: Habit[];
}

const HabitSelection: React.FC<HabitSelectionProps> = ({
  onHabitsSelected,
  onBack,
  habits
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-fantasy-dark py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 text-fantasy-light hover:text-fantasy-accent"
        >
          ← Back
        </Button>
        
        <Card className="border-fantasy-primary border-opacity-20 bg-fantasy-dark bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-fantasy-accent">Select Your Quests</CardTitle>
            <CardDescription className="text-center text-fantasy-light">
              Choose habits to transform into daily quests
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {habits.map((habit) => (
              <div key={habit.id} className="flex items-center space-x-2">
                <Checkbox
                  id={habit.id}
                  checked={selectedIds.includes(habit.id)}
                  onCheckedChange={() => handleToggle(habit.id)}
                  className="mt-0.5 data-[state=checked]:bg-fantasy-primary data-[state=checked]:border-fantasy-primary"
                />
                <label
                  htmlFor={habit.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {habit.name}
                </label>
              </div>
            ))}
          </CardContent>
          
          <CardFooter>
            <Button 
              className="w-full fantasy-button"
              onClick={() => onHabitsSelected(selectedIds)}
            >
              Continue to Guild Creation
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default HabitSelection;
