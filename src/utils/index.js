import React from 'react'
import { Alert, Snackbar } from "@mui/material";

const AlertSnackbar = ({
    open,
    setOpen,
    type,
    message
}) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
  return (
    <div>
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert 
                onClose={handleClose} 
                severity={type}
                sx={{ width: '100%' }}
                variant="filled"
            >
                {message}
            </Alert>
        </Snackbar>
    </div>
  )
}

export default AlertSnackbar