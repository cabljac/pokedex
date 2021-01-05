import { LitElement, html } from 'lit-element';

class PokeName extends LitElement {

  static get properties() {
    return {
      name: { type: String }
    };
  }
  render(){
    return html`
      <h2>
        It's ${this.name}!
      </h2>
    `;
  }
}

customElements.define('poke-name', PokeName);

