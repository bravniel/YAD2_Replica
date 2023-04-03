import "./styles/styles.scss";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import WindowContextProvider from "./context/WindowContext";
import SignUpPage from "./components/signUpPage/SignUpPage";
import SignInPage from "./components/signInPage/SignInPage";
import LoginRoute from "./routers/LoginRoute";
import RealEstateRoute from './routers/RealEstateRoute';
import ForSell from "./components/realestate/forSell/ForSell";
import PublishRoute from "./routers/PublishRoute";
import PublishBoard from "./components/publish/publishBoard/PublishBoard";
import PublishRealEstate from "./components/publish/publishNewAd/publishRealEstate/PublishRealEstate";
function App() {
  return (
    <BrowserRouter>
      <WindowContextProvider>
        <Routes>
          <Route element={<RealEstateRoute />}>
            <Route path='/' element={<Navigate to='/realestate/forsell' />} />
            <Route path='/realestate/forsell' element={<ForSell />} />
          </Route>
          <Route element={<PublishRoute />}>
            <Route path="/publish" element={<PublishBoard />} />
            <Route path="/publish/realestate" element={<PublishRealEstate />} />
          </Route>
          <Route element={<LoginRoute />}>
            <Route path='/login' element={<SignInPage />} />
            <Route path='/register' element={<SignUpPage />} />
          </Route>
        </Routes>
      </WindowContextProvider>
    </BrowserRouter>
  );
}

export default App;