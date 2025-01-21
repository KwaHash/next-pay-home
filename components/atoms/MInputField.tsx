import TextField from '@mui/material/TextField';
import { Control, Controller } from "react-hook-form";

interface MInputFieldProps {
  id: string;
  value?: string;
  placeholder?: string;
  control?: Control<any>;
}

const MInputField: React.FC<MInputFieldProps> = ({ id, value = "", placeholder, control }) => {
  return (
    <Controller
      name={id}
      control={control}
      defaultValue={value}
      render={({ field }) => (
        <TextField
          {...field}
          id={id}
          placeholder={placeholder}
        />
      )}
    />
  )
}

export default MInputField;