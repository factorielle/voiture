

function Voiture({voiture}){
    
    return (
      <tr>
        <td>{voiture.marque}</td>
        <td>{voiture.couleur}</td>
        <td>{voiture.annee}</td>

      </tr>
    )
}
export default Voiture;