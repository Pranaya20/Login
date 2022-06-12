import React, { lazy } from 'react';

import {
  ROUTE_MAIN,
  ROUTE_SIGN_IN,
  ROUTE_SIGN_UP,
} from 'routes/routes';
const SignInPage = lazy(() => import('containers/Views/Authentication/SignIn'));
const routes = [
    {
        isPublic: true,
        path: ROUTE_SIGN_IN,
        component: props => (
          <PublicLayout {...props}>
            <SignInPage {...props} />
          </PublicLayout>
        ),
      },
  ];
  
  export default routes;
  