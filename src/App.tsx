import { useEffect, useState } from 'react';
import { Select, initTE } from 'tw-elements';
import './assets/tailwind/tailwind.output.css';
import { getGrandPrix, getRanking } from './utils/data.utils';
import './App.styles.scss';
import RacingList from './components/racing/racing.component';
import FilterOption from './components/filter-option/filter-option.components';
import { Ranking, Option, GrandPrix } from './@types/common';

const typeOptions: Option[] = [
  { label: 'Races', value: 'races' },
  { label: 'Drivers', value: 'drivers' },
  { label: 'Teams', value: 'team' },
];

function App() {
  console.log('Reder/Rerender App ===============');
  const [ranking, setRanking] = useState<Ranking[]>([]);
  const [nameOption, setnameOption] = useState<Option[]>([]);

  useEffect(() => {
    initTE({ Select });
  }, []);

  useEffect(() => {
    const fetchRanking = async () => {
      const data = await getRanking<Ranking[]>();
      setRanking(data);
      console.log('Fetched Ranking');
    };
    fetchRanking();
  }, []);

  useEffect(() => {
    if (ranking.length > 0) {
      const fetchGrandPrix = async () => {
        const data = await getGrandPrix<GrandPrix[]>();
        const data1 = data.map((item) => {
          return { label: item.grand_prix, value: item.grand_prix };
        });
        setnameOption(data1);
        console.log('Fetched GrandPrix', data1);
      };
      fetchGrandPrix();
    }
  }, [ranking]);

  return (
    <div className='container mx-auto mb-20 px-4'>
      <div className='filter'>
        <div className='mb-2'>
          <select data-te-select-init data-te-select-option-height='52'>
            <option value='1' data-te-select-secondary-text='Season 2023'>
              2023
            </option>
            <option value='2' data-te-select-secondary-text='Season 2022'>
              2022
            </option>
          </select>
        </div>
        <div className='mb-2'>
          <FilterOption allOption={false} options={typeOptions} />
        </div>
        <div className='mb-2'>
          <FilterOption allOption={true} options={nameOption} />
        </div>
      </div>

      <div className='content'>
        {ranking && <h1>2023 RACE RESULTS</h1>}
        <div>
          <RacingList ranking={ranking} />
        </div>
      </div>
    </div>
  );
}

export default App;
