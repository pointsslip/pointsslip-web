import { Counter } from "./Counter";

interface TaskItemProps {
  name: string;
  points: number;
  count: number;
  onCountChange: (count: number) => void;
}

export const TaskItem = ({ name, points, count, onCountChange }: TaskItemProps) => {
  return (
    <div className="group flex items-center justify-between rounded-xl border-2 border-border bg-card p-4 transition-all hover:border-accent/50 hover:shadow-md">
      <div className="flex-1">
        <h3 className="font-semibold text-card-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">
          {points} point{points !== 1 ? 's' : ''} each
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Counter value={count} onChange={onCountChange} />
        <div className="w-20 text-right">
          <span className="text-lg font-bold text-primary">
            {count * points}
          </span>
          <span className="ml-1 text-sm text-muted-foreground">pts</span>
        </div>
      </div>
    </div>
  );
};
