import React, { Component } from 'react';
import me from './me_tiny.jpeg';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';  // eslint-disable-line no-unused-vars
import './App.css';


const Footer = () => (
  <footer>
    <div className="row text-center">
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
  </footer>
)




class App extends Component {

  render() {

    const SwissFlag = ({size}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32"><rect fill="#f00" height="32" width="32"/><rect fill="#fff" height="6" width="20" x="6" y="13"/><rect fill="#fff" height="20" width="6" x="13" y="6"/></svg>);

    return (

      <div>
      <div className="container home text-center content">

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
              My name is <b>MG Santos</b>. I'm a Full-Stack Developer based in Switzerland <SwissFlag size={15}/>. I like to build stuff, take a look: <a href="http://blenditt.com">BlendItt</a>, <a href="https://psstcard.com">PsstCard</a> and  <a href="https://8config.com">8config</a>.
            </p>
          </div>
        </div>


        <br/>
        <br/>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3  text">
            Looking for help, <a href="mailto:mauro.goncalo@gmail.com">how can I help you?</a>
          </div>
        </div>

        <br/>
        <br/>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <ul className="list-inline">
              <li>#nodejs</li>
              <li>#javascript</li>
              <li>#python</li>
              <li>#php</li>
              <li>#phalcon</li>
              <li>#wordpress</li>
              <li>#laravel</li>
              <li>#react</li>
              <li>#redux</li>
              <li>#scrapping</li>
              <li>#bots</li>
            </ul>
          </div>
        </div>

        <br/>
        <br/>


      </div>

      <div className="container-fluid Footer">
        <div className="container">
          <Footer/>
        </div>
      </div>
      </div>

    );
  }
}

export default App;
