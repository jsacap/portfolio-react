import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ContactPage from './components/ContactPage.jsx';
import Login from "./components/Login";
import Logout from './components/Logout';
import MarketBlog from './components/MarketBlog.jsx';
import ArticlePage from './components/MarketBlogArticlePage.jsx';
import { Navigation } from './components/Navigation';
import PostsList from './components/PostList';
import PostPage from './components/PostPage';
import SandBox from './components/SandBox.jsx';
import SinglePostPage from './components/SinglePostPage.jsx';
import './interceptor/Axios.jsx';
import Home from './pages/home/Home.jsx';
import './styles/styles.css';


import { ChakraProvider } from '@chakra-ui/react';
import ComposeNewsletter from './components/Newsletter/ComposeNewsletter.jsx';
import Subscribers from './components/Newsletter/Subscribers.jsx';
import Subscriptions from './components/Newsletter/Subscriptions.jsx';
import TagsPage from './components/Tags/TagPage.jsx';

function App() {
  const [isLoggedin, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    AOS.init()
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
          <Route path="/projects" element={<PostsList />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<PostPage />} />  
          <Route path="/postlist" element={<PostsList />} /> 
          <Route path="/blog/article/:id" element={<SinglePostPage />} />
          <Route path="/edit-post/:id?" element={<PostPage isEditing />} />
          <Route path="/marketblog/article/:id" element={<ArticlePage />} />
          <Route path="/marketblog" element={<MarketBlog />} />
          <Route path="/test" element={<SandBox />} />
          <Route path="/tags" element={<TagsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/composenewsletter" element={<ComposeNewsletter />} />

        </Routes>
      </div>
        </ChakraProvider>
    </Router>
  );
}

export default App;
