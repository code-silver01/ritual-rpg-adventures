import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sword, Scroll, Users } from 'lucide-react';

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-fantasy-dark to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-fantasy text-fantasy-accent mb-4">
            Ritual RPG Adventures
          </h1>
          <p className="text-xl text-fantasy-light">
            Transform your habits into epic quests and embark on a journey of self-improvement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="fantasy-card border-fantasy-primary border-opacity-20">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-fantasy-primary bg-opacity-20 flex items-center justify-center mb-4">
                <Sword className="w-6 h-6 text-fantasy-accent" />
              </div>
              <CardTitle className="text-fantasy-accent">Create Your Character</CardTitle>
              <CardDescription>
                Choose your class and customize your avatar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => navigate('/avatar')}
                className="w-full fantasy-button bg-fantasy-primary hover:bg-opacity-90"
              >
                Begin
              </Button>
            </CardContent>
          </Card>

          <Card className="fantasy-card border-fantasy-primary border-opacity-20">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-fantasy-primary bg-opacity-20 flex items-center justify-center mb-4">
                <Scroll className="w-6 h-6 text-fantasy-accent" />
              </div>
              <CardTitle className="text-fantasy-accent">Select Your Quests</CardTitle>
              <CardDescription>
                Choose habits to transform into daily quests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => navigate('/habits')}
                className="w-full fantasy-button bg-fantasy-primary hover:bg-opacity-90"
              >
                Select Quests
              </Button>
            </CardContent>
          </Card>

          <Card className="fantasy-card border-fantasy-primary border-opacity-20">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-fantasy-primary bg-opacity-20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-fantasy-accent" />
              </div>
              <CardTitle className="text-fantasy-accent">Join a Guild</CardTitle>
              <CardDescription>
                Team up with others for shared adventures
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => navigate('/guild')}
                className="w-full fantasy-button bg-fantasy-primary hover:bg-opacity-90"
              >
                Find Guild
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
