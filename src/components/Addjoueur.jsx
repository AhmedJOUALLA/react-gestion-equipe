import React, { useState } from "react";

const Addjoueur = ({ajouterJoueur}) => {
  const [info, setInfo] = useState({ id: 0, nom: "", score: 0 });

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]:
        e.target.name === "nom" ? e.target.value : Number(e.target.value),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.nom.trim() === "") return;
    ajouterJoueur(info);
    setJoueur({ id: 0, nom: "", score: 0 });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Ajouter un Joueur</h2>
        <label>ID</label>
        <input
          type="number"
          name="id"
          value={info.id}
          onChange={handleChange}
        />

        <label>NOM</label>
        <input
          type="text"
          name="nom"
          value={info.nom}
          placeholder="Ex: JOUALLA"
          onChange={handleChange}
        />

        <label>SCORE</label>
        <input
          type="number"
          name="score"
          value={info.score}
          onChange={handleChange}
        />

        <button type="submit">Ajouter le joueur</button>
      </form>
    </div>
  );
};

export default Addjoueur;
