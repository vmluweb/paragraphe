const Paragraphe = () => {
  return (
    <section class="d-flex justify-content-between border p-3 mt-3">
      <h2>Créer un paragraphe</h2>
      <div>
        <button className="btn btn-success me-2">Valider</button>
        <button className="btn btn-warning me-2">Mettre à jour</button>
      </div>
    </section>
  );
};

export default Paragraphe;
