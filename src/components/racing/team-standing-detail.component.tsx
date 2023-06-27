import moment from 'moment';
import { TeamStandingDetail } from '../../@types/common';

type TeamDetailStandingListProps = {
  teamstandingdetail: TeamStandingDetail[];
};

const TeamDetailStandingList = ({
  teamstandingdetail,
}: TeamDetailStandingListProps) => {
  return (
    <table className='results'>
      <thead>
        <tr>
          <th>Grand Prix</th>
          <th>Date</th>
          <th>
            <abbr title='Points'>PTS</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        {teamstandingdetail.map((item, key) => {
          return (
            <tr key={key}>
              <td className='dark'>{item.grand_prix}</td>
              <td>{moment(item.racing_date).format('DD MMM YYYY')}</td>
              <td className='dark bold'>{item.points}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TeamDetailStandingList;
