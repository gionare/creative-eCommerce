import React from "react";
import {
  Carousel,
  CarouselProvider,
  DotsGroup,
  NextButton,
  PrevButton,
  Slide,
  Counter,
} from "react-simple-headless-carousel";

interface CarouselImage {
  src: string;
  alt: string;
}

interface SliderProps {
  images: CarouselImage[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
    <div className="w-full max-w-4xl mx-auto ">
      <CarouselProvider total={images.length}>
        <Carousel>
          {images.map((image, index) => (
            <Slide key={index} index={index}>
              <img src={image.src} alt={image.alt} className="h-90 w-full object-cover object-center " />
            </Slide>
          ))}
        </Carousel>

        <div className="flex justify-center mt-4">
          <PrevButton className="mx-2 px-4 py-1 bg-gray-300 text-gray-700 rounded-lg">Prev</PrevButton>
          <NextButton className="mx-2 px-4 py-1 bg-gray-300 text-gray-700 rounded-lg">Next</NextButton>
        </div>

        <DotsGroup className="flex justify-center mt-4" />
        <Counter className="text-center mt-4" />
      </CarouselProvider>
    </div>
  );
};

export default Slider;
