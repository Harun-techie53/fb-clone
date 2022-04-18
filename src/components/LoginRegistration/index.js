import React from 'react';
import { Modal, Box } from '@mui/material';
import LoginRegistrationView from "./LoginRegistrationView";
import "./LoginRegistration.css";
import 'animate.css';

const LoginRegistration = ({
  openModal,
  setOpenModal
}) => {
  const style = {
    position: 'absolute',
    left: '25%',
    top:'5%'
  };
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <LoginRegistrationView/>
    </Modal>
  );
}

export default LoginRegistration;