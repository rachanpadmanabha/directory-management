// src/components/FileDirectory.js
import React, { useState } from 'react';
import { initialFiles } from '../data/data';
import FileList from './FileList';

const FileDirectory = () => {
    const [files, setFiles] = useState(initialFiles);
    const [newFile, setNewFile] = useState('');

    const toggleDirectory = (dirPath) => {
        const updatedFiles = updateFilesAtPath(files, dirPath, (file) => ({
            ...file,
            isOpen: !file.isOpen,
        }));
        setFiles(updatedFiles);
    };

    const updateFilesAtPath = (fileList, path, updateFn) => {
        if (path.length === 0) return fileList;

        return fileList.map((file, index) => {
            if (index === path[0]) {
                if (path.length === 1) {
                    return updateFn(file);
                } else {
                    return {
                        ...file,
                        files: updateFilesAtPath(file.files, path.slice(1), updateFn),
                    };
                }
            }
            return file;
        });
    };

    const addDirectory = (path) => {
        if (newFile.trim() === '') {
            alert('No name entered');
            return;
        }

        const updatedFiles = updateFilesAtPath(files, path, (dir) => ({
            ...dir,
            files: [...dir.files, { name: newFile, isOpen: false, files: [] }],
        }));

        setFiles(updatedFiles);
        setNewFile('');
    };

    return (
        <div className="p-4 max-w-lg mx-auto bg-gray-100 rounded-md shadow-md">
            {/* Input field for adding a new directory */}
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    value={newFile}
                    onChange={(e) => setNewFile(e.target.value)}
                    placeholder="Enter directory name"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded mr-2"
                />
            </div>

            {/* Render the file directory structure */}
            <div className="bg-white p-4 rounded-md shadow">
                <FileList files={files} toggleDirectory={toggleDirectory} addDirectory={addDirectory} />
            </div>
        </div>
    );
};

export default FileDirectory;
