import PropTypes from 'prop-types';
// @mui
import { MenuItem, TextField } from '@mui/material';
import postStore from 'stores/post.store';

// ----------------------------------------------------------------------

BlogPostsSort.propTypes = {
  options: PropTypes.array,
  onSort: PropTypes.func,
};

export default function BlogPostsSort({ options, onSort }) {
  const [sort, setSort] = postStore((e) => [e.sort, e.setSort]);

  return (
    <TextField select size="small" value={sort} onChange={(e) => setSort(e.target.value)}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
