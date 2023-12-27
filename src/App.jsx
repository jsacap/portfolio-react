import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login"; 
import { Home } from "./components/Home";
import { Navigation } from './components/Navigation';
import Logout from './components/Logout';
import PostPage from './components/PostPage';
import PostsList from './components/PostList';
import SinglePostPage from './components/SinglePostPage.jsx';
import MarketBlog from './components/MarketBlog.jsx';
import './styles/styles.css';
import './interceptor/Axios.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="gradient__bg">
          <Navigation />
        </div>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<PostPage />} />  
          <Route path="/postlist" element={<PostsList />} /> 
          <Route path="/blog/article/:id" element={<SinglePostPage />} />
          <Route path="/edit-post/:id?" element={<PostPage isEditing />} />
          <Route path="/blog" element={<MarketBlog />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
