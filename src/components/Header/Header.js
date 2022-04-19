import React, {useState} from 'react';
import { Home, Bookmark, HowToReg, Logout } from '@mui/icons-material';
import { Avatar } from "@mui/material";
import { Link } from 'react-router-dom';
import LoginRegistration from '../LoginRegistration';
import { useSelector, useDispatch } from 'react-redux';
import { signOutWithGoogle } from '../../actions/authAction';
import AlertSnackbar from '../../utils';
import "./Header.css";

const Header = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const [openSignUpSnackbar, setOpenSignUpSnackbar] = useState(false);
    const [openSignInSnackbar, setOpenSignInSnackbar] = useState(false);
    const [openLogOutSnackbar, setOpenLogOutSnackbar] = useState(false);
    const user = auth.user ? auth.user : null;
    const userInfo = auth.userInfo ? auth.userInfo : null;
    const isSignedIn = auth.isSignedIn;
    const isLoading = auth.isLoading;
    const [ openModal, setOpenModal ] = useState(false);
    const [ active, setActive ] = useState({
        isHome: true,
        isBookmark: false
    });
  return (
    <div className="header">
        <div className="header__left">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/640px-2021_Facebook_icon.svg.png"
                alt="facebook_logo"
            />
            <h3>
                facebook Clone
            </h3>
        </div>
        <div className="header__middle">
            <Link to="/">
                <div 
                    onClick={() => setActive({
                        ...active,
                        isHome: true,
                        isBookmark: false
                    })}
                    className={`header__option ${active.isHome ? 'header__option--active' : ''}`}
                >
                    <Home fontSize='large'/>
                </div>
            </Link>
            <Link to="/bookmark">
                <div 
                    onClick={() => setActive({
                        ...active,
                        isHome: false,
                        isBookmark: true
                    })}
                    className={`header__option ${active.isBookmark ? 'header__option--active' : ''}`}
                >
                    <Bookmark fontSize='large'/>
                </div>
            </Link>
        </div>

        <div className="header__right">
            {
                isSignedIn &&
                <div className="header__info">
                    <Avatar src={user?.photoURL}/>
                    <h4>
                        {user?.displayName ? user?.displayName : userInfo?.fullName}
                    </h4>
                </div>
            }
    
            {
                !isSignedIn ? (
                    <div 
                        className="header__auth"
                        onClick={() => setOpenModal(true)}
                    >
                        <div className="header__authIcon">
                            <HowToReg 
                                fontSize='medium'
                                style={{
                                    color: "dodgerblue"
                                }}
                            />
                        </div>
                        <h4>
                            SIGN UP
                        </h4>
                    </div>
                ) : (
                    <div 
                        className="header__auth"
                        onClick={() => {
                            dispatch(signOutWithGoogle())
                            setOpenLogOutSnackbar(true);
                        }}
                    >
                        <div className="header__authIcon">
                            <Logout 
                                fontSize='medium'
                                style={{
                                    color: "orange"
                                }}
                            />
                        </div>
                        <h4>
                            LOG OUT
                        </h4>
                    </div>
                )
            }
        </div>
        <LoginRegistration
            openModal={openModal}
            setOpenModal={setOpenModal}
            setOpenSignUpSnackbar={setOpenSignUpSnackbar}
            setOpenSignInSnackbar={setOpenSignInSnackbar}
            isSignedIn={isSignedIn}
            isLoading={isLoading}
        />
        <AlertSnackbar
            open={openSignUpSnackbar}
            setOpen={setOpenSignUpSnackbar}
            type="success"
            message="Registered Successfully"
        />
        <AlertSnackbar
            open={openSignInSnackbar}
            setOpen={setOpenSignInSnackbar}
            type="success"
            message="Logged In Successfully"
        />
        <AlertSnackbar
            open={openLogOutSnackbar}
            setOpen={setOpenLogOutSnackbar}
            type="error"
            message="Logged Out Successfully"
        />
    </div>
  )
}

export default Header