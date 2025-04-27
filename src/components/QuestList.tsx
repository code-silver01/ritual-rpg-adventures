
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { HabitData } from './HabitSelection';
import { Check } from 'lucide-react';
import { toast } from 'sonner';

interface QuestListProps {
  habitData: HabitData;
}

interface Quest {
  id: string;
  name: string;
  completed: boolean;
  category: string;
  xp: number;
}

const QuestList: React.FC<QuestListProps> = ({ habitData }) => {
  // Convert habit data to quests
  const initialQuests: Quest[] = [
    ...(habitData.selectedHabits.map(id => {
      const predefinedHabit = predefinedHabits.find(h => h.id === id);
      return {
        id,
        name: predefinedHabit?.label || id,
        completed: false,
        category: predefinedHabit?.category || 'custom',
        xp: Math.floor(Math.random() * 15) + 5 // Random XP between 5-20
      };
    })),
    ...(habitData.customHabits.map((habitName, index) => ({
      id: `custom-${index}`,
      name: habitName,
      completed: false,
      category: 'custom',
      xp: Math.floor(Math.random() * 15) + 5 // Random XP between 5-20
    })))
  ];

  const [quests, setQuests] = useState<Quest[]>(initialQuests.length > 0 ? initialQuests : demoQuests);

  const handleCompleteQuest = (id: string) => {
    setQuests(quests.map(q => 
      q.id === id ? { ...q, completed: !q.completed } : q
    ));
    
    const quest = quests.find(q => q.id === id);
    if (quest && !quest.completed) {
      toast(`Quest completed! +${quest.xp} XP`, {
        description: "Keep up the great work!",
        position: "bottom-center",
        className: "bg-fantasy-primary text-white"
      });
    }
  };

  return (
    <div className="space-y-3">
      {quests.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-fantasy-light text-opacity-70">No quests added yet.</p>
          <Button className="mt-4 fantasy-button">Add Your First Quest</Button>
        </div>
      ) : (
        quests.map((quest) => (
          <div
            key={quest.id}
            className={`quest-item group transition-all duration-300 ${
              quest.completed 
                ? 'bg-fantasy-primary bg-opacity-10 border-fantasy-primary border-opacity-30' 
                : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Checkbox 
                  checked={quest.completed}
                  onCheckedChange={() => handleCompleteQuest(quest.id)}
                  className={`h-6 w-6 rounded-md data-[state=checked]:bg-fantasy-primary data-[state=checked]:border-fantasy-primary
                    ${quest.completed ? 'animate-pulse-glow' : ''}`}
                />
              </div>
              <div className="flex-grow">
                <p className={`font-medium ${quest.completed ? 'line-through text-opacity-70' : ''}`}>
                  {quest.name}
                </p>
                <div className="flex items-center gap-2 text-xs text-fantasy-light text-opacity-70 mt-1">
                  <span className="capitalize">{quest.category}</span>
                  <span className="w-1 h-1 rounded-full bg-fantasy-light bg-opacity-30"></span>
                  <span className="text-fantasy-accent font-medium">{quest.xp} XP</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                {quest.completed ? (
                  <div className="bg-fantasy-primary rounded-full p-1 text-white">
                    <Check className="h-4 w-4" />
                  </div>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    className="opacity-0 group-hover:opacity-100 transition-opacity fantasy-button-outline text-xs h-8"
                    onClick={() => handleCompleteQuest(quest.id)}
                  >
                    Complete
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))
      )}
      
      {quests.length > 0 && (
        <Button className="w-full mt-4 fantasy-button-outline">
          + Add New Quest
        </Button>
      )}
    </div>
  );
};

// Demo data for the preview
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

const demoQuests: Quest[] = [
  { id: 'exercise', name: 'Exercise (30 mins daily)', completed: false, category: 'health', xp: 15 },
  { id: 'reading', name: 'Read (20 mins daily)', completed: true, category: 'mind', xp: 10 },
  { id: 'water', name: 'Drink 8 glasses of water', completed: false, category: 'health', xp: 12 },
];

export default QuestList;
