import './styles/styles.scss';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import WindowContextProvider from './context/WindowContext';
import SignUpPage from './components/signUpPage/SignUpPage';
import SignInPage from './components/signInPage/SignInPage';
import LoginRoute from './routers/LoginRoute';
import RealEstateRoute from './routers/RealEstateRoute';
import ForSell from './components/realestate/forSell/ForSell';
import PublishRoute from './routers/PublishRoute';
import PublishBoard from './components/publish/publishBoard/PublishBoard';
import PublishRealEstate from './components/publish/publishNewAd/publishRealEstate/PublishRealEstate';
import UserRoute from './routers/UserRoute';
import EditUserInfo from './components/personalArea/editUserInfo/EditUserInfo';
import UserContextProvider from './context/UserContext';
import UserPublishedAds from './components/personalArea/userPublishedAds/UserPublishedAds';
import UserFavoritAds from './components/personalArea/userFavoritAds/UserFavoritAds';
function App() {
  return (
    <BrowserRouter>
      <WindowContextProvider>
        <UserContextProvider>
          <Routes>
            <Route element={<RealEstateRoute />}>
              <Route path='/' element={<Navigate to='/realestate/forsell' />} />
              <Route path='/realestate/forsell' element={<ForSell />} />
            </Route>
            <Route element={<PublishRoute />}>
              <Route path='/publish' element={<PublishBoard />} />
              <Route
                path='/publish/realestate'
                element={<PublishRealEstate />}
              />
            </Route>
            <Route element={<UserRoute />}>
              <Route
                path='/personal'
                element={<Navigate to='/personal/my-ads' />}
              />
              <Route path='/personal/profile' element={<EditUserInfo />} />
              <Route path='/personal/my-ads' element={<UserPublishedAds />} />
            <Route path='/personal/favorites' element={<UserFavoritAds />} />
            </Route>
            <Route element={<LoginRoute />}>
              <Route path='/login' element={<SignInPage />} />
              <Route path='/register' element={<SignUpPage />} />
            </Route>
          </Routes>
        </UserContextProvider>
      </WindowContextProvider>
    </BrowserRouter>
  );
}

export default App;
