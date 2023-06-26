import { useEffect, useState } from 'react';
import { getGrandPrix } from '../../utils/data.utils';
import { Option, GrandPrix } from '../../@types/common';
import FilterOption from '../filter-option/filter-option.components';

const typeOptions: Option[] = [
  { label: 'Races', value: 'races' },
  { label: 'Drivers', value: 'drivers' },
  { label: 'Teams', value: 'team' },
];

const Header = () => {
  const [nameOption, setnameOption] = useState<Option[]>([]);

  useEffect(() => {
    //  get list Grand Prix
    const fetchGrandPrix = async () => {
      const data = await getGrandPrix<GrandPrix[]>();
      const grandprix = data.map((item) => {
        return { label: item.grand_prix, value: item.grand_prix };
      });
      setnameOption(grandprix);
    };
    fetchGrandPrix();
  }, []);

  return (
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
  );
};

export default Header;
