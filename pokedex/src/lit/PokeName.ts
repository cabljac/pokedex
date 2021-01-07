import { LitElement, html } from 'lit-element';

class PokeName extends LitElement {



  static get properties() {
    return {
      name: { type: String }
    };
  }


  render() {
    const vowels = ["A", "E", "I", "O", "U"];

    return html`
      <h2>
        It's ${vowels.includes(this.name.charAt(0)) ? "an" : "a"} ${this.name}!
      </h2>
    `;
  }
}

customElements.define('poke-name', PokeName);

