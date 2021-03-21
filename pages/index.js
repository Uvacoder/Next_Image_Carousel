import ImageSlider from '../components/ImageSlider';
import Head from 'next/head';
//import { SliderData } from '../Slider_Data';
function HomePage({ sliderData }) {
  return (
    <div>
      <Head>
        <title>Next Image Carousel</title>
        <meta name='description' content='Next.js, Cloudinary Image Carousel' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ImageSlider slides={sliderData} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/cloudinary');
  const sliderData = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      sliderData,
    },
    revalidate: 1800,
  };
}
