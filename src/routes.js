import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import AddVideo from './pages/Add/Video';
import AddCategory from './pages/Add/Category';
import Error_404 from './pages/Error/404';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/add/video" exact component={AddVideo}/>
        <Route path="/add/category" exact component={AddCategory}/>
        <Route component={Error_404}/>
      </Switch>
    </BrowserRouter>
  )
}