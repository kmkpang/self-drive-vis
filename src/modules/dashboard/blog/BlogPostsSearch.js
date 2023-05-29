import PropTypes from 'prop-types';

// @mui
import { styled } from '@mui/material/styles';
import { Autocomplete, Button, ButtonBase, InputAdornment, Popper, Stack, TextField } from '@mui/material';
// components
import Iconify from '../../../common/iconify';
import postStore from 'stores/post.store';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

const StyledPopper = styled((props) => <Popper placement="bottom-start" {...props} />)({
  width: '280px !important',
});

// ----------------------------------------------------------------------

BlogPostsSearch.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function BlogPostsSearch({ posts = [] }) {
  const setFilters = postStore((e) => e.setFilters);
  const [value, setValue] = useState(null);

  return (
    <Stack direction="row" spacing={2}>
      <Autocomplete
        sx={{ width: 280 }}
        autoHighlight
        PopperComponent={StyledPopper}
        options={posts}
        getOptionLabel={(post) => post && post?.attributes?.title}
        isOptionEqualToValue={(option, value) => option?.id === value?.id}
        value={value}
        onChange={(event, newValue) => {
          setFilters({ title: { $contains: newValue?.attributes?.title } });
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="ค้นหานวัตกรรม"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon={'eva:search-fill'} sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      {/* <Button variant="outlined" onClick={() => {
        
        setFilters(null)}}>
        Clear
      </Button> */}
    </Stack>
  );
}
