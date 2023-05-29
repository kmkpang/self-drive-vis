import { Grid, Stack, Typography } from '@mui/material';
import { FileIcon, defaultStyles } from 'react-file-icon';
import * as mime from 'mime-types';
import Link from 'next/link';

export default function FileList({ files }) {
  return (
    <Grid container spacing={2} p={3}>
      {files.map((file) => (
        <Grid key={file.fileUrl} item xs={1}>
          <Link href={file.fileUrl} target="_blank">
            <Stack container justifyContent="center" alignItems="center">
              <File file={file} />
              <Typography>{file.originalFileName}</Typography>
            </Stack>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

function File({ file }) {
  const fileExtension = mime.extension(file.mime);

  return <FileIcon extension={fileExtension} {...defaultStyles[fileExtension]} />;
}
