
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

interface AvatarCreationProps {
  onNext: (data: AvatarData) => void;
  onBack: () => void;
}

export interface AvatarData {
  name: string;
  class: string;
  theme: string;
}

const AvatarCreation: React.FC<AvatarCreationProps> = ({ onNext, onBack }) => {
  const [avatarData, setAvatarData] = useState<AvatarData>({
    name: '',
    class: 'warrior',
    theme: 'medieval',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(avatarData);
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
            <CardTitle className="text-2xl text-center text-fantasy-accent">Create Your Hero</CardTitle>
            <CardDescription className="text-center text-fantasy-light">
              Design your avatar to begin your adventure
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-fantasy-light">Hero Name</Label>
                  <Input
                    id="name"
                    value={avatarData.name}
                    onChange={(e) => setAvatarData({...avatarData, name: e.target.value})}
                    placeholder="Enter your hero name"
                    required
                    className="fantasy-input"
                  />
                </div>
                
                <div>
                  <Label className="text-fantasy-light mb-2 block">Character Class</Label>
                  <RadioGroup
                    value={avatarData.class}
                    onValueChange={(value) => setAvatarData({...avatarData, class: value})}
                    className="grid grid-cols-2 gap-4 md:grid-cols-4"
                  >
                    {['warrior', 'wizard', 'rogue', 'cleric'].map((characterClass) => (
                      <div key={characterClass} className="space-y-2">
                        <RadioGroupItem
                          value={characterClass}
                          id={characterClass}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={characterClass}
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-fantasy-dark p-4 hover:bg-fantasy-primary hover:bg-opacity-10 
                          peer-data-[state=checked]:border-fantasy-primary [&:has([data-state=checked])]:border-fantasy-primary cursor-pointer"
                        >
                          <div className="mb-3 h-16 w-16 rounded-full bg-fantasy-primary bg-opacity-20 flex items-center justify-center">
                            {characterClass === 'warrior' && '⚔️'}
                            {characterClass === 'wizard' && '🧙‍♂️'}
                            {characterClass === 'rogue' && '🏹'}
                            {characterClass === 'cleric' && '✨'}
                          </div>
                          <span className="capitalize text-fantasy-light">{characterClass}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <Label className="text-fantasy-light mb-2 block">Theme</Label>
                  <RadioGroup
                    value={avatarData.theme}
                    onValueChange={(value) => setAvatarData({...avatarData, theme: value})}
                    className="grid grid-cols-1 gap-4 md:grid-cols-3"
                  >
                    {['medieval', 'sci-fi', 'anime'].map((theme) => (
                      <div key={theme} className="space-y-2">
                        <RadioGroupItem
                          value={theme}
                          id={theme}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={theme}
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-fantasy-dark p-4 hover:bg-fantasy-primary hover:bg-opacity-10 
                          peer-data-[state=checked]:border-fantasy-primary [&:has([data-state=checked])]:border-fantasy-primary cursor-pointer"
                        >
                          <span className="capitalize text-fantasy-light">{theme}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </form>
          </CardContent>
          
          <CardFooter>
            <Button 
              type="submit" 
              onClick={handleSubmit}
              className="w-full fantasy-button"
            >
              Continue to Habit Selection
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default AvatarCreation;
