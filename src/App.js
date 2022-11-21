import './App.css';
import Recherche from "./Composants/Recherche";
import {Component} from "react";

class App extends Component {
state = {}
   render() {
      return (
         <div className="App">
            <h1>Formatif 06</h1>
            <Recherche/>
         </div>
      );
   }
}

export default App;
