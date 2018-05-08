import React from 'react';
import { Link } from 'react-router'

const NotFound = () => {
  return(
    <div className="box-view">
          <div className="boxed-view__box">
              <h1>Page not found</h1>
              <p>We're unable to find that page</p>
              <Link to="/" className="button button__link">HEAD HOME</Link>
          </div>
    </div>
  )
}

export default NotFound