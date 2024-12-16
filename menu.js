class MenuComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          nav {
            background-color: #333;
            padding: 1rem;
          }
          a {
            color: white;
            margin-right: 1rem;
            text-decoration: none;
          }
        </style>
        <nav>
          <a href="#home">Home</a>
          <a href="#profile">Profile</a>
          <a href="#gallery">Gallery</a>
          <a href="#table">Table</a>
        </nav>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('menu-component', MenuComponent);
  