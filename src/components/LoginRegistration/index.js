import React, {useState} from 'react';
import { Modal } from '@mui/material';
import LoginRegistrationView from "./LoginRegistrationView";
import { signUpWithGoogle, signUpForm, signInForm } from '../../actions/authAction';
import { useDispatch } from 'react-redux';
import "./LoginRegistration.css";
import 'animate.css';

const LoginRegistration = ({
  openModal,
  setOpenModal,
  setOpenSignUpSnackbar,
  setOpenSignInSnackbar,
  isLoading,
  isSignedIn
}) => {
  const dispatch = useDispatch();
  const [signUpInputFields, setSignUpInputFields] = useState({
    githubUserName: "",
    fullName: "",
    phoneNum: null,
    email: "",
    password: ""
  });

  const [signInInputFields, setSignInInputFields] = useState({
    email: "",
    password: ""
  });

  const handleChangeSignUpParam = (e) => {
    setSignUpInputFields({
      ...signUpInputFields,
      [e.target.name]: e.target.value
    });
  }

  const handleChangeSignInParam = (e) => {
    setSignInInputFields({
      ...signInInputFields,
      [e.target.name]: e.target.value
    });
  }

  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpForm(signUpInputFields));
    setSignUpInputFields({
      ...signUpInputFields,
      githubUserName: "",
      fullName: "",
      phoneNum: null,
      email: "",
      password: ""
    });
    setOpenModal(false);
    setOpenSignUpSnackbar(true);
  }

  const handleSignInFormSubmit = (e) => {
    e.preventDefault();
    dispatch(signInForm(signInInputFields));

    setSignInInputFields({
      ...signInInputFields,
      email: "",
      password: ""
    });
    setOpenModal(false);
    setOpenSignUpSnackbar(true);
  }

  const handleGoogleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUpWithGoogle());
    setOpenModal(false);
    setOpenSignUpSnackbar(true);
  }
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <LoginRegistrationView
        handleGoogleSignUp={handleGoogleSignUp}
        handleChangeSignUpParam={handleChangeSignUpParam}
        signUpInputFields={signUpInputFields}
        signInInputFields={signInInputFields}
        handleSignUpSubmit={handleSignUpFormSubmit}
        handleSignInSubmit={handleSignInFormSubmit}
        handleChangeSignInParam={handleChangeSignInParam}
      />
    </Modal>
  );
}

export default LoginRegistration;