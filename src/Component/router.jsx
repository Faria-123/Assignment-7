import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from './Layout';
import HomePage from './HomePage';
import Timeline from './Timeline';
import Stats from './Stats';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            { index: true, Component: HomePage },
            {
                path: 'timeline', Component: Timeline
            },
            {
                path: 'stats', Component: Stats
            }
        ]

    }
])

export default router;