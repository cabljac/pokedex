import { LitElement, html } from 'lit-element';


class PokeName extends LitElement {

  vowels: string[] = ["A", "E", "I", "O", "U"];
  name: string;

  static get properties() {
    return {
      name: { type: String }
    };
  }

  constructor(nameInput: string) {
    super()
    this.name = "pokemon name"
  }

  render() {
    return html`
      <h2>
        It's ${this.vowels.includes(this.name.charAt(0)) ? "an" : "a"} ${this.name}!
      </h2>
    `;
  }
}

customElements.define('poke-name', PokeName);

