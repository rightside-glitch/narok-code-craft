import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide {
  id: string;
  title: string;
  component: React.ReactNode;
}

interface SlideContainerProps {
  slides: Slide[];
}

const SlideContainer: React.FC<SlideContainerProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 50);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length), 50);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => setCurrentSlide(index), 50);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 600);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevSlide();
      } else if (event.key >= "1" && event.key <= "9") {
        const slideIndex = parseInt(event.key) - 1;
        if (slideIndex < slides.length) {
          goToSlide(slideIndex);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Slide Content */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-[600ms] ease-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0 scale-100 z-10"
                : index < currentSlide
                ? "opacity-0 -translate-x-full scale-95 z-0"
                : "opacity-0 translate-x-full scale-95 z-0"
            }`}
          >
            <div className="w-full h-full overflow-y-auto">
              <div className="animate-fade-in">
                {slide.component}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={isTransitioning}
          className="bg-card/90 backdrop-blur-md border-primary/30 hover:bg-primary hover:text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-110 animate-glow-pulse"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={isTransitioning}
          className="bg-card/90 backdrop-blur-md border-primary/30 hover:bg-primary hover:text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-110 animate-glow-pulse"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3 bg-card/90 backdrop-blur-md rounded-full px-6 py-3 border border-border/50 shadow-floating">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gradient-primary shadow-glow scale-125 animate-glow-pulse"
                  : "bg-muted-foreground/50 hover:bg-primary hover:scale-110"
              }`}
              title={slide.title}
            />
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-card/80 backdrop-blur-sm rounded-lg px-3 py-1 border border-border/50">
          <span className="text-sm font-medium text-foreground">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Slide Title */}
      <div className="absolute top-6 left-6 z-20">
        <div className="bg-card/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/50">
          <h2 className="text-sm font-medium text-foreground">
            {slides[currentSlide]?.title}
          </h2>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-6 right-6 z-20">
        <div className="bg-card/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50">
          <p className="text-xs text-muted-foreground">
            Use ← → keys or click to navigate
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideContainer;