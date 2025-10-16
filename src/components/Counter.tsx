import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
}

export const Counter = ({ value, onChange }: CounterProps) => {
  const handleDecrement = () => {
    if (value > 0) onChange(value - 1);
  };

  const handleIncrement = () => {
    onChange(value + 1);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={handleDecrement}
        disabled={value === 0}
        className="h-9 w-9 rounded-full border-2 transition-all hover:scale-105 hover:border-accent hover:text-accent disabled:opacity-30"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <div className="w-12 text-center">
        <span className="text-lg font-semibold tabular-nums">{value}</span>
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={handleIncrement}
        className="h-9 w-9 rounded-full border-2 transition-all hover:scale-105 hover:border-accent hover:text-accent"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};
