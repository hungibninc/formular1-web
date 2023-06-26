import { Option } from '../../App';

type SelectProps = {
  allOption: boolean;
  options: Option[];
};

const FilterOption = ({ allOption, options }: SelectProps) => {
  return (
    <select data-te-select-init>
      {allOption && <option>All</option>}
      {options.map((option, key) => (
        <option key={key} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FilterOption;
