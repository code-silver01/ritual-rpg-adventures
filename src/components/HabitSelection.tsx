import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { HabitData, Habit } from '@/types/habit';

interface HabitSelectionProps {
  onHabitsSelected: (habits: HabitData) => void;
  onBack: () => void;
  initialHabits: Habit[];
}

const predefinedHabits: Habit[] = [
  {
    id: '1',
    name: 'Drink 8 glasses of water',
    frequency: 'daily',
    difficulty: 'easy'
  },
  {
    id: '2',
    name: 'Exercise for 30 minutes',
    frequency: 'daily',
    difficulty: 'medium'
  },
  {
    id: '3',
    name: 'Read for 30 minutes',
    frequency: 'daily',
    difficulty: 'easy'
  },
  {
    id: '4',
    name: 'Meditate for 10 minutes',
    frequency: 'daily',
    difficulty: 'easy'
  },
  {
    id: '5',
    name: 'Write in journal',
    frequency: 'daily',
    difficulty: 'easy'
  }
];

const HabitSelection: React.FC<HabitSelectionProps> = ({
  onHabitsSelected,
  onBack,
  initialHabits
}) => {
  const [selectedHabitIds, setSelectedHabitIds] = useState<string[]>([]);
  const [customHabits, setCustomHabits] = useState<string[]>([]);
  const [newCustomHabit, setNewCustomHabit] = useState('');

  const handleHabitToggle = (habitId: string) => {
    setSelectedHabitIds(prev => {
      if (prev.includes(habitId)) {
        return prev.filter(id => id !== habitId);
      } else {
        return [...prev, habitId];
      }
    });
  };

  const handleAddCustomHabit = () => {
    if (newCustomHabit.trim()) {
      setCustomHabits([...customHabits, newCustomHabit.trim()]);
      setNewCustomHabit('');
    }
  };

  const handleRemoveCustomHabit = (index: number) => {
    setCustomHabits(customHabits.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    onHabitsSelected({
      habits: initialHabits,
      selectedHabits: selectedHabitIds
    });
  };

  return (
    <div className="min-h-screen bg-fantasy-dark py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
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
            {initialHabits.map((habit) => (
              <div key={habit.id} className="flex items-center space-x-2">
                <Checkbox
                  id={habit.id}
                  checked={selectedHabitIds.includes(habit.id)}
                  onCheckedChange={() => handleHabitToggle(habit.id)}
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
              onClick={handleSubmit}
            >
              Continue to Guild Creation
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default HabitSelection;
