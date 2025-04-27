import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Users } from 'lucide-react';

const GuildCreation: React.FC = () => {
  const navigate = useNavigate();
  const [guildName, setGuildName] = useState('');
  const [guildDescription, setGuildDescription] = useState('');

  const handleCreateGuild = () => {
    // TODO: Implement guild creation logic
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-fantasy-dark to-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="fantasy-card border-fantasy-primary border-opacity-20">
          <CardHeader>
            <CardTitle className="text-fantasy-accent flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              Create Your Guild
            </CardTitle>
            <CardDescription>
              Form a guild to tackle challenges together and earn bonus rewards
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="guildName" className="text-fantasy-light">
                Guild Name
              </Label>
              <Input
                id="guildName"
                value={guildName}
                onChange={(e) => setGuildName(e.target.value)}
                placeholder="Enter your guild name"
                className="fantasy-input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guildDescription" className="text-fantasy-light">
                Guild Description
              </Label>
              <Input
                id="guildDescription"
                value={guildDescription}
                onChange={(e) => setGuildDescription(e.target.value)}
                placeholder="Describe your guild's purpose"
                className="fantasy-input"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => navigate('/habits')}
              className="fantasy-button-outline"
            >
              Back
            </Button>
            <Button
              onClick={handleCreateGuild}
              className="fantasy-button bg-fantasy-primary hover:bg-opacity-90"
            >
              Create Guild
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default GuildCreation;
