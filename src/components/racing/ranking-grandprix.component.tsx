import { RankingGrandPrix } from '../../@types/common';

type RankingGrandPrixListProps = {
  rankingGrandPrix: RankingGrandPrix[];
};

const RankingGrandPrixList = ({
  rankingGrandPrix,
}: RankingGrandPrixListProps) => {
  console.log('RankingGrandPrixList ', rankingGrandPrix);
  return (
    rankingGrandPrix.length && (
      <table className='results'>
        <thead>
          <tr>
            <th>
              <abbr title='Position'>Pos</abbr>
            </th>
            <th className='hide-for-mobile'>
              <abbr title='Number'>No</abbr>
            </th>
            <th>Driver</th>
            <th className=' hide-for-tablet'>Car</th>
            <th className=' hide-for-mobile'>Laps</th>
            <th>Time/Retired</th>
            <th>
              <abbr title='Points'>PTS</abbr>
            </th>
          </tr>
        </thead>
        <tbody>
          {rankingGrandPrix.map((item, key) => {
            return (
              <tr key={key}>
                <td className='dark'>{item.position}</td>
                <td className='dark hide-for-mobile'>{item.license_plate}</td>
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
                <td className='semi-bold uppercase hide-for-tablet'>
                  {item.team}
                </td>
                <td className='bold hide-for-mobile'>{item.laps}</td>
                <td className='dark bold'>{item.time_retire}</td>
                <td className='bold'>{item.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  );
};

export default RankingGrandPrixList;
