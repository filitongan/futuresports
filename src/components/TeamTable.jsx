import { teamData } from "../helpers/team.js";

export default function TeamTable() {
  return (
    <div className="table-section">
      <table id="dataTable">
        <thead>
          <tr>
            <th></th>
            <th>PLAYER</th>
            <th>POSITION</th>
            <th>AGE</th>
            <th>HEIGHT</th>
            <th>WEIGHT</th>
            <th>CAPS</th>
          </tr>
        </thead>
        <tbody>
          {teamData.map((row, index) => (
            <tr key={index}>
              <td>
                <i className={row.icon}></i>
              </td>
              {Object.values(row)
                .slice(1)
                .map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
