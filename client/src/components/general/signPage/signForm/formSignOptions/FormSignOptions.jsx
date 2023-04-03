import React from 'react';
import { BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import FormButton from '../formButton/FormButton';

export default function FormSignOptions () {
  return (
    <div className='form-sign-options'>
      <div className='form-sign-options-container'>
        <div className='line' />
        <span>או התחברו דרך</span>
        <div className='line' />
      </div>
      <div className='form-sign-options-container'>
        <FormButton text={'גוגל'}><FcGoogle/></FormButton>
        <FormButton text={'אפל'}><BsApple/></FormButton>
      </div>
    </div>
  );
};