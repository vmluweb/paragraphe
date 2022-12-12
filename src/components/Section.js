const Section = (props) => {
  //   const title = props.section.title;
  //   const text_visible = props.section.text_visible;
  //   const text = props.section.text;

  //   destructing section

  const { title, text_visible, text } = props.section;

  return (
    <section className="border p-3 my-3">
      <div className="d-flex gap-5 my-4 justify-content-between">
        <h2
          onClick={(event) => {
            props.handleClickTitle(event, props.index);
          }}
          role="button"
        >
          {title}
        </h2>
        <button
          onClick={(event) => {
            // Appel du gestionnaire d'événement qui a pour but d'afficher un
            props.handleClickEditButton(props.index);
          }}
          className="btn btn-warning"
        >
          Modifier
        </button>
      </div>
      {text_visible && <p>{text}</p>}
    </section>
  );
};

export default Section;
