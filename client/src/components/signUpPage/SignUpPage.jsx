import React, { useContext, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../../api/userRequests';
import { UserContext } from '../../context/UserContext';
import { saveUserOnCookie } from '../../cookies/cookies';
import {
  signUpFormInitialState,
  SignUpFormReducer,
} from '../../reducers/signUpReduser';
import SignPage from '../general/signPage/SignPage';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

export default function SignUpPage() {
  const { user, dispatchUser, userFavoriteAds, dispatchUserFavoriteAds } =
    useContext(UserContext);
  const navigate = useNavigate();
  const [formState, dispatchForm] = useReducer(
    SignUpFormReducer,
    signUpFormInitialState
  );
  const [isEmailExists, setIsEmailExists] = useState(false);
  const formInputsFirstStep = ['email', 'password', 'repeatPassword'];
  const formInputsSecondStep = [
    'firstName',
    'lastName',
    'phoneNumber',
    'siteRegulations',
    'advertisingMailing',
  ];
  const [isSecondStep, setIsSecondStep] = useState(false);
  const onSubmitform = () => {
    const credentials = {
      firstName: formState.values.firstName,
      lastName: formState.values.lastName,
      phoneNumber: formState.values.phoneNumber,
      email: formState.values.email,
      password: formState.values.password,
    };
    signUpUser(credentials).then(
      (userData) => {
        saveUserOnCookie(userData);
        dispatchUser(userData);
        navigate('/realestate/forsell');
      },
      (err) => {
        console.log('err: ', err.response.data.Message);
        if (err.response.data.Message === 'משתמש זה קיים במערכת.') {
          dispatchForm({
            type: 'SET',
            payload: {
              type: 'email',
              value: formState.values['email'],
              isValidInput: false,
            },
          });
          dispatchForm({
            type: 'SET',
            payload: {
              type: 'siteRegulations',
              value: false,
              isValidInput: false,
            },
          });
          setIsEmailExists(true);
          setIsSecondStep(false);
        }
      }
    );
  };

  const stepValidation = (formInputs) => {
    let i = 0;
    while (i < formInputs.length) {
      if (
        (formState.values[formInputs[i]] == '' &&
          formState.isValid[formInputs[i]]) ||
        !formState.isValid[formInputs[i]]
      ) {
        if (!isSecondStep) {
          setIsSecondStep(false);
        }
        dispatchForm({
          type: 'SET',
          payload: {
            type: formInputs[i],
            value: formState.values[formInputs[i]],
            isValidInput: false,
          },
        });

        return;
      }
      if (!isSecondStep) {
        setIsSecondStep(true);
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
        <div className='form-title'>היי, נעים להכיר</div>
        {!isSecondStep ? (
          <FirstStep
            formInputs={formInputsFirstStep}
            dispatchForm={dispatchForm}
            formState={formState}
            onClick={(event) => {
              event.preventDefault();
              stepValidation(formInputsFirstStep);
            }}
            isEmailExists={isEmailExists}
          />
        ) : (
          <SecondStep
            formInputs={formInputsSecondStep}
            dispatchForm={dispatchForm}
            formState={formState}
            onClick={(event) => {
              event.preventDefault();
              stepValidation(formInputsSecondStep);
            }}
          />
        )}
      </form>
    </SignPage>
  );
}
