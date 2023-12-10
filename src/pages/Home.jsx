import "../css/Home.css";
import game1 from "../assets/images/homepage/game_1.png";
import game2 from "../assets/images/homepage/game_2.png";
import game3 from "../assets/images/homepage/game_3.png";
import game4 from "../assets/images/homepage/game_4.png";
import news1 from "../assets/images/homepage/news_1.png";
import news2 from "../assets/images/homepage/news_2.png";
import news3 from "../assets/images/homepage/news_3.png";
import news4 from "../assets/images/homepage/news_4.png";
import video1 from "../assets/images/homepage/video_1.png";
import video2 from "../assets/images/homepage/video_2.png";
import video3 from "../assets/images/homepage/video_3.png";
import video4 from "../assets/images/homepage/video_4.png";
import rightArrow from "../assets/images/homepage/right_arrow.png";
import { Link } from "react-router-dom";
import PhotoGallery from "../components/PhotoGallery";

export default function Home() {
  return (
    <div className="main-content">
      <div className="banner">
        <PhotoGallery />
      </div>

      <div className="upcoming-matches">
        <h2 className="section-title">UPCOMING MATCHES</h2>
        <div className="image-container">
          <img src={game1} alt="Game 1" />
          <img src={game2} alt="Game 2" />
          <img src={game3} alt="Game 3" />
          <img src={game4} alt="Game 4" />
        </div>
      </div>

      <div className="latest-news-videos">
        <h2 className="section-title">LATEST NEWS</h2>
        <Link className="more-news-videos-link" to="/News">
          <div className="more-news-videos">
            <p>
              MORE NEWS <img src={rightArrow} alt="right arrow" />
            </p>
          </div>
        </Link>

        <div className="image-container">
          <Link to="/NewsArticle">
            <img src={news1} alt="News 1" />
          </Link>
          <Link to="/NewsArticle">
            <img src={news2} alt="News 2" />
          </Link>
          <Link to="/NewsArticle">
            <img src={news3} alt="News 3" />
          </Link>
          <Link to="/NewsArticle">
            <img src={news4} alt="News 4" />
          </Link>
        </div>
      </div>

      <div className="latest-news-videos">
        <h2 className="section-title">LATEST VIDEOS</h2>
        <Link className="more-news-videos-link" to="/News">
          <div className="more-news-videos">
            <p>
              MORE VIDEOS <img src={rightArrow} alt="right arrow" />
            </p>
          </div>
        </Link>
        <div className="image-container">
          <Link to="/Video">
            <img src={video1} alt="Video 1" />
          </Link>
          <Link to="/Video">
            <img src={video2} alt="Video 2" />
          </Link>
          <Link to="/Video">
            <img src={video3} alt="Video 3" />
          </Link>
          <Link to="/Video">
            <img src={video4} alt="Video 4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
