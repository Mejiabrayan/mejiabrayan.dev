
import React from 'react';

interface ColorPickerProps {
  defaultColor: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ defaultColor, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="color"
        defaultValue={defaultColor}
        onChange={(e) => onChange(e.target.value)}
        className="w-8 h-8 rounded-full overflow-hidden"
      />
      <span>Choose a color for your dither effect</span>
    </div>
  );
};


export default ColorPicker;