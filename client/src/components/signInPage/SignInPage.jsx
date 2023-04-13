import React, { useContext, useEffect, useReducer, useState } from 'react';
import {
  signInFormInitialState,
  SignInFormReducer,
} from '../../reducers/signInReduser';
import { useNavigate } from 'react-router-dom';
import SignPage from '../general/signPage/SignPage';
import FormButton from '../general/signPage/signForm/formButton/FormButton';
import FormSignOptions from '../general/signPage/signForm/formSignOptions/FormSignOptions';
import { inputProperties, signInValidator } from '../../utils/utils';
import FormInput from '../general/signPage/signForm/formInput/FormInput';
import { getAllFavoriteAds, signInUser } from '../../api/userRequests';
import { saveUserOnCookie } from '../../cookies/cookies';
import { UserContext } from '../../context/UserContext';

export default function SignInPage() {
  const { user, dispatchUser, userFavoriteAds, dispatchUserFavoriteAds } =
    useContext(UserContext);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [formState, dispatchForm] = useReducer(
    SignInFormReducer,
    signInFormInitialState
  );
  const formInputs = ['email', 'password'];

  const onSubmitform = () => {
    const credentials = {
      email: formState.values.email,
      password: formState.values.password,
    };
    signInUser(credentials).then(
      (userData) => {
        saveUserOnCookie(userData);
        dispatchUser(userData);
        getAllFavoriteAds(userData.token).then((data) => {
          // let userFavoriteAds = [];
          // data.forEach((element) => userFavoriteAds.push(element.adId));
          dispatchUserFavoriteAds(data);
        });
        navigate('/realestate/forsell');
      },
      (err) => {
        console.log('err: ', err.response.data.Message);
        if (
          err.response.data.Message === 'משתמש זה לא קיים במערכת.' ||
          err.response.data.Message === 'סיסמה שגויה.'
        ) {
          setIsError(true);
        }
      }
    );
  };

  const stepValidation = (event) => {
    event.preventDefault();
    let i = 0;
    while (i < formInputs.length) {
      if (formState.values[formInputs[i]] == '') {
        dispatchForm({
          type: 'SET',
          payload: { type: formInputs[i], value: '', isValidInput: false },
        });
        return;
      }
      i++;
    }
    if (formState.isFormValid) {
      onSubmitform();
    }
  };
  return (
    <SignPage>
      <form>
        <div className='form-title'>היי, טוב לראות אותך</div>
        {formInputs.map((key, index) => (
          <FormInput
            key={index}
            data={{
              type: inputProperties[key].type,
              placeholder: inputProperties[key].placeholder,
              label: inputProperties[key].label,
              name: key,
              validationFunc:
                key != 'password'
                  ? inputProperties[key].validationFunc
                  : signInValidator,
              invalidValueMessage:
                key != 'password'
                  ? inputProperties[key].invalidValueMessage
                  : inputProperties[key].noValueMessage,
              noValueMessage: inputProperties[key].noValueMessage,
              dispatchForm: dispatchForm,
              formState: formState,
            }}
          />
        ))}
        <div className='forgot-password'>
          <span>שחכתי סיסמה</span>
        </div>
        {isError && (
          <div className='error-message'>המייל או הסיסמה אינם תקינים</div>
        )}
        <FormButton text={'התחברות'} onClick={stepValidation} />
        <FormSignOptions />
        <div className='sign-up-link'>
          אין לך חשבון?
          <span onClick={() => navigate('/register')}>להרשמה</span>
        </div>
      </form>
    </SignPage>
  );
}
