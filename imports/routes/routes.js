import {Meteor} from 'meteor/meteor'
import React from 'react';

import { Router, Route, browserHistory } from 'react-router'
import { Tracker } from'meteor/tracker'

import Signup from '../ui/Signup';
import Dashbord from '../ui/Dashbord';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';



const unauthenticatedPages = ['/','/signup']
const authenticatedPages = ['/dashbord']

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/dashbord')    
  }
}

const onEnterPrivatePage = () => {
  if (!Meteor.userId()){
    browserHistory.replace('/')
  }
}

export const routes = (
  <Router history={browserHistory} >
      <Route path="/" component={Login} onEnter={onEnterPublicPage} />
      <Route path="/signup" component={Signup} onEnter={onEnterPublicPage} />
      <Route path="/dashbord" component={Dashbord} onEnter={onEnterPrivatePage}/>
      <Route path="*" component={NotFound} />      
  </Router>
)

export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  
  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/dashbord')
  } else if (isAuthenticatedPage && !isAuthenticated){
    browserHistory.replace('/')
  }
}


