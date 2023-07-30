import React, { useEffect, useState } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import showpasswordicon from "../../images/authpages/showpasswordicon.svg"
import hidepasswordicon from "../../images/authpages/hidepassword.svg"
import checker from "../../images/authpages/checker.svg"
import checker2 from "../../images/authpages/checker2.svg"
import checker3 from "../../images/authpages/checker3.svg"
import { passwordVerification } from '../../auth/inputValidation';

const PasswordInput = (props) => {
  
  const validateInput = props.validateInput
  const setValidateInput = props.setValidateInput

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handleChange = (e) => {    
    handlePasswordChange(e);
    if (props.onChange) {
      props.onChange(e);
    }

  };
  
  // Start validating the password strength as soon as the password is initially changed
  useEffect(()=> {
    //alert('password validation currently inefficient')
    passwordVerification(setValidateInput,password)
  },[password])

  return (    
      <div className="">
        
        <div className="relative mb-5 ">          
          <input 
              type={showPassword ? 'text' : 'password'}
              name="password"                
              placeholder="Password"
              required
              value={password}
              onChange={handleChange}
              className={`w-[700px] h-[82px] px-[29px] py-[10px] rounded-[6px] text-[#888888] text-lg bg-[#F9F9F9] border-[3px] 
              ${validateInput.password && validateInput.password !== 'Strong password' ? 
              'border-[#FD6150] outline-[#FD6150] focus:border-[#FD6150] focus:caret-[#FD6150] ' : 
              'border-black outline-[#37BCF7] focus:border-[#37BCF7]' } 
              outline-[3px] focus:caret-[#37BCF7] `}
          />                     
          <span
            onClick={togglePasswordVisibility}
            className="absolute top-[50%] right-4 transform -translate-y-1/2 cursor-pointer"
          >
            {/* <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} /> */}
        
            <img src={showPassword ? hidepasswordicon : showpasswordicon} alt="show password" className='w-[35px] h-5 ' />
          </span>
        </div>
        {
              validateInput.password && validateInput.password !== 'Strong password' ? (
                  <p className="mt-[20px] mb-5 text-[#FD6150] text-2xl font-merriweather">
                      {validateInput.password}
                  </p>
              ) : null
          }

        
        <div className=' font-merriweather flex flex-col gap-[15px] bg-[#F9F9F9] py-[10px] px-[15px] rounded-md ' >            
            <p className='text-lg font-bold '>
              Your password must have:
            </p>
            
            <p className='text-[17px] flex gap-3 ' >      
              {/* Displays the black checker before test runs, the orange when the test fails and the green when the test passes */}        
              <img src={validateInput.passwordtest.testStage === 'preRun' ? checker : (validateInput.passwordtest.upperCase ? checker3 : checker2) } alt="verification checker" className='w-[15px]' />
              <span>1 Upper-case letter</span>
            </p>
            <p className='text-[17px] flex gap-3 ' >              
              <img src={validateInput.passwordtest.testStage === 'preRun' ? checker : (validateInput.passwordtest.lowerCase ? checker3 : checker2) } alt="verification checker" className='w-[15px]' />
              <span>1 lower-case letter</span>
            </p>
            
            <p className='text-[17px] flex gap-3 ' >
              <img src={validateInput.passwordtest.testStage === 'preRun' ? checker : (validateInput.passwordtest.number ? checker3 : checker2) } alt="verification checker" className='w-[15px]' />
              <span>1 number</span>
            </p>
            <p className='text-[17px] flex gap-3 ' >
              <img src={validateInput.passwordtest.testStage === 'preRun' ? checker : (validateInput.passwordtest.specialCharacter ? checker3 : checker2) } alt="verification checker" className='w-[15px]' />
              <span>1 special character</span>
            </p>
            <p className='text-[17px] flex gap-3 ' >
            <img src={validateInput.passwordtest.testStage === 'preRun' ? checker : (validateInput.passwordtest.length >= 8  ? checker3 : checker2) } alt="verification checker" className='w-[15px]' />
              <span>8 characters at least </span>
            </p>
        </div>


      </div>
  );
};

export default PasswordInput;
