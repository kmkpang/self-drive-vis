import { Grid, TextField } from '@mui/material';
import formStore from 'stores/post.store';

export function FormTextField(props) {
  const [form, updateForm] = formStore((e) => [e.form, e.updateForm]);

  return (
    <Grid item xs={12}>
      <TextField
        variant="outlined"
        label={props.label}
        fullWidth
        defaultValue={form?.[props.label] ?? props.defaultValue}
        onChange={(e) => updateForm({ [props.fieldName]: e.target.value })}
      />
    </Grid>
  );
}
