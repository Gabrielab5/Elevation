import React, { useReducer } from 'react';

export default function formReducer(state, action) {

  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.data.field]: action.data.value,
        },
      };

    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.data,
      };

    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: state.currentStep + 1,
        errors: {},
      };

    case 'PREV_STEP':
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };

    case 'SUBMIT_FORM':
      return {
        ...state,
        isSubmitting: true,
      };

    case 'RESET_FORM':
      return initialState;

    default:
   
      return state;
  }
}


const initialState = {
  currentStep: 1,
  formData: {
    // Step 1
    name: '',
    email: '',
    age: '',
    // Step 2  
    username: '',
    password: '',
    confirmPassword: '',
    // Step 3
    newsletter: false,
    notifications: true,
    theme: 'light'
  },
  errors: {},
  isSubmitting: false,
  isCompleted: false
};