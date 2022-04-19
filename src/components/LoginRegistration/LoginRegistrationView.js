import React, {useState} from 'react';
import { Box } from '@mui/material';
import { Google } from '@mui/icons-material';
import "./LoginRegistration.css";
import "animate.css";

const style = {
  position: 'absolute',
  left: '25%',
  top:'5%'
};

const LoginRegistrationView = ({ 
    handleGoogleSignUp,
    handleChangeSignUpParam,
    signUpInputFields,
    signInInputFields,
    handleSignUpSubmit,
    handleSignInSubmit,
    handleChangeSignInParam
}) => {
    const { 
        githubUserName, 
        fullName, 
        phoneNum, 
        email: signUpEmail, 
        password: signUpPassword
    } = signUpInputFields;
    const { email: signInEmail, password: signInPassword } = signInInputFields;
  const [addClass, setAddClass] = useState("");
  return (
    <div className='animate__animated animate__bounceInDown'>
      <Box sx={style} className='animate__animated animate__bounceInDown  '>
      <div className=' flex justify-center my-10 '>
            <div className={`container_loginreg ${addClass}`} id="container">
                <div className="form-container  sign-up-container">
                    <form 
                        className='form'
                        onSubmit={handleSignUpSubmit}
                    >
                        <h1 className=' text-xl font-bold mb-2 '>
                            Create Account
                        </h1>
                        <input 
                            name="githubUserName"
                            className='input_tag' 
                            type="text" 
                            placeholder="GITHUB USERNAME *"
                            value={githubUserName}
                            onChange={handleChangeSignUpParam}
                            required
                        />
                        <input 
                            name="fullName"
                            className='input_tag' 
                            type="text" 
                            placeholder="FULL NAME *"
                            value={fullName}
                            onChange={handleChangeSignUpParam}
                            required
                        />
                        <input 
                            name="phoneNum"
                            className='input_tag'  
                            placeholder="PHONE NUMBER *"
                            value={phoneNum}
                            onChange={handleChangeSignUpParam}
                            required
                        />
                        <input 
                            name="email"
                            className='input_tag' 
                            type="email" 
                            placeholder="EMAIL *"
                            value={signUpEmail}
                            onChange={handleChangeSignUpParam}
                            required
                        />
                        <input 
                            name="password"
                            className='input_tag' 
                            type="password" 
                            placeholder="PASSWORD *"
                            value={signUpPassword}
                            onChange={handleChangeSignUpParam}
                            minLength="8"
                        />

                        <button className='button' type="submit">
                            REGISTER
                        </button>
                        <button 
                          className='button' 
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            backgroundColor: "dodgerblue",
                            marginTop: "1rem",
                            cursor: "pointer"
                          }} 
                          type="button"
                          onClick={handleGoogleSignUp}
                        >
                            <Google sx={{mr: 1}}/>
                          Sign Up With Google
                        </button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form 
                        className='form'
                        onSubmit={handleSignInSubmit}
                    >
                        <h1 className=' text-xl font-bold mb-2'>Sign in</h1>
                        <div class="social-container">
                            <a href="/#" className="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="/#" className="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="/#" className="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className='heading_two'>or use your account</span>
                        <input 
                            name="email"
                            className='input_tag' 
                            type="text" 
                            placeholder="PHONE NUMBER *"
                            value={signInEmail}
                            onChange={handleChangeSignInParam}
                        />
                        <input 
                            name="password"
                            className='input_tag' 
                            type="password" 
                            placeholder="PASSWORD *"
                            value={signInPassword}
                            onChange={handleChangeSignInParam}
                        />
                        <a className='social' href="/#">Forgot your password?</a>
                

                        <button className='button' type="submit">Sign in</button>
                    </form>
                </div>
                <div className="overlay-container z-10 ">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className=' text-2xl font-bold'>Welcome Back!</h1>
                            <p className='heading'>To keep connected with us please login with your personal info.</p>
                            <button
                                className="button ghost"
                                id="signIn"
                                onClick={() => setAddClass("")}
                            >
                                GO TO LOGIN
                            </button>
                        </div>

                        <div className="overlay-panel overlay-right">
                            <h1 className=' text-2xl font-bold'>Hello, Friend!</h1>
                            <p className='heading'>Enter your personal details and start journey with us.</p>

                            <button
                                className="button ghost"
                                id="signUp"
                                onClick={() => setAddClass("right-panel-active")}
                            >

                                GO TO REGISTER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Box>
    </div>
  )
}

export default LoginRegistrationView