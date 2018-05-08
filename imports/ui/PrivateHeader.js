import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import PropTypes from 'prop-types';



const PrivateHeader = (props) => {
    const logout = () =>{
        Accounts.logout()        
    }
    return (
        <div className="private-header">
          <div className="private-header__content">
            <h1 className="private-header__title">{props.title}</h1>
            <button className="button button_link-text"  onClick={logout}>Logout</button>
          </div>          
        </div>
    )
}


  PrivateHeader.propTypes = {
    title: PropTypes.string
  };

export default PrivateHeader