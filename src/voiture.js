let count=0;
function afficherAge(){
  count++;
  console.log(count)
}

function Voiture({marque, couleur, annee, age }){
 
    return (
      <tr>
        <td>{marque}</td>
        <td>{couleur}</td>
        <td>{annee}</td>
        <td>{}</td>
        <td><button onClick={afficherAge()}>Afficher age</button></td>

      </tr>
    )
}
export default Voiture;