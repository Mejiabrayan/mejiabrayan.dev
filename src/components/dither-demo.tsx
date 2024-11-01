import { useState } from 'react';

const DitherDemo = () => {
  const [size, setSize] = useState(3);
  const [opacity, setOpacity] = useState(50);
  const [color, setColor] = useState('#000000');

  return (
    <div className="space-y-6 bg-[#0A0A0A] p-4 sm:p-6 rounded-2xl shadow-md border border-white/10">
      <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-lg">
        <img
          src="/dither-effect.png"
          alt="Demo Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(${color} 0.5px, transparent 0.5px)`,
            backgroundSize: `${size}px ${size}px`,
            opacity: opacity / 100,
          }}
        ></div>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-accents-6 mb-1">Size:</label>
          <input
            type="range"
            min="1"
            max="10"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full h-2 bg-accents-2 rounded-full appearance-none cursor-pointer"
          />
          <span className="text-xs text-accents-5 mt-1">{size}px</span>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-accents-6 mb-1">Opacity:</label>
          <input
            type="range"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
            className="w-full h-2 bg-accents-2 rounded-full appearance-none cursor-pointer"
          />
          <span className="text-xs text-accents-5 mt-1">{opacity}%</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label className="text-sm font-medium text-accents-6 mb-1 sm:mb-0 sm:mr-2">Color:</label>
          <div className="flex items-center">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-8 h-8 rounded-full overflow-hidden border-2 border-accents-3 bg-transparent"
            />
            <span className="ml-2 text-sm text-accents-5">{color}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DitherDemo;