import Slider from "react-slick";
// import '../MainSlider/slick-theme.css'
// import '../MainSlider/slick.css'

import styles from "./SmalSlider.module.css";
import ProductCard from "../../../components/ProductCard/ProductCard";

const SmalSlider = ({ products }) => {
  const settings = {
    dots: true,
    arrows: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  if (!products || products.length === 0) return null;

  return (
    <div>
      <h2>Popular</h2>

      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default SmalSlider;
