import PropTypes from "prop-types";
import "../css/Banner.css";
import teamBanner from "../assets/images/banners/team_banner.png";
import eventBanner from "../assets/images/banners/events_banner.png";
import fanzoneBanner from "../assets/images/banners/fanzone_banner.png";
import newsBanner from "../assets/images/banners/news_banner.png";
import goalpostBanner from "../assets/images/banners/goal_post_banner.png";

export default function Banner({ bannerText, page }) {
  let image = goalpostBanner;

  // Select the correct banner image based on the page
  if (page === "team") {
    image = teamBanner;
  } else if (page === "events") {
    image = eventBanner;
  } else if (page === "news") {
    image = newsBanner;
  } else if (page === "fanzone") {
    image = fanzoneBanner;
  }

  const bannerStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    color: "#fff",
    marginTop: "80px",
    padding: "100px 0",
  };

  return (
    <div style={bannerStyle}>
      <div className="banner-text">{bannerText}</div>
    </div>
  );
}

Banner.propTypes = {
  bannerText: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
