import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Calendar, BarChart2, Flame } from 'lucide-react';

interface HabitDashboardProps {
  habitData: {
    id: string;
    name: string;
    streak: number;
    completedDates: string[];
    totalCompletions: number;
  }[];
}

const HabitDashboard: React.FC<HabitDashboardProps> = ({ habitData }) => {
  const today = new Date();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  
  const getCompletionRate = (dates: string[]) => {
    const thisMonth = dates.filter(date => new Date(date).getMonth() === today.getMonth());
    return (thisMonth.length / daysInMonth) * 100;
  };

  return (
    <Card className="fantasy-card border-fantasy-primary border-opacity-20">
      <CardHeader>
        <CardTitle className="text-fantasy-accent flex items-center gap-2">
          <BarChart2 className="w-5 h-5" />
          Habit Journey
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="calendar" className="space-y-4">
          <TabsList>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="streaks">Streak Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="calendar" className="space-y-4">
            {habitData.map((habit) => (
              <div key={habit.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-fantasy-light font-medium">{habit.name}</h3>
                  <span className="text-sm text-fantasy-accent">
                    {Math.round(getCompletionRate(habit.completedDates))}% Complete
                  </span>
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: daysInMonth }).map((_, index) => {
                    const date = new Date(today.getFullYear(), today.getMonth(), index + 1);
                    const isCompleted = habit.completedDates.includes(date.toISOString().split('T')[0]);
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.01 }}
                        className={`
                          aspect-square rounded-sm
                          ${isCompleted 
                            ? 'bg-fantasy-accent bg-opacity-80' 
                            : 'bg-fantasy-dark bg-opacity-30'}
                        `}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="streaks" className="space-y-4">
            {habitData.map((habit) => (
              <div key={habit.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-fantasy-light font-medium">{habit.name}</h3>
                  <div className="flex items-center gap-2 text-fantasy-accent">
                    <Flame className="w-4 h-4" />
                    <span>{habit.streak} day streak</span>
                  </div>
                </div>
                
                <div className="h-2 bg-fantasy-dark bg-opacity-30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(habit.streak / 30) * 100}%` }}
                    className="h-full bg-fantasy-accent"
                  />
                </div>
                
                <div className="text-sm text-fantasy-light text-opacity-60">
                  Total completions: {habit.totalCompletions}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default HabitDashboard; 