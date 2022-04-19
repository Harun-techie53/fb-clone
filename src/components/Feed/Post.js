import React, {useState} from 'react';
import { 
    Avatar,
    Menu, 
    MenuItem, 
    IconButton 
} from "@mui/material";
import { 
    ThumbUpAltOutlined, 
    BookmarkBorderOutlined, 
    MoreHoriz,
    ThumbUp, 
    Bookmark
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import {
    addedToLikedPost, 
    removeFromLikedPost,
    addedToBookmarkedPost,
    removeFromBookmarkedPost,
    removePostById,
    updatePostById
} from "../../actions/postAction";
import "./Post.css";
import AlertSnackbar from '../../utils';

const Post = ({ post, setRemoveSnackbar }) => {
    const dispatch = useDispatch();
    const [bookmarkAddedSnackbar, setBookmarkAddedSnackbar] = useState(false);
    const [bookmarkRemovedSnackbar, setBookmarkRemovedSnackbar] = useState(false);
    const [editPost, setEditPost] = useState({
        isClicked: false,
        text: post?.data?.text ?? ""
    });
    const auth = useSelector(state => state.auth);
    const user = auth.user ? auth.user : null;
    const isSignedIn = auth.isSignedIn ? auth.isSignedIn : null;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEditFormSubmit = (e) => {
        e.preventDefault();
        editPost.text && dispatch(updatePostById(post?.id, editPost.text));
        setEditPost({
            ...editPost,
            isClicked: false
        })
    }

  return (
    <div className="post">
        <div className="post__top">
            <div className="post__topLeft">
                <Avatar src={post?.data?.profilePic ?? ""}/>
                <div className="post__topInfo">
                    <h4>
                        {post?.data?.username ?? ""}
                    </h4>
                    <small>
                        {new Date(post?.data?.timestamp?.toDate()).toUTCString()}
                    </small>
                </div>
            </div>
            {
                post?.data?.userId === user?.uid && (
                    <IconButton
                        style={{
                            marginRight: "1.5rem"
                        }}
                        onClick={handleClick}
                    >
                        <MoreHoriz/>
                    </IconButton>
                )
            }
            <Menu
                id="basic-menu"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {
                    post?.data?.bookmarks?.includes(user?.uid) &&
                    <MenuItem onClick={() => dispatch(removeFromBookmarkedPost(user?.uid, post?.id))}>
                        Remove Bookmark
                    </MenuItem>
                }
                <MenuItem 
                    onClick={
                        () => setEditPost({ 
                            ...editPost, 
                            isClicked: true 
                        })
                    }
                >
                    Edit Post
                </MenuItem>
                <MenuItem onClick={() => dispatch(removePostById(post?.id))}>
                    Delete
                </MenuItem>
            </Menu>
        </div>


        <div className="post__middle">
            {
                editPost.isClicked ? (
                    <form onSubmit={handleEditFormSubmit}>
                        <input
                            value={editPost.text}
                            onChange={(e) => setEditPost({
                                ...editPost,
                                text: e.target.value
                            })}
                        />
                        <button
                            type="submit"
                            hidden
                        />
                    </form>
                ) : (
                    <p>
                        {post?.data?.text ?? ""}
                    </p>
                )
            }
            {
                post?.data?.image &&
                    <img
                        alt="post_image"
                        src={post?.data?.image ?? ""}
                    />
            }
        </div>

        <div className="post__bottom">
            {post?.data?.likes?.length > 0 && 
                <p>
                    {post?.data?.likes?.length} Likes
                </p>
            }
            <div className="post__utils">
                {
                    post?.data?.likes?.includes(user?.uid) && isSignedIn ? (
                        <div 
                            className="post__option"
                            onClick={() => dispatch(removeFromLikedPost(user?.uid, post?.id))}
                        >
                            <ThumbUp
                                style={{
                                    color: "dodgerblue"
                                }}
                            />
                            <p>Liked</p>
                        </div>
                    ) : (
                    <div 
                        className="post__option"
                        onClick={() => dispatch(addedToLikedPost(user?.uid, post?.id))}
                    >
                        <ThumbUpAltOutlined/>
                        <p>Like</p>
                    </div>
                    )
                }
                {
                    post?.data?.bookmarks?.filter((item) => item === user?.uid)?.length > 0 && isSignedIn ? (
                        <div 
                            className="post__option"
                            onClick={() => {
                                if(isSignedIn) {
                                    dispatch(removeFromBookmarkedPost(user?.uid, post?.id));
                                    setBookmarkRemovedSnackbar(true);
                                    setRemoveSnackbar(true);
                                }
                            }}
                        >
                            <Bookmark/>
                            <p>Bookmarked</p>
                        </div>
                    ) : (
                        <div 
                            className="post__option"
                            onClick={() => {
                                if(isSignedIn) {
                                    dispatch(addedToBookmarkedPost(user?.uid, post?.id));
                                    setBookmarkAddedSnackbar(true);
                                }
                            }}
                        >
                            <BookmarkBorderOutlined/>
                            <p>Bookmark</p>
                        </div>
                    )
                }
            </div>
        </div>
        <AlertSnackbar
            open={bookmarkAddedSnackbar}
            setOpen={setBookmarkAddedSnackbar}
            type="success"
            message="Post Added as Bookmark"
        />
        <AlertSnackbar
            open={bookmarkRemovedSnackbar}
            setOpen={setBookmarkRemovedSnackbar}
            type="error"
            message="Post Removed from Bookmark"
        />
    </div>
  )
}

export default Post