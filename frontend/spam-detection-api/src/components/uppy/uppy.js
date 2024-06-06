import React, { useEffect, useState } from 'react';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

const FileUploader = () => {
  const [uploadResponse, setUploadResponse] = useState(null);

  const uppy = new Uppy({
    restrictions: {
      maxNumberOfFiles: 1,
    },
    autoProceed: false,
  });

  uppy.use(XHRUpload, {
    endpoint: 'http://localhost:5000/predict-csv',
    fieldName: 'file',
  });

  useEffect(() => {
    uppy.on('complete', (result) => {
      console.log('Upload complete! We’ve uploaded these files:', result.successful);
      if (result.successful.length > 0) {
        const response = result.successful[0].response.body;
        setUploadResponse(response);
      }
    });

    return () => uppy.close();
  }, [uppy]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Dashboard
        uppy={uppy}
        proudlyDisplayPoweredByUppy={false}
        height={300}
        width={400}
      />
      {uploadResponse && (
        <div>
          <h3>Response from server:</h3>
          <pre>{JSON.stringify(uploadResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
