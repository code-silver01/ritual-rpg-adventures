import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HabitSelection from '@/components/HabitSelection';
import { HabitData } from '@/types/habit';

const Habits: React.FC = () => {
  const navigate = useNavigate();
  const [selectedHabits, setSelectedHabits] = useState<HabitData>({
    habits: [],
    selectedHabits: []
  });

  const handleHabitsSelected = (habits: HabitData) => {
    setSelectedHabits(habits);
    // Here you can save the habits to your backend or state management
    navigate('/dashboard'); // Navigate to dashboard after selection
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
        />
      </div>
    </div>
  );
};

export default Habits; 