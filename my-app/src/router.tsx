import React from 'react';

import Header from './components/header';

import {createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
        children: [
            {

            },
        ]
    },
]);

export default router;