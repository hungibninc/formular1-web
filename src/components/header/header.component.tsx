import { ChangeEvent } from 'react';
import { Option } from '../../@types/common';
import FilterOption from '../filter-option/filter-option.components';
import './header.styles.scss';

export enum FILTER_SELECT_ID {
  SEL_YEAR = 'selYear',
  SEL_TYPE = 'selType',
  SEL_NAME = 'selName',
}

const yearOptions: Option[] = [
  { label: '2023', value: '2023' },
  { label: '2022', value: '2022' },
];

const typeOptions: Option[] = [
  { label: 'Races', value: 'races' },
  { label: 'Drivers', value: 'drivers' },
  { label: 'Teams', value: 'team' },
];

type HeaderProps = {
  nameOption: Option[];
  nameDefaultValue: string;
  onChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Header = ({
  nameOption,
  nameDefaultValue,
  onChangeHandler,
}: HeaderProps) => {
  return (
    <div className='filter'>
      <div className='mb-2 filteryear'>
        <FilterOption
          id={FILTER_SELECT_ID.SEL_YEAR}
          allOption={false}
          options={yearOptions}
          onChangeHandler={onChangeHandler}
        />
      </div>
      <div className='mb-2 filtertype'>
        <FilterOption
          id={FILTER_SELECT_ID.SEL_TYPE}
          allOption={false}
          options={typeOptions}
          onChangeHandler={onChangeHandler}
        />
      </div>
      <div className='mb-2 filtername'>
        <FilterOption
          id={FILTER_SELECT_ID.SEL_NAME}
          allOption={true}
          options={nameOption}
          defaultValue={nameDefaultValue}
          onChangeHandler={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default Header;
