
import React, { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import AvatarCreation, { AvatarData } from '@/components/AvatarCreation';
import HabitSelection, { HabitData } from '@/components/HabitSelection';
import GuildCreation, { GuildData } from '@/components/GuildCreation';
import Dashboard from '@/components/Dashboard';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'welcome' | 'avatar' | 'habits' | 'guild' | 'dashboard'>('welcome');
  const [avatarData, setAvatarData] = useState<AvatarData>({
    name: '',
    class: 'warrior',
    theme: 'medieval',
  });
  const [habitData, setHabitData] = useState<HabitData>({
    selectedHabits: [],
    customHabits: [],
  });
  const [guildData, setGuildData] = useState<GuildData>({
    type: 'create',
  });

  const handleAvatarCreationNext = (data: AvatarData) => {
    setAvatarData(data);
    setCurrentStep('habits');
  };

  const handleHabitSelectionNext = (data: HabitData) => {
    setHabitData(data);
    setCurrentStep('guild');
  };

  const handleGuildCreationNext = (data: GuildData) => {
    setGuildData(data);
    setCurrentStep('dashboard');
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {currentStep === 'welcome' && (
          <WelcomeScreen onStart={() => setCurrentStep('avatar')} />
        )}
        
        {currentStep === 'avatar' && (
          <AvatarCreation 
            onNext={handleAvatarCreationNext} 
            onBack={() => setCurrentStep('welcome')}
          />
        )}
        
        {currentStep === 'habits' && (
          <HabitSelection 
            onNext={handleHabitSelectionNext}
            onBack={() => setCurrentStep('avatar')} 
          />
        )}
        
        {currentStep === 'guild' && (
          <GuildCreation 
            onNext={handleGuildCreationNext}
            onBack={() => setCurrentStep('habits')} 
          />
        )}
        
        {currentStep === 'dashboard' && (
          <Dashboard avatarData={avatarData} habitData={habitData} />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
