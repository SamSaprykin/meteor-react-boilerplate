import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Router, Route, browserHistory } from 'react-router'

export default class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error:""
        };
        
    }

    onSubmit(e){
      e.preventDefault();

      let email = this.refs.email.value.trim()
      let password = this.refs.password.value.trim()

      if ( password.length<5) {
        return this.setState({error:"password must me more than 5 characters long"})
      }
      
      Accounts.createUser({email,password}, (err)=>{
          if ( err) {
            this.setState({error:err.reason})          
        } else {
          this.setState({error: ''})
          browserHistory.replace('/dashbord')
        }
      })
    }
 

    render() {
      return(
        <div className="box-view">
          <div className="boxed-view__box">
            <h1>Join</h1>
            { this.state.error ? <p>{this.state.error}</p> : undefined }
            <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
                <input type="email" ref="email" name="email" placeholder="Email" />
                <input type="password" ref="password" name="password" placeholder="Password" />
                <button className="button">Create new account</button>
            </form>
            <Link to="/">Already have an account?</Link>
          </div>
        </div>
      )
    }
  }