import Banner from "../components/Banner";
import video from "../assets/videos/video_1.mov";

export default function Video() {
  return (
    <>
      <Banner bannerText="VIDEO" page="video" />
      <div className="main-content">
        <h2 className="section-title">LOREM IPSUM</h2>
        <div className="video-section">
          <video width="80%" height="500" controls>
            <source src={video} />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            elementum tempus egestas sed sed. Volutpat consequat mauris nunc
            congue nisi vitae suscipit tellus. Vestibulum lectus mauris ultrices
            eros in cursus turpis massa tincidunt. Imperdiet nulla malesuada
            pellentesque elit eget. Lacus vestibulum sed arcu non odio. Dictum
            non consectetur a erat. Hendrerit dolor magna eget est lorem ipsum
            dolor. Pulvinar sapien et ligula ullamcorper. Sed lectus vestibulum
            mattis ullamcorper. Hac habitasse platea dictumst vestibulum rhoncus
            est pellentesque.
          </p>
        </div>
      </div>
    </>
  );
}
