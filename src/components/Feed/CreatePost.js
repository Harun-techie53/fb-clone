import React from 'react'
import { Avatar } from "@mui/material";
import { PhotoLibrary, Mood } from '@mui/icons-material';
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div className="createPost">
        <div className="createPost__top">
            <Avatar/>
            <form>
                <input
                    placeholder={`What's on your mind?`}
                />
                <button
                    hidden
                    type="submit"
                />
            </form>
        </div>
        <div className="createPost__bottom">
            <div className="createPost__option">
                <PhotoLibrary 
                    fontSize='large'
                    style={{
                        color: "green"
                    }}
                />
                <h4>
                    Photo/Video
                </h4>
            </div>
            <div className="createPost__option">
                <Mood 
                    fontSize='large'
                    style={{
                        color: "orange"
                    }}
                />
                <h4>
                    Feeling/Activity
                </h4>
            </div>
        </div>
    </div>
  )
}

export default CreatePost