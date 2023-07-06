import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


import showpasswordicon from "../../images/authpages/showpasswordicon.svg"

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-fit ">
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
        className= "mb-[43px] w-[700px] h-[82px] px-[29px] py-[10px] rounded-[6px] bg-[#F9F9F9] border-[3px] border-[#000000] text-[#888888] text-lg "
      />
      <img src={showpasswordicon} 
          alt="toggle password icon" 
          className='absolute top-8 right-5'
          onClick={togglePasswordVisibility}
       />
    </div>
  );
};

export default PasswordInput;
