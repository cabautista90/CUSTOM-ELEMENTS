class SocialProfileComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          .profile {
            padding: 2rem;
            background: #eaeaea;
          }
        </style>
        <div class="profile">
          <h2>Perfil de Usuario</h2>
          <p>Nombre: John Doe</p>
          <p>Email: john.doe@example.com</p>
          <p>Bio: Desarrollador Web</p>
        </div>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('social-profile-component', SocialProfileComponent);
  