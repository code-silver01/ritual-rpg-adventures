import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

interface HabitSelectionProps {
  onHabitsSelected: (data: HabitData) => void;
  onBack: () => void;
}

export interface HabitData {
  selectedHabits: string[];
  customHabits: string[];
  habits: {
    id: string;
    name: string;
    frequency: string;
    difficulty: string;
  }[];
}

const predefinedHabits = [
  { id: 'exercise', label: 'Exercise (30 mins daily)', category: 'health' },
  { id: 'reading', label: 'Read (20 mins daily)', category: 'mind' },
  { id: 'meditation', label: 'Meditate (10 mins daily)', category: 'mind' },
  { id: 'water', label: 'Drink 8 glasses of water', category: 'health' },
  { id: 'journal', label: 'Journal', category: 'mind' },
  { id: 'sleep', label: 'Sleep 8 hours', category: 'health' },
  { id: 'stretch', label: 'Morning stretch', category: 'health' },
  { id: 'gratitude', label: 'Gratitude practice', category: 'mind' },
  { id: 'coding', label: 'Code practice', category: 'skill' },
  { id: 'drawing', label: 'Drawing practice', category: 'skill' },
  { id: 'language', label: 'Language practice', category: 'skill' },
  { id: 'no-sugar', label: 'No added sugar', category: 'health' },
];

const HabitSelection: React.FC<HabitSelectionProps> = ({ onHabitsSelected, onBack }) => {
  const [selectedHabits, setSelectedHabits] = useState<string[]>([]);
  const [customHabits, setCustomHabits] = useState<string[]>([]);
  const [newCustomHabit, setNewCustomHabit] = useState('');

  const handleHabitSelect = (habitId: string) => {
    setSelectedHabits(prev => {
      const newSelected = prev.includes(habitId)
        ? prev.filter(id => id !== habitId)
        : [...prev, habitId];
      
      // Update habits array
      const habits = [
        ...newSelected.map(id => {
          const predefinedHabit = predefinedHabits.find(h => h.id === id);
          return {
            id,
            name: predefinedHabit?.label || id,
            frequency: predefinedHabit?.frequency || 'daily',
            difficulty: predefinedHabit?.difficulty || 'medium'
          };
        }),
        ...customHabits.map((name, index) => ({
          id: `custom-${index}`,
          name,
          frequency: 'daily',
          difficulty: 'medium'
        }))
      ];

      onHabitsSelected({
        selectedHabits: newSelected,
        customHabits,
        habits
      });

      return newSelected;
    });
  };

  const handleAddCustomHabit = () => {
    if (newCustomHabit.trim()) {
      setCustomHabits(prev => {
        const newCustomHabits = [...prev, newCustomHabit.trim()];
        
        // Update habits array
        const habits = [
          ...selectedHabits.map(id => {
            const predefinedHabit = predefinedHabits.find(h => h.id === id);
            return {
              id,
              name: predefinedHabit?.label || id,
              frequency: predefinedHabit?.frequency || 'daily',
              difficulty: predefinedHabit?.difficulty || 'medium'
            };
          }),
          ...newCustomHabits.map((name, index) => ({
            id: `custom-${index}`,
            name,
            frequency: 'daily',
            difficulty: 'medium'
          }))
        ];

        onHabitsSelected({
          selectedHabits,
          customHabits: newCustomHabits,
          habits
        });

        return newCustomHabits;
      });
      setNewCustomHabit('');
    }
  };

  const handleRemoveCustomHabit = (index: number) => {
    setCustomHabits(customHabits.filter((_, i) => i !== index));
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
            <div>
              <h3 className="text-lg font-semibold mb-3 text-fantasy-light">Health Quests</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {predefinedHabits
                  .filter(habit => habit.category === 'health')
                  .map(habit => (
                    <div key={habit.id} className="flex items-start space-x-2">
                      <Checkbox 
                        id={habit.id} 
                        checked={selectedHabits.includes(habit.id)}
                        onCheckedChange={() => handleHabitSelect(habit.id)}
                        className="mt-0.5 data-[state=checked]:bg-fantasy-primary data-[state=checked]:border-fantasy-primary"
                      />
                      <Label htmlFor={habit.id} className="text-fantasy-light">
                        {habit.label}
                      </Label>
                    </div>
                  ))
                }
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-fantasy-light">Mind Quests</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {predefinedHabits
                  .filter(habit => habit.category === 'mind')
                  .map(habit => (
                    <div key={habit.id} className="flex items-start space-x-2">
                      <Checkbox 
                        id={habit.id} 
                        checked={selectedHabits.includes(habit.id)}
                        onCheckedChange={() => handleHabitSelect(habit.id)}
                        className="mt-0.5 data-[state=checked]:bg-fantasy-primary data-[state=checked]:border-fantasy-primary"
                      />
                      <Label htmlFor={habit.id} className="text-fantasy-light">
                        {habit.label}
                      </Label>
                    </div>
                  ))
                }
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-fantasy-light">Skill Quests</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {predefinedHabits
                  .filter(habit => habit.category === 'skill')
                  .map(habit => (
                    <div key={habit.id} className="flex items-start space-x-2">
                      <Checkbox 
                        id={habit.id} 
                        checked={selectedHabits.includes(habit.id)}
                        onCheckedChange={() => handleHabitSelect(habit.id)}
                        className="mt-0.5 data-[state=checked]:bg-fantasy-primary data-[state=checked]:border-fantasy-primary"
                      />
                      <Label htmlFor={habit.id} className="text-fantasy-light">
                        {habit.label}
                      </Label>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <h3 className="text-lg font-semibold mb-3 text-fantasy-light">Custom Quests</h3>
              <div className="flex space-x-2 mb-4">
                <Input
                  placeholder="Add your custom habit"
                  value={newCustomHabit}
                  onChange={(e) => setNewCustomHabit(e.target.value)}
                  className="fantasy-input"
                />
                <Button 
                  type="button" 
                  onClick={handleAddCustomHabit}
                  className="bg-fantasy-accent text-fantasy-dark hover:bg-opacity-90"
                >
                  Add
                </Button>
              </div>
              
              {customHabits.length > 0 && (
                <div className="space-y-2">
                  {customHabits.map((habit, index) => (
                    <div key={index} className="flex justify-between items-center bg-fantasy-dark bg-opacity-30 p-2 rounded-md">
                      <span className="text-fantasy-light">{habit}</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleRemoveCustomHabit(index)}
                        className="text-fantasy-danger hover:text-red-500 h-auto py-1"
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
          
          <CardFooter>
            <Button 
              className="w-full fantasy-button"
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
