import React from 'react';
import { Button } from '@/components/ui/button';
import { Sword, Settings } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const AppHeader: React.FC = () => {
  return (
    <header className="bg-fantasy-dark border-b border-fantasy-primary border-opacity-20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sword className="h-6 w-6 text-fantasy-accent" />
            <h1 className="text-xl font-fantasy text-fantasy-light">
              Ritual RPG Adventures
            </h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-fantasy-light hover:text-fantasy-accent"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
