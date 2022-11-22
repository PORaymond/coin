import './App.css';
import Recherche from "./Composants/Recherche";
import {Component} from "react";

class App extends Component {
state = {data: 0, error: ''}

   onCalculer = async (a, b) => {
      if (a&&b){
         try {

            let reponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids='+ a +'&vs_currencies='+b);
            let donnee = await reponse.json();
            console.log (a);
            console.log (b);
            console.log(donnee[a][b])
            this.setState({data:donnee[a][b]});
            console.log( this.state.data);

         } catch (e ){
            console.log("Erreur de connexion")
         }
      }
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
