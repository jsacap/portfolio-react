import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login"; 
import { Home } from "./components/Home";
import { Navigation } from './components/Navigation';
import Logout from './components/Logout';
import PostPage from './components/PostPage';
import PostsList from './components/PostList';
import SinglePostPage from './components/SinglePostPage.jsx';
import MarketBlog from './components/MarketBlog.jsx';
import ArticlePage from './components/MarketBlogArticlePage.jsx';
import './styles/styles.css';
import './interceptor/Axios.jsx';
import SandBox from './components/SandBox.jsx';
import ContactPage from './components/ContactPage.jsx';

import TagsPage from './components/Tags/TagPage.jsx';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [isLoggedin, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    setIsLoggedIn(!!accessToken);
  }, []);
  return (
    <Router>
      <ChakraProvider>
      <div className="App">
        <div className="gradient__bg" color='white'>
          <Navigation />
        </div>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<PostPage />} />  
          <Route path="/postlist" element={<PostsList />} /> 
          <Route path="/blog/article/:id" element={<SinglePostPage />} />
          <Route path="/edit-post/:id?" element={<PostPage isEditing />} />
          <Route path="/marketblog/article/:id" element={<ArticlePage />} />
          <Route path="/marketblog" element={<MarketBlog />} />
          <Route path="/test" element={<SandBox />} />
          <Route path="/tags" element={<TagsPage />} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
      </div>
        </ChakraProvider>
    </Router>
  );
}

export default App;
