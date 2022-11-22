import './App.css';
import Recherche from "./Composants/Recherche";
import {Component} from "react";

class App extends Component {
state = {data: {}, error: ''}

   onCalculer = (a, b) => {
      console.log(a, b)
   }
   render() {
      return (
         <div className="App">
            <h1>Formatif 06</h1>
            <Recherche onCalculer = {this.onCalculer}/>
         </div>
      );
   }
}

export default App;
