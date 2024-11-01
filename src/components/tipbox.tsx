import React from 'react';

interface TipBoxProps {
  children: React.ReactNode;
}

const TipBox: React.FC<TipBoxProps> = ({ children }) => (
  <div className="bg-blue-900/40 text-blue-100 border border-blue-500 rounded-md p-4 mb-4">
    <strong className="font-semibold">Tip:</strong> {children}
  </div>
);

export default TipBox;