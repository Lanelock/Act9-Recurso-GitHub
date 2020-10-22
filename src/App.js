import React, { useEffect } from "react";
import "./App.scss";
import {TweenMax} from "gsap"
import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Lilpeep from "./images/lilpeep.jpg";
function App() {
  useEffect(() => {
  TweenMax.to('#image2', 3, {rotationY:360, transformOrigin:"left top",delay: 10,
    repeat: -10,
    repeatDelay: 5,
    immediateRender:true})
    TweenMax.to('#image2', 3, {rotationY:360, transformOrigin:"left 50% -200",delay: 5,
    repeat: -5,
    repeatDelay: 5,
    immediateRender:true})
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/logros" component={Logros} />
                <Route exact path="/discografia" component={Discografia} />
                <Route exact path="/biografia" component={Biografia} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Logros() {
  return <p>En actualización</p>;
}

function Discografia() {
  return <p>En actualización</p>;
}

function Biografia() {
  return <p>En actualización</p>;
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
        <div className='Lilpeep-image' id="image2">
                <img src={Lilpeep} alt="Lilpeep"/>           
          <b>Gustav Elijah Åhr</b> (Allentown, Pensilvania, Estados Unidos; 1 de noviembre de 1996-Tucson, Arizona, Estados Unidos; 15 de noviembre de 2017), mejor conocido por su nombre artístico Lil Peep, fue un cantante, rapero, compositor, modelo, y productor musical estadounidense. Se hizo muy conocido por tener un fuerte estilo emocional en sus canciones.
          </div>
        </h5>
      </div>
    </div>
  );
}
export default App;