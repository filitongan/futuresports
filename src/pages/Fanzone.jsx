import Banner from "../components/Banner";
import Forum from "../components/Forum";

//Fanzone page
export default function Fanzone() {
  return (
    <>
      <Banner bannerText="WELCOME TO THE FAN ZONE" page="fanzone" />
      <div data-testid="forum-component">
        <Forum />
      </div>
    </>
  );
}
