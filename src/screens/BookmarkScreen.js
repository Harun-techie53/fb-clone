import React, {useState} from 'react';
import Post from "../components/Feed/Post";
import { useSelector } from 'react-redux'
import AlertSnackbar from '../utils';

const BookmarkScreen = () => {
  const [removeSnackbar, setRemoveSnackbar] = useState(false);
  const auth = useSelector(state => state.auth);
  const user = auth.user ? auth.user : null;
  const posts = useSelector(state => state.post.allPosts);

  const bookmarkPosts = posts?.filter((post) => post.data?.bookmarks?.includes(user?.uid));

  return (
    <>
      {
        bookmarkPosts?.length > 0 &&
        bookmarkPosts?.map((post) => (
          <Post
            key={post?.id}
            post={post?? null}
            removeSnackbar={removeSnackbar}
          />
        ))
      }
      <AlertSnackbar
        open={removeSnackbar}
        setOpen={setRemoveSnackbar}
        type="error"
        message="Post Remove from Bookmark"
      />
    </>
  )
}

export default BookmarkScreen