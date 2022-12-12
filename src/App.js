import "./App.css";
import React, { Component } from "react";
import Section from "./components/Section";
import FormAddSection from "./components/FormAddSection";
import FormEditSection from "./components/FormEditSection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          id: 1,
          title: "Titre 1",
          text: "Texte du paragraphe 1",
          text_visible: true,
        },
        {
          id: 2,
          title: "Titre 2",
          text: "Texte du paragraphe 2",
          text_visible: false,
        },
      ],
      // permet de faire apparaitre le formulaire de modifications
      form_update_is_visible: false,
      current_update_section: -1,
    };
  }
  handleClickTitle = (event, index) => {
    console.log(`Dans handleClickTitle`);
    const copy_state = { ...this.state };
    copy_state.sections[index].text_visible =
      !copy_state.sections[index].text_visible;
    // Modification du state
    this.setState(copy_state);
  };

  handleClickEditButton = (event, index) => {
    console.log(`Dans handleClickEditButton`);

    this.setState((previous_state) => ({
      form_update_is_visible: !previous_state.form_update_is_visible,
      current_update_section: index,
    }));
  };

  handleSubmitAddSection = (event, form_values) => {
    console.log(`Dans handleSubmitAddSection`);
    // Déclaration et affectation des variables title et text via le destructuring ou la "décomposition"
    const { title, text } = form_values;

    // Modification du state
    // Ici, on utilise setState avec la fonction de callback qui nous donne automatiquement une copie du state en premier paramètre
    this.setState((state, props) => {
      state.sections.push({
        id: state.sections.length + 1,
        title: title,
        text: text,
        text_visible: false,
      });
      return state;
    });
  };

  handleSubmitEditSection = (title, text) => {
    console.log(`Dans handleSubmitEditSection`);
    this.setState({
      sections: this.state.sections.map((section, i) => {
        // si je suis ds la section qui renvoie l'index du même btn modifié
        if (i === this.state.current_update_section) {
          section.title = title;
          section.text = text;
        }
        return section;
      }),
      form_update_is_visible: false,
      current_update_section: -1,
    });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="mt-4">Exercice des paragraphes {this.props.toto}</h1>
        <FormAddSection handleSubmitAddSection={this.handleSubmitAddSection} />
        Section à modifier :{this.state.current_update_section}
        {this.state.form_update_is_visible && (
          <FormEditSection
            section={this.state.sections[this.state.current_update_section]}
          />
        )}
        {/* Rendu des sections */}
        {this.state.sections.map((section, index) => (
          <Section
            key={section.id}
            section={section}
            handleClickTitle={this.handleClickTitle}
            handleClickEditButton={this.handleClickEditButton}
            index={index}
          />
        ))}
      </div>
    );
  }
}

export default App;
