export interface Habit {
  id: string;
  name: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface HabitData {
  habits: Habit[];
  selectedHabits: string[]; // Array of habit IDs
} 