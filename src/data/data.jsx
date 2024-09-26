// src/data/fileData.js

export const initialFiles = [
    {
        name: 'public',
        isOpen: false,
        files: [
            {
                name: 'index.html',
                isOpen: false,
                files: [],
            },
            {
                name: 'css',
                isOpen: false,
                files: [
                    { name: 'styles.css', isOpen: false, files: [] },
                    {
                        name: 'legacy',
                        isOpen: false,
                        files: [
                            { name: 'old-styles.css', isOpen: false, files: [] },
                            {
                                name: 'very-old',
                                isOpen: false,
                                files: [{ name: 'ancient-styles.css', isOpen: false, files: [] }],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'node_modules',
        isOpen: false,
        files: [
            { name: 'express', isOpen: false, files: [] },
            { name: 'react', isOpen: false, files: [] },
            { name: 'webpack', isOpen: false, files: [] },
            {
                name: 'babel',
                isOpen: false,
                files: [
                    { name: 'babel-core.js', isOpen: false, files: [] },
                    { name: 'babel-polyfill.js', isOpen: false, files: [] },
                ],
            },
        ],
    },
    {
        name: 'src',
        isOpen: false,
        files: [
            { name: 'App.js', isOpen: false, files: [] },
            { name: 'index.js', isOpen: false, files: [] },
            {
                name: 'components',
                isOpen: false,
                files: [
                    { name: 'Navbar.js', isOpen: false, files: [] },
                    { name: 'Sidebar.js', isOpen: false, files: [] },
                    {
                        name: 'features',
                        isOpen: false,
                        files: [
                            { name: 'Login.js', isOpen: false, files: [] },
                            {
                                name: 'Authentication',
                                isOpen: false,
                                files: [
                                    { name: 'authHelpers.js', isOpen: false, files: [] },
                                    { name: 'authService.js', isOpen: false, files: [] },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'utils',
                isOpen: false,
                files: [
                    { name: 'helpers.js', isOpen: false, files: [] },
                    {
                        name: 'nestedFolder',
                        isOpen: false,
                        files: [
                            { name: 'deepFile.js', isOpen: false, files: [] },
                            {
                                name: 'extraFolder',
                                isOpen: false,
                                files: [
                                    { name: 'superDeep.js', isOpen: false, files: [] },
                                    { name: 'ultraDeep.js', isOpen: false, files: [] },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Git',
        isOpen: false,
        files: [
            { name: 'config', isOpen: false, files: [] },
            { name: 'hooks', isOpen: false, files: [] },
            {
                name: 'info',
                isOpen: false,
                files: [{ name: 'exclude', isOpen: false, files: [] }],
            },
        ],
    },
    {
        name: 'config',
        isOpen: false,
        files: [
            { name: 'webpack.config.js', isOpen: false, files: [] },
            { name: 'babel.config.js', isOpen: false, files: [] },
            {
                name: 'environments',
                isOpen: false,
                files: [
                    { name: 'dev.js', isOpen: false, files: [] },
                    { name: 'prod.js', isOpen: false, files: [] },
                ],
            },
        ],
    },
    {
        name: 'tests',
        isOpen: false,
        files: [
            { name: 'App.test.js', isOpen: false, files: [] },
            { name: 'utils.test.js', isOpen: false, files: [] },
            {
                name: 'integration',
                isOpen: false,
                files: [
                    { name: 'loginIntegration.test.js', isOpen: false, files: [] },
                    { name: 'signupIntegration.test.js', isOpen: false, files: [] },
                ],
            },
        ],
    },
];
