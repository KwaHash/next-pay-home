import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

interface MSelectBoxProps {
  value: string;
  options: string[];
  handleChange: (value: string) => void;
}

const MSelectBox: React.FC<MSelectBoxProps> = ({ value, options, handleChange }) => {
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    handleChange(event.target.value);
  };

  return (
    <FormControl>
      <Select
        value={value}
        onChange={handleSelectChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default MSelectBox;