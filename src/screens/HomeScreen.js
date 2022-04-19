import React from 'react'
import CreatePost from "../components/Feed/CreatePost"
import Post from "../components/Feed/Post"
import { useSelector } from 'react-redux'

const HomeScreen = () => {
  const posts = useSelector(state => state.post.allPosts);
  
  return (
    <>
        <CreatePost />
        {
          posts?.length > 0 &&
          posts?.map((post) => (
            <Post
              key={post?.id}
              post={post?? null}
            />
          ))
        }
    </>
  )
}

export default HomeScreen