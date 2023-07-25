import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import showpasswordicon from "../../images/authpages/showpasswordicon.svg"

const PasswordInput = (props) => {
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
  

  return (    
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          name = "password1"
          onChange = {handleChange}
          placeholder="Password"
          className={`w-[700px] h-[82px] px-[29px] py-[10px] rounded-[6px] bg-[#F9F9F9] border-[3px] border-[#000000]
           outline-[3px] outline-[#37BCF7] focus:border-[#37BCF7] focus:text-[#37BCF7] text-[#888888] text-lg`}
        />
        <span
          onClick={togglePasswordVisibility}
          className="absolute top-[50%] right-4 transform -translate-y-1/2 cursor-pointer"
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </span>
      </div>    
  );
};

export default PasswordInput;
