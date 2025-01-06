'use client';

import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RoverName, CameraType } from '@/lib/types';

interface FiltersProps {
  onFilterChange: (filters: {
    rover: RoverName;
    sol: number;
    camera?: CameraType;
  }) => void;
}

export default function Filters({ onFilterChange }: FiltersProps) {
  const [rover, setRover] = useState<RoverName>('Curiosity');
  const [sol, setSol] = useState<string>('1000'); // Set default value
  const [camera, setCamera] = useState<CameraType | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({
      rover,
      sol: parseInt(sol) || 1000, // Ensure we always have a valid number
      ...(camera && { camera }),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-card rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Rover</label>
          <Select
            value={rover}
            onValueChange={(value) => setRover(value as RoverName)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Rover" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Curiosity">Curiosity</SelectItem>
              <SelectItem value="Opportunity">Opportunity</SelectItem>
              <SelectItem value="Spirit">Spirit</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Sol</label>
          <Input
            type="number"
            placeholder="Enter Sol"
            value={sol}
            onChange={(e) => setSol(e.target.value)}
            min="0"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Camera</label>
          <Select
            value={camera}
            onValueChange={(value) => setCamera(value as CameraType)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Camera" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="FHAZ">Front Hazard Camera</SelectItem>
              <SelectItem value="RHAZ">Rear Hazard Camera</SelectItem>
              <SelectItem value="MAST">Mast Camera</SelectItem>
              <SelectItem value="CHEMCAM">Chemistry Camera</SelectItem>
              <SelectItem value="MAHLI">Mars Hand Lens Imager</SelectItem>
              <SelectItem value="MARDI">Mars Descent Imager</SelectItem>
              <SelectItem value="NAVCAM">Navigation Camera</SelectItem>
              <SelectItem value="PANCAM">Panoramic Camera</SelectItem>
              <SelectItem value="MINITES">Mini-TES</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button type="submit" className="w-full md:w-auto">
        Apply Filters
      </Button>
    </form>
  );
}