class GalleryComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
          }
          .gallery img {
            width: 100%;
            border-radius: 8px;
          }
        </style>
        <div class="gallery" id="gallery"></div>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => response.json())
        .then(data => {
          const gallery = this.shadowRoot.querySelector('#gallery');
          data.results.forEach(pokemon => {
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`;
            const img = document.createElement('img');
            img.src = imageUrl;
            gallery.appendChild(img);
          });
        });
    }
  }
  
  customElements.define('gallery-component', GalleryComponent);
  