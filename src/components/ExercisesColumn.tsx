// components/ExercisesColumn.tsx
import React from 'react';
import Exercises from './Exercises';

interface Exercise {
  id: number;
  name: string;
  description: string;
  favorite: boolean;
}

interface ExercisesColumnProps {
  exercises: Exercise[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const ExercisesColumn: React.FC<ExercisesColumnProps> = ({ exercises, onDelete, onToggle }) => {
  return (
    <div className="w-1/2 p-4 bg-gray-300">
      <h4 className="text-lg font-semibold mb-4">List of Exercises</h4>
      {exercises.length > 0 ? (
        <Exercises exercises={exercises} onDelete={onDelete} onToggle={onToggle} />
      ) : (
        <p>No exercises to display.</p>
      )}
    </div>
  );
};

export default ExercisesColumn;
