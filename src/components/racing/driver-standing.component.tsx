import { DriverStanding } from '../../@types/common';

type DriverStandingListProps = {
  driverstanding: DriverStanding[];
  onClickHandler: (grand_prix: string) => void;
};

const DriverStandingList = ({
  driverstanding,
  onClickHandler,
}: DriverStandingListProps) => {
  return (
    <table className='results'>
      <thead>
        <tr>
          <th>
            <abbr title='Position'>Pos</abbr>
          </th>
          <th>Driver</th>
          <th>Nationality</th>
          <th>Car</th>
          <th>
            <abbr title='Points'>PTS</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        {driverstanding.map((item, key) => {
          return (
            <tr key={key}>
              <td className='dark'>{key + 1}</td>
              <td>
                <a
                  onClick={() => onClickHandler(item.driver)}
                  className='dark bold ArchiveLink'
                >
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
                </a>
              </td>
              <td className='dark semi-bold uppercase'>{item.nationality}</td>
              <td>{item.team}</td>
              <td className='dark bold'>{item.points}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DriverStandingList;
