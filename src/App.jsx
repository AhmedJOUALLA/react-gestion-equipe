import { useState } from "react";
import "./App.css";
import Equipe from "./components/Equipe";
import Addjoueur from "./components/Addjoueur";

function App() {
  const [joueurs, setJoueurs] = useState([
    { id: 1, nom: "Yassine", score: 10 },
    { id: 2, nom: "Sara", score: 20 },
    { id: 3, nom: "Amine", score: 15 },
  ]);
  const incrementerScore = (id) => {
    const nouvelleListe = joueurs.map((joueur) =>
      joueur.id === id ? { ...joueur, score: joueur.score + 1 } : joueur,
    );
    setJoueurs(nouvelleListe);
  };

  const supprimerJoueur = (id) => {
    //  const nouvelleListe = joueurs.filter(joueur => joueur.id !== id)

    // setJoueurs(nouvelleListe);

    setJoueurs((prev) => prev.filter((joueur) => joueur.id !== id));
  };
  const ajouterJoueur = (nouveauJoueur) => {
    if (joueurs.find((j) => j.id === nouveauJoueur.id)) {
      alert("Cet ID existe Deja");
      return;
    }
    setJoueurs([...joueurs, nouveauJoueur]);
  };
  console.log(joueurs)

  return (
    <>
      <Equipe
        joueurs={joueurs}
        incrementerScore={incrementerScore}
        supprimerJoueur={supprimerJoueur}
      />
      <Addjoueur ajouterJoueur={ajouterJoueur} />
    </>
  );
}

export default App;
