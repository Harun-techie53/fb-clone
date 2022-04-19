import './App.css';
import React, {useEffect} from "react";
import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen'; 
import BookmarkScreen from './screens/BookmarkScreen';
import { Routes, Route } from "react-router-dom";
import {fetchAllPosts} from "./actions/postAction";
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);
  return (
    <div className="App">
      <Header/>

      <div className="feed">
        <Routes>
          <Route path="/bookmark" element={<BookmarkScreen/>} />
          <Route path="/" element={<HomeScreen/>} />
        </Routes>
      </div>
      
      {/* //Footer  */}
    </div>
  );
}

export default App;
