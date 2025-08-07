import { useState, useEffect, Children } from "react";
import type { ReactElement } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface PowerPointPresentationProps {
  children: React.ReactNode;
  className?: string;
  showNavigation?: boolean;
  showProgressBar?: boolean;
  showCounter?: boolean;
  transitionDuration?: number;
}

export const PowerPointPresentation = ({
  children,
  className = "",
  showNavigation = true,
  showProgressBar = true,
  showCounter = true,
  transitionDuration = 500
}: PowerPointPresentationProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Convert children to array and filter out invalid elements
  const slides = Children.toArray(children).filter(
    (child): child is ReactElement => 
      child !== null && child !== undefined && typeof child === 'object' && 'type' in child
  );
  
  const totalSlides = slides.length;

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(prev => prev - 1);
    }
  };


  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault();
        goToNextSlide();
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isTransitioning]);

  // Reset transition state after animation
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, transitionDuration]);

  if (totalSlides === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        <p>No slides provided</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full min-h-screen bg-white overflow-hidden ${className}`}>
      {/* Slide Container */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all ease-in-out ${
              index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
            }`}
            style={{ 
              display: index === currentSlide ? 'block' : 'none',
              transitionDuration: `${transitionDuration}ms`
            }}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {showNavigation && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 flex flex-col space-y-2 z-10">
          <button
            onClick={goToPrevSlide}
            disabled={currentSlide === 0 || isTransitioning}
            className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
              currentSlide === 0 || isTransitioning
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-110'
            }`}
            title="Previous slide (↑)"
          >
            <ChevronUp size={24} />
          </button>
          
          <button
            onClick={goToNextSlide}
            disabled={currentSlide === totalSlides - 1 || isTransitioning}
            className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
              currentSlide === totalSlides - 1 || isTransitioning
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-110'
            }`}
            title="Next slide (↓)"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      )}


      {/* Slide Counter */}
      {showCounter && totalSlides > 1 && (
        <div className="fixed top-8 right-8 bg-black bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
          {currentSlide + 1} / {totalSlides}
        </div>
      )}

      {/* Progress Bar */}
      {showProgressBar && totalSlides > 1 && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-10">
          <div 
            className="h-full bg-blue-600 transition-all ease-out"
            style={{ 
              width: `${((currentSlide + 1) / totalSlides) * 100}%`,
              transitionDuration: `${transitionDuration}ms`
            }}
          />
        </div>
      )}
    </div>
  );
};
