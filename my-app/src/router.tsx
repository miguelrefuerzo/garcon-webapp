import React from 'react';

import Header from './components/header';
import Home from '../src/components/home';
import Categories from './components/categories';
import MainCourse from './pages/maincourse';

import {createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/Menu",
                element: <Categories/>,
            },
            {
                path: "/Menu/Main",
                element: <MainCourse/>,
            },
        ]
    },
]);

export default router;