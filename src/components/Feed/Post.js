import React, {useState} from 'react';
import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import { ThumbUpAltOutlined, BookmarkBorderOutlined, MoreHoriz } from '@mui/icons-material';
import "./Post.css";

const Post = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <div className="post">
        <div className="post__top">
            <div className="post__topLeft">
                <Avatar/>
                <div className="post__topInfo">
                    <h4>
                        Username
                    </h4>
                    <small>
                        Timestamp
                    </small>
                </div>
            </div>
            <IconButton
                style={{
                    marginRight: "1.5rem"
                }}
                onClick={handleClick}
            >
                <MoreHoriz/>
            </IconButton>
            <Menu
                id="basic-menu"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem>
                    Edit Post
                </MenuItem>
                <MenuItem>
                    Delete
                </MenuItem>
            </Menu>
        </div>


        <div className="post__middle">
            <p>
                Lorem Ipsum Text
            </p>
            <img
                alt="post_image"
                src="https://images.pexels.com/photos/1187078/pexels-photo-1187078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
        </div>

        <div className="post__bottom">
            <p>
                Total Likes
            </p>
            <div className="post__utils">
                <div className="post__option">
                    <ThumbUpAltOutlined/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <BookmarkBorderOutlined/>
                    <p>Bookmark</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post