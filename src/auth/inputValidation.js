

const emailPasswordValidation = async(setValidateInput,email, password) => {

    const validationMessages = {
    }

    console.log(email)

    // Validate email
    if (email == '') {
        setValidateInput((prevState) => ({ ...prevState, email: 'Please enter your email address ' }));
        validationMessages.email = 'please put your email'
    }else if (!isValidEmail(email)) {
        setValidateInput((prevState) => ({ ...prevState, email: 'Enter valid email' }));
        validationMessages.email = 'Invalid email type'
    }else {
        setValidateInput((prevState) => ({ ...prevState, email: 'correct' }));
        validationMessages.email = 'correct'
        
    }
  

    // Validate password
    if(!password) {
        setValidateInput((prevState) => ({ ...prevState, password: 'Please enter your password' }));
        validationMessages.password = 'Please enter your password'
    }else {
        const passwordStrength = checkPasswordStrength(password);
        validationMessages.password = passwordStrength.message
        setValidateInput((prevState) => ({ 
                ...prevState, 
                password: passwordStrength.message,
                passwordtest: {
                    testStage:'postRun' ,
                    upperCase: passwordStrength.upperCase,
                    lowerCase: passwordStrength.lowerCase,
                    number: passwordStrength.number,
                    specialCharacter: passwordStrength.specialCharacter,
                    length: passwordStrength.length
                }
            }
        ));        
    }  
    
    return validationMessages
}


// Email validation function
const isValidEmail = (email) => {
    // Email validation logic using a regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


// Password validation function
const checkPasswordStrength = (password) => {    
    
    // Using regex to check for uppercase, lowercase, numbers, and special characters
    // You can also check the length separately
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&\\(){}[\]:;<>,.?/~#'_"+\-=|\\^$]{8,}$/;
    //const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]*$/;
    const passwordStrength = {
      upperCase: /[A-Z]/.test(password),
      lowerCase: /[a-z]/.test(password),
      number: /\d/.test(password),
      specialCharacter: /[@$!%*?&]/.test(password),
      length: password.length
    };

    if (passwordRegex.test(password)) {
      passwordStrength.message = 'Strong password';      
    } else {
      passwordStrength.message = 'Password strength is too weak';
      //alert('too weak')     
    }

    return passwordStrength;
};

  export default emailPasswordValidation;




// Validate password while being input
export const passwordVerification = (setValidateInput,password) => {
    
    if(password == ''){
        setValidateInput((prevState) => ({
             ...prevState, 
            password: '',
            passwordtest: {
                testStage:'preRun' ,
                upperCase: false,
                lowerCase: false,
                number: false,
                specialCharacter: false,
                length: 0
            }
        }));
    }else {
        const passwordStrength = checkPasswordStrength(password);
        setValidateInput((prevState) => ({ 
                ...prevState, 
                password: passwordStrength.message,
                passwordtest: {
                    testStage:'postRun' ,
                    upperCase: passwordStrength.upperCase,
                    lowerCase: passwordStrength.lowerCase,
                    number: passwordStrength.number,
                    specialCharacter: passwordStrength.specialCharacter,
                    length: passwordStrength.length
                }
            }
        ));               
    }    
}