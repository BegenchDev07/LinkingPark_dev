import { useNavigate } from "react-router";

interface ActionButtonProps {
    label: string; // Label that shows inside the button
    onClick?: () => void; // Optional click handler
  }
  
  

export const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick }) => {

  return (
    // <button
    //   onClick={onClick}
    //   className="mt-4 px-4 py-2 bg-black text-white rounded-full w-full transition-transform transform active:scale-90 shadow-lg"
    // >
    //   <span className="text-lg">{label}</span>
    // </button>
    <button className="btn mt-4 px-4 py-2 w-full" onClick={onClick}>
    
    <span className="text-lg">{label}</span>
  </button>
  );
};
