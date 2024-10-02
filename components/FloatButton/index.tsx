import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

interface FloatingButtonProps {
  onClick?: () => void;
}

export function FloatingButton({ onClick }: FloatingButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="fixed left-5 
    bottom-5 w-12 h-12   
    px-3 py-2 rounded-md tracking-wider shadow-xl cursor-pointer z-10 bg-stone-400"
      variant="default"
    >
      <ChevronUp height={36} width={36} />
    </Button>
  );
}

export default FloatingButton;
