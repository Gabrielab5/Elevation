import React,  { useReducer }  from 'react';
import { useFormContext } from './FormContext';

function MultiStepForm() {
  const { state, dispatch } = useFormContext();
  const { currentStep, formData, errors } = state;
    
    const validateStep = (step, formData) => {
    const errors = {};
    if (step === 1) {
        if (!formData.name) errors.name = 'add name';
        if (!formData.email || !formData.email.includes('@')) errors.email = 'add valid email';
        if (formData.age < 18) errors.age = 'age must be 18+';
    }
    if (step === 2) {
        if (formData.username.length < 3) errors.username = 'usename nuse be at least 3 chars';
        if (formData.password.length < 6) errors.password = 'password must be al least 6 chars';
        if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'passwords must match';
    }
    return errors;
    };
  
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        dispatch({ 
            type: 'UPDATE_FIELD',
            data: { field: name, value: type === 'checkbox' ? checked : value, }
        })
    }

    const handleNextStep = () => {
        const validationErrors = validateStep(currentStep, formData);

        if( Object.keys(validationErrors).length > 0) {
            dispatch ({type: 'SET_ERRORS', data: validationErrors})
        }else dispatch({type:'NEXT_STEP'});
    }

    const handlePrevStep = () => {
        dispatch({type: 'PREV_STEP'})
    }

      return (
    <div>
      {}
    </div>
  );

}

export default MultiStepForm;