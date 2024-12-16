class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          h1 {
            color: #333;
            font-size: 2rem;
          }
        </style>
        <header>
          <h1>Mi Aplicación Web</h1>
        </header>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('header-component', HeaderComponent);
  