import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../Slider_Data';
function HomePage(props) {
  return (
    <div>
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default HomePage;

// export const getStaticProps = async () => {
//   const res = await fetch('http://localhost:3000/api/cloudinary');
//   const images = await res.json();
//  console.log(images)
//   return {
//     props: {
//       images,
//     },
//   };
// };
