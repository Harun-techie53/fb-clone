import './App.css';
import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen'; 
import BookmarkScreen from './screens/BookmarkScreen';
import { Routes, Route } from "react-router-dom";

function App() {
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
