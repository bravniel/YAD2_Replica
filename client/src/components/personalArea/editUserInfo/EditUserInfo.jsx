import React, { useContext, useEffect, useReducer } from 'react';
import { getUserData, setUserData } from '../../../api/userRequests';
import { UserContext } from '../../../context/UserContext';
import { WindowContext } from '../../../context/WindowContext';
import { getUserFromCookie, saveUserOnCookie } from '../../../cookies/cookies';
import {
  editUserInfoFormInitialState,
  EditUserInfoFormReducer,
} from '../../../reducers/editUserInfoReduser';
import { editUserInputs } from '../../../utils/personalArea';
import { signInValidator } from '../../../utils/utils';
import PersonalAreaSideBar from '../personalAreaSideBar/PersonalAreaSideBar';
import EditInput from './editUserInfoInput/EditInput';

export default function EditUserInfo() {
  const { windowWidth } = useContext(WindowContext);
  const { user, dispatchUser } = useContext(UserContext);
  // const user = getUserFromCookie();
  // getUserData(user.email)
  // setUserData(user.email,)
  const [formState, dispatchForm] = useReducer(
    EditUserInfoFormReducer,
    editUserInfoFormInitialState
  );
  const onSubmitform = (e) => {
    // e.preventDefault();
    // if (formState.isFormValid) {
    setUserData(user.token, formState.values).then(
      (userData) => {
        saveUserOnCookie(userData);
        // navigate('/realestate/forsell');
        dispatchUser(userData);
        alert('the information has been successfully updated');
      },
      (err) => {
        console.log('err: ', err.response.data.Message);
        // if (
        //   err.response.data.Message === 'משתמש זה לא קיים במערכת.' ||
        //   err.response.data.Message === 'סיסמה שגויה.'
        // ) {
        //   setIsError(true);
        // }
      }
    );
    // }
  };

  useEffect(() => {
    // getUserData(user.token).then((data) => {
    //   dispatchForm({
    //     type: 'INIT',
    //     payload: {
    //       data: {
    //         FirstName: data.FirstName != null ? data.FirstName : '',
    //         LastName: data.LastName != null ? data.LastName : '',
    //         PhoneNumber: data.PhoneNumber != null ? data.PhoneNumber : '',
    //         dateOfBirth: data.dateOfBirth != null ? data.dateOfBirth : '',
    //         city: data.city != null ? data.city : '',
    //         street: data.street != null ? data.street : '',
    //         houseNumber: data.houseNumber != null ? data.houseNumber : '',
    //       },
    //     },
    //   });
    // });
    userInfo();
  }, []);

  const userInfo = () => {
    getUserData(user.token).then((data) => {
      dispatchForm({
        type: 'INIT',
        payload: {
          data: {
            FirstName: data.FirstName != null ? data.FirstName : '',
            LastName: data.LastName != null ? data.LastName : '',
            PhoneNumber: data.PhoneNumber != null ? data.PhoneNumber : '',
            dateOfBirth:
              data.dateOfBirth != null ? data.dateOfBirth.substring(0, 10) : '',
            city: data.city != null ? data.city : '',
            street: data.street != null ? data.street : '',
            houseNumber: data.houseNumber != null ? data.houseNumber : '',
          },
        },
      });
    });
  };

  useEffect(() => {
    console.log('formState', formState);
  }, [formState]);

  const formInputs = [
    'FirstName',
    'LastName',
    'PhoneNumber',
    'dateOfBirth',
    'city',
    'street',
    'houseNumber',
  ];

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
    <div className='personal-area'>
      <PersonalAreaSideBar />
      <div className='personal-area-body'>
        <span className='edit-section-title'>עדכון פרטים</span>
        {formState.values ? (
          <div className='personal-area-form'>
            <div className='name-icon'>שם</div>
            <form>
              <div className='form-title'>פרטים אישיים</div>
              <div className='edit-inputs-container'>
                {editUserInputs.personalData.map((key, index) => (
                  <EditInput
                    key={index}
                    data={{
                      type: key.type,
                      placeholder: key.placeholder,
                      label: key.label,
                      name: key.name,
                      validationFunc: key.validationFunc,
                      noValueMessage: key.errorMessage,
                      dispatchForm: dispatchForm,
                      formState: formState,
                    }}
                  />
                ))}
              </div>
              <div className='form-title'>כתובת</div>
              <div className='edit-inputs-container'>
                {editUserInputs.address.map((key, index) => (
                  <EditInput
                    key={index}
                    data={{
                      type: key.type,
                      placeholder: key.placeholder,
                      label: key.label,
                      name: key.name,
                      validationFunc: key.validationFunc,
                      noValueMessage: key.errorMessage,
                      dispatchForm: dispatchForm,
                      formState: formState,
                    }}
                  />
                ))}
              </div>
              <div className='edit-btn-section'>
                <button
                  type='button'
                  onClick={userInfo}
                  className='cancel-edit-btn'>
                  ביטול
                </button>
                <button
                  type='submit'
                  onClick={stepValidation}
                  className='save-edit-btn'>
                  שמירה
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
