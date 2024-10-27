import React from "react";

interface FloatingButtonProps {
  label: string; // Label that shows inside the button
  onClick?: () => void; // Optional click handler
}



export const FloatingButton: React.FC<FloatingButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 w-16 h-16 rounded-full bg-black text-white flex items-center justify-center transition-transform transform active:scale-90 shadow-lg"
    >
      {/* Display the label inside the button */}
      <span className="text-lg">{label}</span>
    </button>
  );
};
