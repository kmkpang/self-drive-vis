import { Uploader } from 'uploader';
import { UploadDropzone } from 'react-uploader';
import { TextFieldElement, useForm } from 'react-hook-form-mui';

// Get production API keys from Upload.io
const uploader = Uploader({
  apiKey: process.env.NEXT_PUBLIC_UPLOADER,
});

// Customize the dropzone UI (see "customization"):

// Render the file upload dropzone:
export default function MyDropzoneComponent(props) {
  const { register } = useForm();

  return (
    <UploadDropzone
      {...register(props.name)}
      uploader={uploader}
      options={{
        multi: props.multi ?? false,
      }}
      width="100%"
      height="235px"
      onUpdate={(files) => {
        if (files.length === 0) {
          console.log('No files selected.');
          props.onChange(props.multi ? [] : '');
        } else {
          const newFiles = files.map((f) => f.originalFile);
          props.onChange(props.multi ? newFiles : newFiles[0]);
        }
      }}
    />
  );
}
