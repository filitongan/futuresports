import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import homepageBanner from "../assets/images/homepage/homepage_banner_img_1.png";
import goalPostBanner from "../assets/images/banners/goal_post_banner.png";
import newsBanner from "../assets/images/banners/news_banner.png";

export default function PhotoGallery() {
  const images = [homepageBanner, goalPostBanner, newsBanner];
  return (
    <div className="photoGallery" id="PhotoGallery">
      <h3 className="section-title">Photo Gallery</h3>
      <Carousel>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
