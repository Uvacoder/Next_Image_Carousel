import React, { useState } from 'react';
import { SliderData } from '../Slider_Data';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Image from 'next/image';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <Image src={slide.url} alt={slide.url} width={500} height={500} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
