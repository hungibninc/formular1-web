import { TeamStanding } from '../../@types/common';

type TeamStandingListProps = {
  teamstanding: TeamStanding[];
  onClickHandler: (team: string) => void;
};

const TeamStandingList = ({
  teamstanding,
  onClickHandler,
}: TeamStandingListProps) => {
  console.log('TeamStandingList ', teamstanding);
  return (
    <table className='results'>
      <thead>
        <tr>
          <th>
            <abbr title='Position'>Pos</abbr>
          </th>
          <th>Taem</th>
          <th>
            <abbr title='Points'>PTS</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        {teamstanding.map((item, key) => {
          return (
            <tr key={key}>
              <td className='dark'>{key + 1}</td>
              <td>
                <a
                  onClick={() => onClickHandler(item.team)}
                  className='dark bold ArchiveLink'
                >
                  {item.team}
                </a>
              </td>
              <td className='dark bold'>{item.points}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TeamStandingList;
