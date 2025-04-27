
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Users, MessageCircle, Crown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface GuildChallenge {
  title: string;
  description: string;
  progress: number;
  target: number;
  daysLeft: number;
}

interface GuildMember {
  id: string;
  name: string;
  role: 'leader' | 'member';
  tasksCompleted: number;
}

const GuildPanel = () => {
  const { toast } = useToast();
  const [hasGuild, setHasGuild] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');

  // Sample data - in a real app this would come from your backend
  const guildChallenge: GuildChallenge = {
    title: "Defeat the Procrastination Dragon",
    description: "Complete 20 collective meditation sessions",
    progress: 7,
    target: 20,
    daysLeft: 2
  };

  const guildMembers: GuildMember[] = [
    { id: '1', name: 'DragonSlayer92', role: 'leader', tasksCompleted: 15 },
    { id: '2', name: 'QuestMaster', role: 'member', tasksCompleted: 12 },
    { id: '3', name: 'HabitHero', role: 'member', tasksCompleted: 8 }
  ];

  const handleSendNudge = (memberName: string) => {
    toast({
      title: "Nudge Sent!",
      description: `You've sent an encouraging nudge to ${memberName}!`,
    });
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      toast({
        title: "Message Sent",
        description: "Your message has been sent to the guild chat.",
      });
      setMessage('');
    }
  };

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
                <p className="text-sm text-fantasy-light text-opacity-70">
                  {guildMembers.length} members • Level 3
                </p>
              </div>
            </div>
            
            {/* Weekly Challenge / Boss Battle */}
            <div className="bg-fantasy-dark bg-opacity-40 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">{guildChallenge.title}</h4>
                <span className="text-xs bg-fantasy-accent bg-opacity-20 text-fantasy-accent px-2 py-0.5 rounded-full">
                  {guildChallenge.daysLeft} days left
                </span>
              </div>
              <p className="text-sm mb-2">{guildChallenge.description}</p>
              <Progress 
                value={(guildChallenge.progress / guildChallenge.target) * 100} 
                className="fantasy-progress-bar" 
              />
              <p className="text-xs mt-1 text-right text-fantasy-light text-opacity-70">
                {guildChallenge.progress}/{guildChallenge.target} completed
              </p>
            </div>

            {/* Guild Members */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Guild Members</h4>
              {guildMembers.map(member => (
                <div 
                  key={member.id} 
                  className="flex items-center justify-between bg-fantasy-dark bg-opacity-30 p-2 rounded-md"
                >
                  <div>
                    <span className="text-sm font-medium">{member.name}</span>
                    {member.role === 'leader' && (
                      <span className="ml-2 text-xs bg-fantasy-accent bg-opacity-20 text-fantasy-accent px-2 py-0.5 rounded-full">
                        Leader
                      </span>
                    )}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleSendNudge(member.name)}
                    className="text-fantasy-accent hover:text-fantasy-accent hover:bg-fantasy-accent/10"
                  >
                    Nudge
                  </Button>
                </div>
              ))}
            </div>

            {/* Guild Chat */}
            <div className="space-y-2">
              <Button 
                onClick={() => setShowChat(!showChat)} 
                className="w-full flex items-center justify-center gap-2 fantasy-button-outline"
              >
                <MessageCircle className="h-4 w-4" />
                Guild Chat
              </Button>
              
              {showChat && (
                <div className="mt-2 space-y-2">
                  <div className="h-32 bg-fantasy-dark bg-opacity-30 rounded-md p-2 overflow-y-auto">
                    <p className="text-sm text-fantasy-light text-opacity-70 text-center">
                      Chat messages will appear here
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 fantasy-input text-sm h-9"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      className="fantasy-button h-9"
                    >
                      Send
                    </Button>
                  </div>
                </div>
              )}
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
              <Button 
                onClick={() => setHasGuild(true)} 
                className="w-full fantasy-button"
              >
                Create a Guild
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setHasGuild(true)} 
                className="w-full fantasy-button-outline"
              >
                Join Existing Guild
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GuildPanel;
