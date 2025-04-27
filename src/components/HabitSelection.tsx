
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

interface HabitSelectionProps {
  onNext: (data: HabitData) => void;
  onBack: () => void;
}

export interface HabitData {
  selectedHabits: string[];
  customHabits: string[];
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

const HabitSelection: React.FC<HabitSelectionProps> = ({ onNext, onBack }) => {
  const [selectedHabits, setSelectedHabits] = useState<string[]>([]);
  const [customHabits, setCustomHabits] = useState<string[]>([]);
  const [customHabitInput, setCustomHabitInput] = useState<string>('');

  const handleToggleHabit = (habitId: string) => {
    if (selectedHabits.includes(habitId)) {
      setSelectedHabits(selectedHabits.filter((id) => id !== habitId));
    } else {
      setSelectedHabits([...selectedHabits, habitId]);
    }
  };

  const handleAddCustomHabit = () => {
    if (customHabitInput.trim() !== '') {
      setCustomHabits([...customHabits, customHabitInput.trim()]);
      setCustomHabitInput('');
    }
  };

  const handleRemoveCustomHabit = (index: number) => {
    setCustomHabits(customHabits.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    onNext({
      selectedHabits,
      customHabits,
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
                        onCheckedChange={() => handleToggleHabit(habit.id)}
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
                        onCheckedChange={() => handleToggleHabit(habit.id)}
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
                        onCheckedChange={() => handleToggleHabit(habit.id)}
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
                  value={customHabitInput}
                  onChange={(e) => setCustomHabitInput(e.target.value)}
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
              onClick={handleSubmit}
              disabled={selectedHabits.length === 0 && customHabits.length === 0}
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
