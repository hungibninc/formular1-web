import { useEffect, useState } from 'react';
import { Select, initTE } from 'tw-elements';
import './assets/tailwind/tailwind.output.css';
import { getRanking } from './utils/data.utils';
import './App.styles.scss';
import RacingList from './components/racing/racing.component';
import { Ranking } from './@types/common';
import Header from './components/header/header.component';

function App() {
  console.log('Reder/Rerender App ===============');
  const [ranking, setRanking] = useState<Ranking[]>([]);

  useEffect(() => {
    initTE({ Select });
  }, []);

  useEffect(() => {
    //  get Race results
    const fetchRanking = async () => {
      const data = await getRanking<Ranking[]>();
      setRanking(data);
    };
    fetchRanking();
  }, []);

  return (
    <div className='container mx-auto mb-20 px-4'>
      <Header />
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
