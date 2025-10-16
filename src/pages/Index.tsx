import { useState } from "react";
import { TaskItem } from "@/components/TaskItem";
import { Button } from "@/components/ui/button";
import { RotateCcw, Award } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Task {
  id: string;
  name: string;
  points: number;
  count: number;
}

const initialTasks: Task[] = [
  { id: "1", name: "Pages Read (10 points per page):", points: 10, count: 0 },
  { id: "2", name: "Videos/Live or Recorded Lectures/Teacher Instruction (5 points per minute):", points: 5, count: 0 },
  { id: "3", name: "Passing a Theory Checkout (3 points per page):", points: 3, count: 0 },
  { id: "4", name: "Giving a Theory Checkout (when passed, 3 points per page):", points: 3, count: 0 },
  { id: "5", name: "Finding MUs (5 points per word):", points: 5, count: 0 },
  { id: "6", name: "Giving a Checkout on a Demo (3 points):", points: 3, count: 0 },
  { id: "7", name: "For Each Definition, Derivation, Idiom or Synonym Fully Cleared (3 points):", points: 3, count: 0 },
  { id: "8", name: "Giving/Receiving Word Clearing (150 points per hour):", points: 150, count: 0 },
  { id: "9", name: "Theory Coaching - Student and Coach (5 points per line):", points: 5, count: 0 },
  { id: "10", name: "Any drill that takes 15 minutes or less. (40 points):", points: 40, count: 0 },
  { id: "11", name: "Giving/Receiving Word Clearing (150 points per hour):", points: 12, count: 0 },
  { id: "12", name: "Giving/Receiving Word Clearing (150 points per hour):", points: 12, count: 0 },
];

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const totalPoints = tasks.reduce((sum, task) => sum + task.points * task.count, 0);

  const handleCountChange = (taskId: string, newCount: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, count: newCount } : task
    ));
  };

  const handleReset = () => {
    setTasks(initialTasks);
    toast({
      title: "Reset Complete",
      description: "All task counts have been reset to zero.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-gradient-primary">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-primary-foreground" />
              <div>
                <h1 className="text-2xl font-bold text-primary-foreground">
                  Production Points Tracker
                </h1>
                <p className="text-sm text-primary-foreground/80">
                  Delphian School Daily Achievements
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="bg-white/10 text-primary-foreground border-white/20 hover:bg-white/20 hover:text-primary-foreground"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Tasks List */}
          <div className="space-y-3 animate-fade-in">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                name={task.name}
                points={task.points}
                count={task.count}
                onCountChange={(count) => handleCountChange(task.id, count)}
              />
            ))}
          </div>

          {/* Total Points Display */}
          <div className="mt-8 animate-scale-in">
            <div className="rounded-2xl bg-gradient-accent p-1 shadow-elegant">
              <div className="rounded-xl bg-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Today's Total Points
                    </p>
                    <p className="mt-1 text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                      {totalPoints}
                    </p>
                  </div>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-accent animate-glow-pulse">
                    <Award className="h-10 w-10 text-accent-foreground" />
                  </div>
                </div>
                {totalPoints > 0 && (
                  <div className="mt-4 rounded-lg bg-accent/10 px-4 py-2">
                    <p className="text-sm text-accent font-medium">
                      Great work! Keep building your achievements! 🎯
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
