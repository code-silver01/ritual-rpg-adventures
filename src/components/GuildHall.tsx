import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Crown, Shield } from 'lucide-react';

interface Guild {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  level: number;
  challenges: any[];
  activeMembers: any[];
}

interface GuildHallProps {
  activeGuild: Guild | null;
  publicGuilds: Guild[];
  onJoinGuild: (guildId: string) => void;
}

const GuildHall: React.FC<GuildHallProps> = ({
  activeGuild,
  publicGuilds,
  onJoinGuild
}) => {
  return (
    <Card className="fantasy-card border-fantasy-primary border-opacity-20">
      <CardHeader>
        <CardTitle className="text-fantasy-accent flex items-center">
          <Shield className="w-5 h-5 mr-2" />
          Guild Hall
        </CardTitle>
        <CardDescription>
          Join a guild to tackle challenges together and earn bonus rewards
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activeGuild ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-fantasy-light">{activeGuild.name}</h3>
                <p className="text-sm text-fantasy-light text-opacity-60">{activeGuild.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-fantasy-accent" />
                <span className="text-sm text-fantasy-light">{activeGuild.memberCount}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Crown className="w-4 h-4 text-fantasy-accent" />
              <span className="text-sm text-fantasy-light">Level {activeGuild.level}</span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-fantasy-light">Available Guilds</h3>
            <div className="space-y-3">
              {publicGuilds.map(guild => (
                <div
                  key={guild.id}
                  className="bg-fantasy-dark bg-opacity-30 p-3 rounded-md"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-fantasy-light font-medium">{guild.name}</h4>
                      <p className="text-sm text-fantasy-light text-opacity-60">{guild.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-fantasy-accent" />
                      <span className="text-sm text-fantasy-light">{guild.memberCount}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Crown className="w-4 h-4 text-fantasy-accent" />
                      <span className="text-sm text-fantasy-light">Level {guild.level}</span>
                    </div>
                    <Button
                      onClick={() => onJoinGuild(guild.id)}
                      className="fantasy-button bg-fantasy-primary hover:bg-opacity-90"
                      size="sm"
                    >
                      Join
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GuildHall; 