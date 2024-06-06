import React, { useEffect } from 'react';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
import RemoteSources from "@uppy/remote-sources";
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

const FileUploader = () => {
  const uppy = new Uppy({
    restrictions: {
      maxNumberOfFiles: 1,
    },
    autoProceed: false,
  });

  uppy.use(XHRUpload, {
    endpoint: 'http://localhost:5000/predict', 
    fieldName: 'file',
  });

  uppy.on('complete', (result) => {
    console.log('Upload complete! We’ve uploaded these files:', result.successful);
  });

  return (
    <div>
      <Dashboard
        uppy={uppy}
        proudlyDisplayPoweredByUppy={false}
        height={300}
        width={400}
      />
    </div>
  );
};

export default FileUploader;
