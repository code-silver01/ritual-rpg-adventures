import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HabitSelection from '@/components/HabitSelection';

interface Habit {
  id: string;
  name: string;
  frequency: string;
  difficulty: string;
}

const habits: Habit[] = [
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

const Habits: React.FC = () => {
  const navigate = useNavigate();

  const handleHabitsSelected = (selectedIds: string[]) => {
    console.log('Selected habits:', selectedIds);
    navigate('/dashboard');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-fantasy-dark to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <HabitSelection
          onHabitsSelected={handleHabitsSelected}
          onBack={handleBack}
          habits={habits}
        />
      </div>
    </div>
  );
};

export default Habits; 