const FormEditSection = (props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.handleSubmitEditSection(event);
        const title = event.target.querySelector("#title_edit").value;
        const text = event.target.querySelector("#text_edit").value;
        props.handleSubmitEditSection(event, title, text);
      }}
      className="my-5 d-flex gap-3"
    >
      <label htmlFor="title" name="title" value={props.title}>
        Titre
      </label>
      <input type="text" id="title_edit" />
      <label htmlFor="text">Texte</label>
      <input type="text" id="text_edit" name="text" value={props.text} />
      <input type="submit" defaultValue="Ajouter une section" />
    </form>
  );
};

export default FormEditSection;
