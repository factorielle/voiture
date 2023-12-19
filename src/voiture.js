
import React, { useState } from 'react';

function Voiture({marque, couleur, annee, age }){
 
  const [showAge, setShowAge] = useState(false);

  let count=0;
  const afficherAge = () => {
    count++;
    if(count%2===0){
      setShowAge(true);
    }else{
      setShowAge(false)
    }
    console.log(count)
    
  }
    return (
      <tr>
        <td>{marque}</td>
        <td>{couleur}</td>
        <td>{annee}</td>
        <td>{showAge && age }</td>
        <td><button onClick={afficherAge}>Afficher age</button></td>

      </tr>
    )
}

export default Voiture;