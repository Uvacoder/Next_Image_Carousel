import React, { useState, useEffect } from 'react';

//import { SliderData } from '../Slider_Data';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Image from 'next/image';

const ImageSlider = ({ slides }) => {
  const [sliderData, setSliderData] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  //  UseEffect to fetch all images and run only when the component mounts
  useEffect(() => {
    //fetch data from the api on component mounting
    fetch('/api/cloudinary')
      .then((response) => response.json())
      .then((data) => {
        setSliderData(data);
        console.log(data);
      });
  }, []);

  // Function to move to the next slide/image
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Function to move to the previous slide/image
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      {/* react-icons */}
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />

      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <Image src={slide.url} alt={slide.url} width={600} height={600} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
