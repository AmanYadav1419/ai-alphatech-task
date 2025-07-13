import { TextField } from '@mui/material';

export default function SearchBox({ value, onChange }: { value: string, onChange: (v: string) => void }) {
  return (
    <TextField
      label="Search Tasks"
      variant="outlined"
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{ mb: 2 }}
    />
  );
}
