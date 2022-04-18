import React, {useState} from 'react';
import { Home, Bookmark, HowToReg } from '@mui/icons-material';
import { Avatar } from "@mui/material";
import { Link } from 'react-router-dom';
import LoginRegistration from '../LoginRegistration';
import "./Header.css";

const Header = () => {
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
            <div className="header__info">
                <Avatar/>
                <h4>
                    harun_ur
                </h4>
            </div>
            <div 
                className="header__auth"
                onClick={() => setOpenModal(true)}
            >
                <div className="header__authIcon">
                    <HowToReg fontSize='large'/>
                </div>
                <h4>
                    Sign Up
                </h4>
            </div>
        </div>
        <LoginRegistration
            openModal={openModal}
            setOpenModal={setOpenModal}
        />
    </div>
  )
}

export default Header