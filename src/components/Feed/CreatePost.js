import React, {useState, useRef} from 'react'
import { Avatar } from "@mui/material";
import { PhotoLibrary, Mood } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { addToPost } from '../../actions/postAction';
import "./CreatePost.css";

const CreatePost = () => {
    const dispatch = useDispatch();
    const imageInputRef = useRef();
    const [image, setImage] = useState(null);
    const [text, setText] = useState("");
    const auth = useSelector(state => state.auth);
    const isSignedIn = auth.isSignedIn;
    const user = auth.user ? auth.user : null;
    const userInfo = auth.userInfo ? auth.userInfo : null;

    const handlePostSubmit = (e) => {
        e.preventDefault();

        if(userInfo === null) dispatch(addToPost(text, user));

        if(isSignedIn) dispatch(addToPost(text, userInfo));

        setText("");
    }
  return (
    <div className="createPost">
        <div className="createPost__top">
            <Avatar src={user?.photoURL ?? ""}/>
            <form
                onSubmit={handlePostSubmit}
            >
                <input
                    placeholder={`What's on your mind, ${user?.displayName ? user?.displayName : userInfo?.fullName}?`}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input 
                    type="file" 
                    onChange={ (e) => setImage(e.target.files[0]) } 
                    style={{ display: "none" }}
                    ref={imageInputRef}
                    accept="image/*"
                />
                <button
                    hidden
                    type="submit"
                />
            </form>
        </div>
        <div className="createPost__bottom">
            <div 
                className="createPost__option"
                onClick={() => imageInputRef.current.click()}
            >
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