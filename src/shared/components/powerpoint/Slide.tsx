import type { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  className?: string;
  background?: string;
  padding?: string;
}

export const Slide = ({ 
  children, 
  className = "",
  background = "bg-gradient-to-br from-blue-50 to-indigo-100",
  padding = "p-12"
}: SlideProps) => {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center ${background} ${padding} ${className}`}>
      {children}
    </div>
  );
};
