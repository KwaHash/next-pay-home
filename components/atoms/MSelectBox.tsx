import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Control, Controller } from 'react-hook-form';

interface MSelectBoxProps {
  id: string;
  options: string[];
  value?: string;
  control: Control<any>;
}

const MSelectBox: React.FC<MSelectBoxProps> = ({ id, options, value = options[0], control }) => {
  return (
    <FormControl>
      <Controller
        name={id}
        control={control}
        defaultValue={value}
        render={({ field }) => (
          <Select
            {...field}
            id={id}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  )
}

export default MSelectBox;