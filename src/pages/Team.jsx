import "../css/Team.css";
import Banner from "../components/Banner";
import TeamTable from "../components/TeamTable";

export default function Team() {
  return (
    <>
      <Banner bannerText="FUTURE SPORTS SQUAD" page="team" />
      <div className="main-content">
        <h2 className="section-title">MEN'S SQUAD</h2>

        <div data-testid="team-table">
          <TeamTable />
        </div>
      </div>
    </>
  );
}
