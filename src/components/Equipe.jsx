import React from 'react'


const Equipe = ({joueurs, incrementerScore, supprimerJoueur}) => {
  return (
    <div>
      <p>Nombre de joueurs : {joueurs.length}</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOM</th>
            <th>SCORE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          { joueurs.map(joueur => 
          <tr key={joueur.id}>
            <td>{joueur.id}</td>
            <td>{joueur.nom}</td>
            <td>{joueur.score}</td>
            <td>
              <button onClick={() => incrementerScore(joueur.id)}>+1</button>
              <button onClick={() => supprimerJoueur(joueur.id)}>Supprimer</button>
            </td>
            
          </tr>
        )}
        </tbody>
      </table>

    </div>
  )
}

export default Equipe