import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Trophy, Sword } from 'lucide-react';

interface GuildMember {
  id: string;
  name: string;
  level: number;
  avatar: string;
}

interface GuildQuest {
  id: string;
  name: string;
  description: string;
  reward: number;
  progress: number;
  total: number;
}

interface GuildPanelProps {
  name: string;
  level: number;
  members: GuildMember[];
  quests: GuildQuest[];
  onJoinGuild: () => void;
  onCompleteQuest: (questId: string) => void;
}

const GuildPanel: React.FC<GuildPanelProps> = ({
  name,
  level,
  members,
  quests,
  onJoinGuild,
  onCompleteQuest
}) => {
  return (
    <Card className="fantasy-card border-fantasy-primary border-opacity-20">
      <CardHeader>
        <CardTitle className="text-fantasy-accent flex items-center justify-between">
          <span>{name}</span>
          <span className="text-sm bg-fantasy-accent bg-opacity-20 text-fantasy-accent px-2 py-1 rounded-full">
            Level {level}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Guild Members */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-fantasy-light flex items-center">
            <Users className="w-5 h-5 mr-2 text-fantasy-accent" />
            Guild Members
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {members.map(member => (
              <div key={member.id} className="flex items-center space-x-2 bg-fantasy-dark bg-opacity-30 p-2 rounded-md">
                <div className="w-8 h-8 rounded-full bg-fantasy-primary bg-opacity-20 flex items-center justify-center">
                  {member.avatar}
                </div>
                <div>
                  <p className="text-fantasy-light">{member.name}</p>
                  <p className="text-xs text-fantasy-light text-opacity-60">Level {member.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guild Quests */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-fantasy-light flex items-center">
            <Sword className="w-5 h-5 mr-2 text-fantasy-accent" />
            Guild Quests
          </h3>
          <div className="space-y-3">
            {quests.map(quest => (
              <div key={quest.id} className="bg-fantasy-dark bg-opacity-30 p-3 rounded-md">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-fantasy-light font-medium">{quest.name}</h4>
                  <span className="text-sm bg-fantasy-accent bg-opacity-20 text-fantasy-accent px-2 py-1 rounded-full">
                    {quest.progress}/{quest.total}
                  </span>
                </div>
                <p className="text-sm text-fantasy-light text-opacity-60 mb-2">{quest.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-fantasy-accent flex items-center">
                    <Trophy className="w-4 h-4 mr-1" />
                    {quest.reward} XP
                  </span>
                  <Button
                    onClick={() => onCompleteQuest(quest.id)}
                    className="fantasy-button bg-fantasy-primary hover:bg-opacity-90"
                    size="sm"
                  >
                    Complete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Guild Button */}
        <Button
          onClick={onJoinGuild}
          className="w-full fantasy-button bg-fantasy-accent hover:bg-opacity-90"
        >
          Join Guild
        </Button>
      </CardContent>
    </Card>
  );
};

export default GuildPanel;
