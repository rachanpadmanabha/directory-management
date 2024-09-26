// src/components/FileItem.js
import React from 'react';

const FileItem = ({ file, currentPath, toggleDirectory, addDirectory }) => {
    const isFolder = file.files.length > 0;

    return (
        <div className="flex items-center">
            <button
                onClick={() => toggleDirectory(currentPath)}
                className="mr-2 p-1 rounded text-white bg-blue-500 hover:bg-blue-700"
            >
                {isFolder ? (file.isOpen ? '-' : '+') : '•'}
            </button>
            <span className="text-gray-700">{file.name}</span>
        </div>
    );
};

export default FileItem;
