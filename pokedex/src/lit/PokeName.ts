import { LitElement, html } from 'lit-element';


class PokeName extends LitElement {

  static get properties() {
    return {
      name: { type: String }
    };
  }


  render() {
    const vowels = ["A", "E", "I", "O", "U"];
    // @ts-ignore
    const name = this.name;
    return html`
      <h2>
        It's ${vowels.includes(name.charAt(0)) ? "an" : "a"} ${name}!
      </h2>
    `;
  }
}

customElements.define('poke-name', PokeName);

