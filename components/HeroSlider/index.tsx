"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const HeroSlider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnMouseEnter: true }), Fade()
  ]);
  return (
    <>
      <div className="embla  h-[78.5vh]" ref={emblaRef}>
        <div className="embla__container h-full">
          <div className="embla__slide  bg-no-repeat bg-cover bg-top h-full" style={{ backgroundImage: `url(/Header.png)` }}>Slide 1</div>
          <div className="embla__slide  bg-no-repeat bg-cover bg-top h-full" style={{ backgroundImage: `url(/Header.png)` }}>Slide 2</div>
          <div className="embla__slide  bg-no-repeat bg-cover bg-top h-full" style={{ backgroundImage: `url(/Header.png)` }}>Slide 3</div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
