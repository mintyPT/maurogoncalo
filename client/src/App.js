import React, { Component } from 'react';
import me from './me_tiny.jpeg';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';  // eslint-disable-line no-unused-vars
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
            <img src={me} className="me" alt="Mauro Santos"/>
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
              <li><a href="mailto:mauro.goncalo@gmail.com">Say Hi</a></li>
              <li className="sep">▪︎</li>
              <li><a href="https://github.com/mintyPT">Github</a></li>
              <li className="sep">▪︎</li>
              <li><a href="https://twitter.com/mauro_goncalo">Twitter</a></li>
              <li className="sep">▪︎</li>
              <li><a href="https://medium.com/@mauro_goncalo">Medium</a></li>
            </ul>
          </div>



        </div>




      </div>
    );
  }
}

export default App;
