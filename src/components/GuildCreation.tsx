
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

interface GuildCreationProps {
  onNext: (data: GuildData) => void;
  onBack: () => void;
}

export interface GuildData {
  type: 'create' | 'join';
  guildName?: string;
  guildCode?: string;
  invitedFriends?: string[];
}

const GuildCreation: React.FC<GuildCreationProps> = ({ onNext, onBack }) => {
  const [activeTab, setActiveTab] = useState<'create' | 'join'>('create');
  const [guildName, setGuildName] = useState('');
  const [guildCode, setGuildCode] = useState('');
  const [friendEmail, setFriendEmail] = useState('');
  const [invitedFriends, setInvitedFriends] = useState<string[]>([]);

  const handleAddFriend = () => {
    if (friendEmail && !invitedFriends.includes(friendEmail)) {
      setInvitedFriends([...invitedFriends, friendEmail]);
      setFriendEmail('');
    }
  };

  const handleRemoveFriend = (email: string) => {
    setInvitedFriends(invitedFriends.filter(e => e !== email));
  };

  const handleSubmit = () => {
    if (activeTab === 'create' && guildName) {
      onNext({
        type: 'create',
        guildName,
        invitedFriends
      });
    } else if (activeTab === 'join' && guildCode) {
      onNext({
        type: 'join',
        guildCode
      });
    }
  };

  return (
    <div className="min-h-screen bg-fantasy-dark py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
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
            <CardTitle className="text-2xl text-center text-fantasy-accent">Guild Membership</CardTitle>
            <CardDescription className="text-center text-fantasy-light">
              Create or join a guild to embark on group adventures
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="create" onValueChange={(v) => setActiveTab(v as 'create' | 'join')}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="create">Create a Guild</TabsTrigger>
                <TabsTrigger value="join">Join a Guild</TabsTrigger>
              </TabsList>
              
              <TabsContent value="create" className="space-y-6">
                <div>
                  <Label htmlFor="guildName" className="text-fantasy-light">Guild Name</Label>
                  <Input
                    id="guildName"
                    value={guildName}
                    onChange={(e) => setGuildName(e.target.value)}
                    placeholder="Enter a name for your guild"
                    className="fantasy-input"
                  />
                </div>
                
                <div>
                  <Label className="text-fantasy-light mb-2 block">Invite Friends (Optional)</Label>
                  <div className="flex space-x-2 mb-4">
                    <Input
                      placeholder="Friend's email"
                      value={friendEmail}
                      onChange={(e) => setFriendEmail(e.target.value)}
                      className="fantasy-input"
                    />
                    <Button 
                      type="button" 
                      onClick={handleAddFriend}
                      className="bg-fantasy-accent text-fantasy-dark hover:bg-opacity-90"
                    >
                      Add
                    </Button>
                  </div>
                  
                  {invitedFriends.length > 0 && (
                    <div className="space-y-2 mt-4">
                      <h4 className="text-sm font-medium text-fantasy-light">Invited Friends:</h4>
                      {invitedFriends.map((email, index) => (
                        <div key={index} className="flex justify-between items-center bg-fantasy-dark bg-opacity-30 p-2 rounded-md">
                          <span className="text-fantasy-light">{email}</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleRemoveFriend(email)}
                            className="text-fantasy-danger hover:text-red-500 h-auto py-1"
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="join" className="space-y-6">
                <div>
                  <Label htmlFor="guildCode" className="text-fantasy-light">Guild Invite Code</Label>
                  <Input
                    id="guildCode"
                    value={guildCode}
                    onChange={(e) => setGuildCode(e.target.value)}
                    placeholder="Enter the guild invite code"
                    className="fantasy-input"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          
          <CardFooter>
            <Button 
              onClick={handleSubmit}
              disabled={(activeTab === 'create' && !guildName) || (activeTab === 'join' && !guildCode)}
              className="w-full fantasy-button"
            >
              {activeTab === 'create' ? 'Create Guild & Continue' : 'Join Guild & Continue'}
            </Button>
          </CardFooter>
        </Card>
        
        <div className="mt-6 text-center text-fantasy-light">
          <Button 
            variant="link" 
            className="text-fantasy-accent"
            onClick={() => onNext({ type: 'skip' })}
          >
            Skip for now
          </Button>
          <p className="text-sm mt-1 text-fantasy-light text-opacity-60">
            You can always create or join a guild later
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default GuildCreation;
