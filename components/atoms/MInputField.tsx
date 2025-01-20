import TextField from '@mui/material/TextField';

interface MInputFieldProps {
  value: string;
  placeholder?: string;
  handleChange: (value: string) => void;
}

const MInputField: React.FC<MInputFieldProps> = ({ value, placeholder = "", handleChange }) => {
  return (
    <TextField
      value={value}
      placeholder={placeholder}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(event.target.value);
      }}
    />
  )
}

export default MInputField;