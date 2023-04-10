import React,{Fragment, useState} from 'react'
import './Login.css'



    const Login = (props) => {
        const [enteredEmail, setEnteredEmail] = useState('');
        const [emailIsValid, setEmailIsValid] = useState();
        const [enteredPassword, setEnteredPassword] = useState('');
        const [passwordIsValid, setPasswordIsValid] = useState();
        const [formIsValid, setFormIsValid] = useState(false);
        const [signUp, setSignUp] = useState('hidden');
        const [showBtn, setShowBtn] = useState('');
        const emailChangeHandler = (event) => {
          setEnteredEmail(event.target.value);
      
          setFormIsValid(
            event.target.value.includes('@') && enteredPassword.trim().length > 6
          );
        };
      
        const passwordChangeHandler = (event) => {
          setEnteredPassword(event.target.value);
      
          setFormIsValid(
            event.target.value.trim().length > 6 && enteredEmail.includes('@')
          );
        };
      
        const validateEmailHandler = () => {
          setEmailIsValid(enteredEmail.includes('@'));
        };
        const validatePasswordHandler = () => {
          setPasswordIsValid(enteredPassword.trim().length > 6);
        };
      
        const submitHandler = (event) => {
          event.preventDefault();
          props.onLogin(enteredEmail, enteredPassword);
        };
      const SignUpHandler=(event)=>{
        event.preventDefault();
        setSignUp("")
        setShowBtn("hidden")

      }
    return (
    <Fragment>
        <form onSubmit={submitHandler}>
            <label className={signUp} >User Name</label>
            <input className={ signUp} type="text"  placeholder="Enter you name"></input>
            <label>Email</label>
            <input  className="userEmailInput"
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
             placeholder="Enter email"></input> 
            <label>Password</label>
            <input  className="userPwInput"
             type="password"
             value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
             placeholder="Enter Password"></input> 
            <button  className={showBtn} type="submit">Login </button>
            <button  className={showBtn} onClick={SignUpHandler}type="button">SignUp instead </button>
            <button className={signUp}  type="button">SignUp </button>
        </form>
    </Fragment>
    )
}
export default Login