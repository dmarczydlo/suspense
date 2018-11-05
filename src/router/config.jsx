import React, {lazy, Suspense} from 'react';
import {Route} from 'react-router-dom';

import Home from '../sites/home';
// const User = lazy(() => import('../sites/user')); 
import User from '../sites/user';

export const routes = [
    {
        component: Home,
        exact: true,
        path: '/'
    },
    {
        component: User,
        path: '/user'
    }
];

export const RouteWithSubRoutes = (route, key) => (
    // <Suspense fallback={
    //     <div>
    //         {'Loading'}
    //     </div>
    // }>
    <Route
        exact={route.exact}
        key={key}
        path={route.path}
        render={(props) => (
            <route.component
                {...props}
                routes={route.routes}
            />
        )}
    />
    // </Suspense>
);
