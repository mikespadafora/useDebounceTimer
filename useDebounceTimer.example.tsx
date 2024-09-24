
import { useDebounceTimer } from "./useDebouceTimer";

interface DebounceTimerExampleProps {
  value: any;
  delay: number;
}

export const DebounceTimerExample = ({ value, delay }: DebounceTimerExampleProps) => {
  const debouncedValue = useDebounceTimer<any>(value, delay);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-[30vw]">
      <h3 className="text-xl font-bold mb-4">Debounced Input Example</h3>
      <div className="mt-6">
        <p className="mb-2">
          <strong>Current Value:</strong> <span className="text-blue-600">{value}</span>
        </p>
        <p className="mb-2">
          <strong>Debounced Value:</strong> <span className="text-green-600">{debouncedValue}</span>
        </p>
        <p>
          <strong>Debounce Delay:</strong> <span className="text-zinc-600">{delay}</span>
        </p>
      </div>
    </div>
  );
};
