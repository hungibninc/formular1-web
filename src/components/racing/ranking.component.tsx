import moment from 'moment';
import { Ranking } from '../../@types/common';

type RankingListProps = {
  ranking: Ranking[];
  onClickHandler: (grand_prix: string) => void;
};

const RankingList = ({ ranking, onClickHandler }: RankingListProps) => {
  console.log('RankingList ', ranking);
  return (
    <table className='results'>
      <thead>
        <tr>
          <th>Grand Prix</th>
          <th className='hide-for-mobile'>Date</th>
          <th>Winner</th>
          <th>Car</th>
          <th className='hide-for-mobile'>Laps</th>
          <th className='hide-for-tablet'>Time</th>
        </tr>
      </thead>
      <tbody>
        {ranking.map((item, key) => {
          return (
            <tr key={key}>
              <td className='dark bold'>
                <a
                  onClick={() => onClickHandler(item.grand_prix)}
                  className='dark bold ArchiveLink'
                >
                  {item.grand_prix}
                </a>
              </td>
              <td className='dark hide-for-mobile'>
                {moment(item.racing_date).format('DD MMM YYYY')}
              </td>
              <td className='dark bold'>
                <span className='hide-for-tablet'>
                  {item.driver.split(' ').slice(0, -1).join(' ')}
                </span>{' '}
                <span className='hide-for-mobile'>
                  {item.driver.split(' ').slice(-1).join(' ')}
                </span>
                <span className='uppercase hide-for-desktop'>
                  {item.driver
                    .split(' ')
                    .slice(0, -1)
                    .join(' ')
                    .substring(0, 3)
                    .toUpperCase()}
                </span>
              </td>
              <td className='semi-bold uppercase '>{item.team}</td>
              <td className='bold hide-for-mobile'>{item.laps}</td>
              <td className='dark bold hide-for-tablet'>{item.time_retire}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RankingList;
