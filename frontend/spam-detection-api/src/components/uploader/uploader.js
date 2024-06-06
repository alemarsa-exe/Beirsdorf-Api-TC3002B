// src/FileUploader.js

import React, {useState} from 'react';
import axios from 'axios';

const Uploader = ({onUploadSuccess, onUploadError}) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('http://localhost:5000/predict-csv', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            onUploadSuccess(res.data);
        } catch (err) {
            const errorMsg = err.response ? err.response.data : 'Error uploading file';
            onUploadError(errorMsg);
            console.error('Error uploading file:', err);
        }
    };

    return (
        <div style={{margin: "10px 0 10px 0"}}>
            <form onSubmit={handleSubmit}>
                <input type="file" accept=".csv" onChange={handleFileChange} style={{borderRadius: "0.5rem"}}/>
                <button type="submit" style={{
                    margin: "10px 0 0 10px",
                    borderRadius: "0.5rem",
                    backgroundColor: "#1f2937",
                    color: "#ffffff",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer"
                }}>Upload CSV
                </button>
            </form>
        </div>
    );
};

export default Uploader;
