
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Users, MessageCircle, Crown } from 'lucide-react';

const GuildPanel = () => {
  // This could come from props in a real implementation
  const hasGuild = false;
  
  return (
    <Card className="fantasy-card border-fantasy-primary border-opacity-20">
      <CardHeader>
        <CardTitle className="text-fantasy-accent flex items-center">
          <Users className="mr-2 h-5 w-5" />
          <span>Guild</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {hasGuild ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-fantasy-primary flex items-center justify-center">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Dragon Slayers</h3>
                <p className="text-sm text-fantasy-light text-opacity-70">5 members • Level 3</p>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Guild XP</span>
                <span>1250/2000</span>
              </div>
              <Progress value={62.5} className="fantasy-progress-bar" />
            </div>
            
            <div className="bg-fantasy-dark bg-opacity-40 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Weekly Challenge</h4>
                <span className="text-xs bg-fantasy-accent bg-opacity-20 text-fantasy-accent px-2 py-0.5 rounded-full">
                  2 days left
                </span>
              </div>
              <p className="text-sm mb-2">Complete 20 collective meditation sessions</p>
              <Progress value={35} className="fantasy-progress-bar" />
              <p className="text-xs mt-1 text-right text-fantasy-light text-opacity-70">7/20 completed</p>
            </div>
            
            <div className="flex gap-2">
              <Button className="flex-1 h-9 fantasy-button-outline">
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat
              </Button>
              <Button className="flex-1 h-9 fantasy-button-outline">Send Nudges</Button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <Users className="h-12 w-12 mx-auto text-fantasy-primary opacity-60" />
            <div>
              <p className="mb-1">You haven't joined a guild yet</p>
              <p className="text-sm text-fantasy-light text-opacity-70">
                Join a guild to tackle challenges together and earn bonus rewards
              </p>
            </div>
            <div className="space-y-2">
              <Button className="w-full fantasy-button">Create a Guild</Button>
              <Button variant="outline" className="w-full fantasy-button-outline">Join Existing Guild</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GuildPanel;
