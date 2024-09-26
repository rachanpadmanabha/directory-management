// src/components/FileList.js
import React from 'react';
import FileItem from './FileItem';

const FileList = ({ files, toggleDirectory, addDirectory, path = [] }) => {
    return (
        <ul className="pl-4">
            {files.map((file, index) => {
                const currentPath = [...path, index];
                return (
                    <li key={file.name} className="mb-2">
                        <FileItem
                            file={file}
                            currentPath={currentPath}
                            toggleDirectory={toggleDirectory}
                            addDirectory={addDirectory}
                        />
                        {file.isOpen && (
                            <ul className="pl-6">
                                {file.files.length === 0 ? (
                                    <li>
                                        <button
                                            onClick={() => addDirectory(currentPath)}
                                            className="ml-4 text-sm text-white bg-green-500 hover:bg-green-600 py-1 px-2 rounded"
                                        >
                                            + Add Directory
                                        </button>
                                    </li>
                                ) : (
                                    <FileList
                                        files={file.files}
                                        toggleDirectory={toggleDirectory}
                                        addDirectory={addDirectory}
                                        path={currentPath}
                                    />
                                )}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default FileList;
