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
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 500);
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
            className={`absolute inset-0 w-full h-full transition-all duration-500 ease-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0 z-10"
                : index < currentSlide
                ? "opacity-0 -translate-x-full z-0"
                : "opacity-0 translate-x-full z-0"
            }`}
          >
            <div className="w-full h-full overflow-y-auto animate-fade-in">
              {slide.component}
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
          className="bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground shadow-glow"
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
          className="bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground shadow-glow"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary shadow-glow scale-125"
                  : "bg-muted-foreground/50 hover:bg-muted-foreground"
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