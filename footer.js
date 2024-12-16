class FooterComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          footer {
            text-align: center;
            padding: 1rem;
            background: #333;
            color: white;
          }
        </style>
        <footer>
          <p>&copy; 2024 Mi Aplicación Web</p>
        </footer>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('footer-component', FooterComponent);
  