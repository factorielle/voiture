import React, { Component } from 'react';
import Voiture from './voiture';

class MesVoiture extends Component {
    constructor(props){
        super(props)
       this.state=[ {
        marque:'BMW',
        couleur:'Noir',
        annee:'2022',
        },
        {
        marque:'Mercedes',
        couleur:'Blanc',
        annee:'2020',
        },
        {
        marque:'Ferrari',
        couleur:'Rouge',
        annee:'2002',
        },] 
    }
    render() {
      return   <div>
      <h2>Liste de Mes Voitures</h2>
      <table>
        <thead>
          <tr>
            <th>Marque</th>
            <th>Couleur</th>
            <th>Année</th>
          </tr>
        </thead>
        <tbody>
          {this.state.map((voiture, index) => (
            <Voiture  voiture={voiture} />
          ))}
        </tbody>
      </table>
    </div>;
    }
  }

  export default MesVoiture;