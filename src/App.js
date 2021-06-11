import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react'
import NavBar from './NavBar'


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/article/:name" component={ArticlePage}  />
          <Route path="/articles-list" component={ArticlesListPage}  />
          <Route path="/about" component={AboutPage}  />
          <Route component={NotFoundPage}  />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
