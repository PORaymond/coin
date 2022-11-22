import { Component } from "react";
import {Button, Select} from "semantic-ui-react";
import './Recherche.css';
class Recherche extends Component {
   state = { coin: "", currency: ""}
   onChangeCoin = (e, data) => {this.setState({coin:data.value})}
   onChangeCurrency = (e, data) => {this.setState({currency:data.value})}

   render(){
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
            <Select onChange={this.onChangeCoin} placeholder="Choisissez une monnaie de départ" options={monnaieDepart}  />
            <Select onChange={this.onChangeCurrency} placeholder="Convertir en ?"  options={vsCurrency}  />
            <Button primary onClick={()=>this.props.onCalculer(this.state.coin, this.state.currency)}> Convertir la monnaie </Button>
            <Button secondary> Vider </Button>

         </div>
      )
   }
}
export default Recherche;
