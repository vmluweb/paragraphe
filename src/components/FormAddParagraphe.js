const FormAddParagraphe = (props) => {
  return (
    <form className="my-5 d-flex justify-content-start align-items-center gap-4">
      <label className="form-label" htmlFor="paragraphe">Titre</label>
      <input className="form-control" type="text" id="paragraphe"></input>
      <label className="form-label" htmlFor="paragraphe">Texte</label>
      <textarea></textarea>
      <input
        className="form-control btn btn-danger w-25"
        type="submit"
        value="Ajouter"
      />
    </form>
  );
};

export default FormAddParagraphe;