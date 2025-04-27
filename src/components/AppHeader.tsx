import React from 'react';
import { Bell, MessageSquare, Trophy, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-40 bg-fantasy-dark bg-opacity-95 backdrop-filter backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-fantasy-accent font-fantasy text-2xl">Habitify</div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-fantasy-light hover:bg-fantasy-primary hover:bg-opacity-20">
            <Bell size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-fantasy-light hover:bg-fantasy-primary hover:bg-opacity-20">
            <MessageSquare size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-fantasy-light hover:bg-fantasy-primary hover:bg-opacity-20">
            <Trophy size={20} />
          </Button>
          <div className="w-8 h-8 rounded-full bg-fantasy-primary flex items-center justify-center text-white cursor-pointer">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
