import { Component } from "react";
import {Button, Select} from "semantic-ui-react";
import './Recherche.css';
class Recherche extends Component {
   state = { coin: "", currency: ""}
   onChangeCoin = (e, data) => {this.setState({coin:data.value})}
   onChangeCurrency = (e, data) => {this.setState({coin:data.value})}

   render(){
      console.log(this.state.coin, this.state.currency);
      const monnaieDepart = [
         { value: "firebot", key: "firebot", text:"FireBot"}
      ];


      const vsCurrency = [
         { value: "hkd", key:"hkd", text: "Hong Kong Dollar"},
         { value: "jpy", key:"jpy", text: "Japanese Yen"},
         { value: "eth", key:"eth", text: "Ethereum"}
      ]


      return(
         <div className="recherche">
            <Select placeholder="Choisissez une monnaie de départ" options={monnaieDepart}  />
            <Select placeholder="Convertir en ?"  options={vsCurrency}  />
            <Button primary> Convertir la monnaie </Button>
            <Button secondary> Vider </Button>

         </div>
      )
   }
}
export default Recherche;
