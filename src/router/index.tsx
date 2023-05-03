import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from '../components';
import { withPrivateRoute } from './withPrivateRoute';
import { RouterList } from './routerList';

import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import ObjectPage from '../pages/Object';
//const HomePage = lazy(() => import(/* webpackChunkName: "home" */ '../pages/Home'));
//const AboutPage = lazy(() => import(/* webpackChunkName: "about" */ '../pages/About'));
//const ObjectPage = lazy(() => import(/* webpackChunkName: "object" */ '../pages/Object'));
const UserPage = lazy(() => import(/* webpackChunkName: "admin" */ '../pages/User'));
const CartPage =  lazy(() => import(/* webpackChunkName: "admin" */ '../pages/Cart'));
const ContactsPage = lazy(() => import(/* webpackChunkName: "admin" */ '../pages/Contacts'));
const DeliveryPage = lazy(() => import(/* webpackChunkName: "admin" */ '../pages/Delivery'));
const ServerErrorPage = lazy(() => import(/* webpackChunkName: "servererror" */ '../pages/ServerError'));
const NotFoundPage = lazy(() => import(/* webpackChunkName: "notfound" */ '../pages/NotFound'));

export function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={RouterList.HOME}>
          <Route index element={<HomePage />} />
          <Route path={RouterList.ABOUT} element={<AboutPage />} />
          <Route path={RouterList.SERVER_ERROR} element={<ServerErrorPage />} />
          <Route path={RouterList.NOT_FOUND} element={<NotFoundPage />} />
          
          <Route path={RouterList.OBJECT}>
            <Route index element={<NotFoundPage />} />
            <Route
              path={RouterList.OBJECT_ID_PARAM}
              element={<ObjectPage />}
            />
          </Route>
          <Route path={RouterList.USER}>
            <Route index element={<UserPage />} />
          </Route>
          <Route path={RouterList.CONTACTS}>
            <Route index element={<ContactsPage />} />
          </Route>
          <Route path={RouterList.DELIVERY}>
            <Route index element={<DeliveryPage />} />
          </Route>
          <Route path={RouterList.CART}>
            <Route index element={<CartPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
