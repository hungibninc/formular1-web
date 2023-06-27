import { ChangeEvent, useEffect, useState } from 'react';
import './assets/tailwind/tailwind.output.css';
import {
  now,
  getGrandPrix,
  getRanking,
  getDriverStanding,
  getDriver,
  getTeam,
  getTeamStanding,
} from './utils/data.utils';
import './App.styles.scss';
import {
  Option,
  GrandPrix,
  Ranking,
  RankingGrandPrix,
  DriverStanding,
  Driver,
  DriverStandingDetail,
  Team,
  TeamStanding,
} from './@types/common';
import Header, { FILTER_SELECT_ID } from './components/header/header.component';
import RankingList from './components/racing/ranking.component';
import RankingGrandPrixList from './components/racing/ranking-grandprix.component';
import DriverStandingList from './components/racing/driver-standing.component';
import DriverStandingDetailList from './components/racing/driver-standing-detail.component';
import TeamStandingList from './components/racing/team-standing.component';

function App() {
  console.log('Reder/Rerender App ===============');
  const currentYear = now.getFullYear();
  const [title, setTitle] = useState('');
  const [typeResult, setTypeResult] = useState('ranking');

  const [ranking, setRanking] = useState<Ranking[]>([]);
  const [rankingGrandPrix, setRankingGrandPrix] = useState<RankingGrandPrix[]>(
    []
  );
  const [driverStanding, setDriverStanding] = useState<DriverStanding[]>([]);
  const [driverStandingDetail, setDriverStandingDetail] = useState<
    DriverStandingDetail[]
  >([]);

  const [teamStanding, setTeamStanding] = useState<TeamStanding[]>([]);

  const [filterYear, setFilterYear] = useState(currentYear);
  const [filterType, setFilterType] = useState('races');
  const [filterName, setFilterName] = useState('all');
  const [nameOption, setnameOption] = useState<Option[]>([]);
  const [nameDefaultValue, setNameDefaultValue] = useState('');

  useEffect(() => {
    console.log('render/re-render Ranking', filterYear, filterType, filterName);

    //  get list Filter name of GrandPrix/Driver/Team
    const fetchGrandPrixName = async () => {
      const data = await getGrandPrix<GrandPrix[]>(filterYear);
      const grandprix = data.map((item) => {
        return { label: item.grand_prix, value: item.grand_prix };
      });
      setnameOption(grandprix);
    };

    //  get list Filter name of Driver
    const fetchDriverName = async () => {
      const data = await getDriver<Driver[]>(filterYear);
      const driver = data.map((item) => {
        return { label: item.driver, value: item.driver };
      });
      setnameOption(driver);
    };

    //  get list Filter name of Team
    const fetctTeamName = async () => {
      const data = await getTeam<Team[]>(filterYear);
      console.log(data);
      const team = data.map((item) => {
        return { label: item.team, value: item.team };
      });
      setnameOption(team);
    };

    if (filterType == 'races') {
      fetchGrandPrixName();
    } else if (filterType == 'drivers') {
      fetchDriverName();
    } else if (filterType == 'team') {
      fetctTeamName();
    }

    //  get Race results
    const fetchRanking = async () => {
      const title = filterYear + ' RACE RESULTS';
      setTitle(title);
      const data = await getRanking<Ranking[]>(filterYear);
      setRanking(data);
      setTypeResult('ranking');
    };

    //  get Race results of a specific Grand Prix
    const fetchRankingofGrandPrix = async () => {
      const title =
        'FORMULA 1 ' +
        filterName.toLocaleUpperCase() +
        ' GRAND PRIX ' +
        filterYear +
        ' - RACE RESULT';
      setTitle(title);
      const data = await getRanking<RankingGrandPrix[]>(filterYear, filterName);
      setRankingGrandPrix(data);
      setTypeResult('rankinggrandprix');
    };

    //  get Driver Standing
    const fetchDriverStanding = async () => {
      const title = filterYear + ' Driver Standings';
      setTitle(title);
      const data = await getDriverStanding<DriverStanding[]>(filterYear);
      setDriverStanding(data);
      setTypeResult('driverstanding');
    };

    //  get specific Driver Standing
    const fetchDriverDetail = async () => {
      const title = filterYear + ' Driver Standings: ' + filterName;
      setTitle(title);
      const data = await getDriverStanding<DriverStandingDetail[]>(
        filterYear,
        filterName
      );
      setDriverStandingDetail(data);
      setTypeResult('driverstandingdetail');
    };

    //  get specific Team Standing
    const fetchTeamStanding = async () => {
      const title = filterYear + ' Constructor Standings';
      setTitle(title);
      const data = await getTeamStanding<TeamStanding[]>(filterYear);
      console.log(data);
      setTeamStanding(data);
      setTypeResult('teamstanding');
    };

    //  get specific Team Standing Deail
    const fetchTeamStandingDetail = async () => {
      const title = filterYear + ' Constructor Standings: ' + filterName;
      setTitle(title);
      /* const data = await getTeamStanding<TeamStanding[]>(
        filterYear,
        filterName
      );
      setTeamStanding(data);
      setTypeResult('teamstanding'); */
    };

    if (filterType == 'races') {
      if (filterName && filterName != 'all') fetchRankingofGrandPrix();
      else fetchRanking();
    } else if (filterType == 'drivers') {
      if (filterName && filterName != 'all') fetchDriverDetail();
      else fetchDriverStanding();
    } else if (filterType == 'team') {
      if (filterName && filterName != 'all') fetchTeamStandingDetail();
      else fetchTeamStanding();
    }
  }, [filterYear, filterType, filterName]);

  const onFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const searchFieldId = event.target.id;
    const searchFieldValue = event.target.value;
    if (searchFieldId == FILTER_SELECT_ID.SEL_YEAR) {
      setFilterName('all');
      setNameDefaultValue('all');
      setFilterYear(parseInt(searchFieldValue));
    } else if (searchFieldId == FILTER_SELECT_ID.SEL_TYPE) {
      setFilterName('all');
      setNameDefaultValue('all');
      setFilterType(searchFieldValue.toLocaleLowerCase());
    } else if (searchFieldId == FILTER_SELECT_ID.SEL_NAME)
      setFilterName(searchFieldValue.toLocaleLowerCase());
  };

  const onClickGrandPrix = (grand_prix: string) => {
    setNameDefaultValue(grand_prix);
    setFilterName(grand_prix.toLocaleLowerCase());
  };

  const onClickDriver = (driver: string) => {
    setNameDefaultValue(driver);
    setFilterName(driver.toLocaleLowerCase());
  };

  const onClickTeam = (team: string) => {
    setNameDefaultValue(team);
    setFilterName(team.toLocaleLowerCase());
  };

  return (
    <div className='container mx-auto px-4'>
      <Header
        nameOption={nameOption}
        nameDefaultValue={nameDefaultValue}
        onChangeHandler={onFilterChange}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>

        {typeResult == 'ranking' && ranking.length > 0 && (
          <div>
            <RankingList onClickHandler={onClickGrandPrix} ranking={ranking} />
          </div>
        )}

        {typeResult == 'rankinggrandprix' && rankingGrandPrix.length > 0 && (
          <div>
            <RankingGrandPrixList rankingGrandPrix={rankingGrandPrix} />
          </div>
        )}

        {typeResult == 'driverstanding' && driverStanding.length > 0 && (
          <div>
            <DriverStandingList
              onClickHandler={onClickDriver}
              driverstanding={driverStanding}
            />
          </div>
        )}

        {typeResult == 'driverstandingdetail' &&
          driverStandingDetail.length > 0 && (
            <div>
              <DriverStandingDetailList
                driverstandingdetail={driverStandingDetail}
              />
            </div>
          )}

        {typeResult == 'teamstanding' && teamStanding.length > 0 && (
          <div>
            <TeamStandingList
              onClickHandler={onClickTeam}
              teamstanding={teamStanding}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
