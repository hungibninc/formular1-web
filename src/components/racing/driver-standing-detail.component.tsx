import moment from 'moment';
import { DriverStandingDetail } from '../../@types/common';

type DriverStandingDetailListProps = {
  driverstandingdetail: DriverStandingDetail[];
};

const DriverStandingDetailList = ({
  driverstandingdetail,
}: DriverStandingDetailListProps) => {
  console.log('DriverStandingDetailList ', driverstandingdetail);
  return (
    <table className='results'>
      <thead>
        <tr>
          <th>Grand Prix</th>
          <th>Date</th>
          <th className='hide-for-mobile'>Car</th>
          <th>Race Position</th>
          <th>
            <abbr title='Points'>PTS</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        {driverstandingdetail.map((item, key) => {
          return (
            <tr key={key}>
              <td>{item.grand_prix}</td>
              <td className='dark bold'>
                {moment(item.racing_date).format('DD MMM YYYY')}
              </td>
              <td className='hide-for-mobile'>
                <a href='#' className='grey semi-bold uppercase ArchiveLink'>
                  {item.team}
                </a>
              </td>
              <td className='dark'>{item.position}</td>

              <td className='dark bold'>{item.points}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DriverStandingDetailList;
