import React, { Component } from 'react';
import Voiture from './voiture';
import Header from './header';

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
    getAge(anneeVoiture) {
      const anneeActuelle=new Date().getFullYear();
      return anneeActuelle-anneeVoiture

    }
    render() {
      return   <>
     <Header/>
      <table>
        <thead>
          <tr>
            <th>Marque</th>
            <th>Couleur</th>
            <th>Année</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.map(({marque, couleur,annee}, index) => (
            <Voiture  marque={marque} couleur={couleur} annee={annee} age={this.getAge(annee)} />
          ))}
        </tbody>
      </table>
    </>;
    }
  }

  export default MesVoiture;