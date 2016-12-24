import React, { Component } from 'react';
import logo from './logo.svg';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {

  // <div className="row">
  //   <div className="col-xs-12 col-sm-6 col-sm-offset-3 ">
  //     <span className="btn btn-md btn-primary btn-outline">Get in touch</span>
  //   </div>
  // </div>

  // <br/>
  // <br/>

  render() {
    return (
      <div className="container home text-center">

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3 ">
            <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.428 6c6.018 0 8.414 10 13.143 10 2.115 0 3.48-1.578 3.48-4s-1.365-4-3.48-4c-1.664 0-2.86 1.07-4.016 2.395L13.31 8.833C14.81 7.3 16.36 6 18.57 6 21.768 6 24 8.455 24 12s-2.232 6-5.43 6C12.567 18 10.164 8 5.428 8c-2.113 0-3.48 1.578-3.48 4s1.366 4 3.48 4c1.664 0 2.86-1.068 4.015-2.392l1.244 1.56C9.187 16.7 7.637 18 5.427 18 2.232 18 0 15.545 0 12s2.23-6 5.428-6z"/></svg>
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3 ">
            <h1>
              HELLO!
            </h1>
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3  text">
            <p>
              My name is <b>Mauro G. Santos</b>, Full-Stack PHP/Nodejs Developer. I like to build stuff on the side, which is why I'm currently working on <a href="http://blenditt.com">BlendItt</a> and <a href="https://psstcard.com">PsstCard</a>.
            </p>
            <p><u>I'm currently looking for my next job.</u></p>
          </div>
        </div>

        <br/>
        <br/>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <ul className="list-inline">
              <li><a href="mailto:mauro.goncalo@gmail.com">mauro.goncalo@gmail.com</a></li>
              <li className="sep">▪︎</li>
              <li><a href="https://github.com/mintyPT">Github</a></li>
              <li className="sep">▪︎</li>
              <li><a href="https://twitter.com/mauro_goncalo">Twitter</a></li>
            </ul>
          </div>



        </div>




      </div>
    );
  }
}

export default App;
