import Banner from "../components/Banner";
import "../css/News.css";
import {
  video1,
  video2,
  video3,
  video4,
  news1,
  news2,
  news3,
  news4,
  news5,
  news6,
  news7,
  news8,
  news9,
  news10,
  news11,
  news12,
} from "../assets/images";
import { Link } from "react-router-dom";

//News page
export default function News() {
  return (
    <>
      <Banner bannerText="NEWS" page="news" />
      <div className="main-content">
        <div className="latest-news-videos">
          <h2 className="section-title">ALL NEWS</h2>

          <div className="image-container">
            <Link to="/NewsArticle">
              <img src={news1} alt="News 1" />
            </Link>

            <Link to="/Video">
              <img src={video1} alt="Video 1" />
            </Link>
            <Link to="/NewsArticle">
              <img src={news3} alt="News 3" />
            </Link>
            <Link to="/NewsArticle">
              <img src={news4} alt="News 4" />
            </Link>
          </div>
          <div className="image-container">
            <Link to="/NewsArticle">
              <img src={news5} alt="News 5" />
            </Link>
            <Link to="/NewsArticle">
              <img src={news6} alt="News 6" />
            </Link>
            <Link to="/Video">
              <img src={video3} alt="Video 3" />
            </Link>

            <Link to="/NewsArticle">
              <img src={news8} alt="News 8" />
            </Link>
          </div>
          <div className="image-container">
            <Link to="/Video">
              <img src={video4} alt="Video 4" />
            </Link>

            <Link to="/NewsArticle">
              <img src={news10} alt="News 10" />
            </Link>
            <Link to="/NewsArticle">
              <img src={news11} alt="News 11" />
            </Link>
            <Link to="/NewsArticle">
              <img src={news12} alt="News 12" />
            </Link>
          </div>
          <div className="image-container">
            <Link to="/NewsArticle">
              <img src={news2} alt="News 2" />
            </Link>

            <Link to="/Video">
              <img src={video2} alt="Video 2" />
            </Link>
            <Link to="/NewsArticle">
              <img src={news7} alt="News 7" />
            </Link>
            <Link to="/NewsArticle">
              <img src={news9} alt="News 9" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
