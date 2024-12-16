class MainComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          main {
            padding: 2rem;
            background: #f4f4f4;
          }
        </style>
        <main>
          <slot></slot>
        </main>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('main-component', MainComponent);
  