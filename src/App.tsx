import { ChangeEvent, useEffect, useState } from 'react';
import './assets/tailwind/tailwind.output.css';
import { now, getGrandPrix, getRanking } from './utils/data.utils';
import './App.styles.scss';
import { Option, GrandPrix, Ranking, RankingGrandPrix } from './@types/common';
import Header, { FILTER_SELECT_ID } from './components/header/header.component';
import RankingList from './components/racing/ranking.component';
import RankingGrandPrixList from './components/racing/ranking-grandprix.component';

function App() {
  console.log('Reder/Rerender App ===============');
  const currentYear = now.getFullYear();
  const [title, setTitle] = useState('');
  const [ranking, setRanking] = useState<Ranking[]>([]);
  const [rankingGrandPrix, setRankingGrandPrix] = useState<RankingGrandPrix[]>(
    []
  );
  const [filterYear, setFilterYear] = useState(currentYear);
  const [filterType, setFilterType] = useState('races');
  const [filterName, setFilterName] = useState('all');
  const [nameOption, setnameOption] = useState<Option[]>([]);
  const [nameDefaultValue, setNameDefaultValue] = useState('');

  useEffect(() => {
    //  get list Grand Prix
    const fetchGrandPrix = async () => {
      const data = await getGrandPrix<GrandPrix[]>(filterYear, filterType);
      const grandprix = data.map((item) => {
        return { label: item.grand_prix, value: item.grand_prix };
      });
      setnameOption(grandprix);
    };
    fetchGrandPrix();
  }, [filterYear, filterType]);

  useEffect(() => {
    //  get Race results
    console.log('render/re-render Ranking', filterYear, filterType, filterName);
    const fetchRanking = async () => {
      const title = filterYear + ' RACE RESULTS';
      setTitle(title);
      const data = await getRanking<Ranking[]>(filterYear);
      setRankingGrandPrix([]);
      setRanking(data);
    };
    const fetchRankingofGrandPrix = async () => {
      const title =
        'FORMULA 1 ' +
        filterName.toLocaleUpperCase() +
        ' GRAND PRIX ' +
        filterYear +
        ' - RACE RESULT';
      setTitle(title);
      const data = await getRanking<RankingGrandPrix[]>(filterYear, filterName);
      setRanking([]);
      setRankingGrandPrix(data);
    };
    if (filterType == 'races') {
      if (filterName && filterName != 'all') fetchRankingofGrandPrix();
      else fetchRanking();
    }
  }, [filterYear, filterType, filterName]);

  const onClickGrandPrix = (grand_prix: string) => {
    setNameDefaultValue(grand_prix);
    setFilterName(grand_prix.toLocaleLowerCase());
  };

  const onFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const searchFieldId = event.target.id;
    const searchFieldValue = event.target.value;
    if (searchFieldId == FILTER_SELECT_ID.SEL_YEAR) {
      setFilterName('all');
      setNameDefaultValue('all');
      setFilterYear(parseInt(searchFieldValue));
    } else if (searchFieldId == FILTER_SELECT_ID.SEL_TYPE)
      setFilterType(searchFieldValue.toLocaleLowerCase());
    else if (searchFieldId == FILTER_SELECT_ID.SEL_NAME)
      setFilterName(searchFieldValue.toLocaleLowerCase());
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
        {ranking.length > 0 && (
          <div>
            <RankingList onClickHandler={onClickGrandPrix} ranking={ranking} />
          </div>
        )}

        {rankingGrandPrix.length > 0 && (
          <div>
            <RankingGrandPrixList rankingGrandPrix={rankingGrandPrix} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
