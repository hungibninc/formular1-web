import { ChangeEvent, useEffect } from 'react';
import { Option } from '../../@types/common';
import { Select, initTE } from 'tw-elements';

type SelectProps = {
  id: string;
  allOption: boolean;
  options: Option[];
  defaultValue?: string;
  onChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const FilterOption = ({
  id,
  allOption,
  options,
  defaultValue,
  onChangeHandler,
}: SelectProps) => {
  useEffect(() => {
    initTE({ Select });
  }, []);

  useEffect(() => {
    if (defaultValue != '') {
      const singleSelect = document.querySelector('#' + id);
      const singleSelectInstance = Select.getInstance(singleSelect);
      singleSelectInstance.setValue(defaultValue);
    }
  }, [id, defaultValue]);

  return (
    <select
      data-te-select-init
      onChange={onChangeHandler}
      id={id}
      className='capitalize'
    >
      {allOption && <option value='all'>All</option>}
      {options.map((option, key) => (
        <option key={key} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FilterOption;
