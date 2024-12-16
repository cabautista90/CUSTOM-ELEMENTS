# CUSTOM-ELEMENTS
Actividad 2

# Aplicación Web con Custom Elements y Shadow DOM

Este proyecto implementa Custom Elements con Shadow DOM,Templates,Slots. A continuacion vamos a detallar como funciona cada elemento.

# Estructura del Proyecto

La estructura de archivos del proyecto es la siguiente:

/components /

  custom-table.js 
  
  footer.js 
  
  gallery.js 
  
  header.js 
  
  main.js 
  
  menu.js 
  
  social-profile.js 
  
/data /

  user.json  
  
index.html 

styles.css


# Componentes

Cada componentes está implementado como un Custom Element con Shadow DOM que encapsula su estructura y estilo

# 1.CustomHeader (header.js)

es un encabezado de la página que muestra un título que utiliza Shadow DOM para encapsular su estructura y sus estilos.
Muestra el nombre o título de la aplicación.

// components/header/header.js
class CustomHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        h1 {
          color: #4CAF50;
          font-size: 2em;
          text-align: center;
        }
      </style>
      <h1>Mi Aplicación Web</h1>
    `;
    
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('custom-header', CustomHeader);


2. CustomFooter (footer.js)
muestra un pie de página con información de copyright.

// components/footer/footer.js
class CustomFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        footer {
          text-align: center;
          padding: 10px;
          background-color: #f1f1f1;
        }
      </style>
      <footer>© 2024 Mi Empresa</footer>
    `;
    
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('custom-footer', CustomFooter);


3. CustomMain (main.js)
es un contenedor principal que utiliza slots para mostrar contenido dinámico en diferentes secciones

<custom-main><div id="content"></div></custom-main>

// components/main/main.js
class CustomMain extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        main {
          padding: 20px;
          background-color: #fafafa;
        }
      </style>
      <main>
        <slot></slot>
      </main>
    `;
    
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('custom-main', CustomMain);

4. CustomMenu (menu.js)
es un menú de navegación que permite a los usuarios desplazarse entre las diferentes páginas de la aplicación


// components/menu/menu.js
class CustomMenu extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        nav {
          background-color: #333;
          padding: 10px;
        }
        a {
          color: white;
          margin: 0 15px;
          text-decoration: none;
        }
      </style>
      <nav>
        <a href="#home">Home</a>
        <a href="#social-profile">Perfil</a>
        <a href="#gallery">Galería</a>
        <a href="#custom-table">Tabla</a>
      </nav>
    `;
    
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('custom-menu', CustomMenu);

5. SocialProfile (social-profile.js)

muestra una página de perfil de usuario con datos estáticos.

// components/social-profile/social-profile.js
class SocialProfile extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .profile {
          text-align: center;
          padding: 20px;
        }
      </style>
      <div class="profile">
        <h2>Juan Pérez</h2>
        <p>Email: juan.perez@example.com</p>
        <p>Descripción: Desarrollador web apasionado por la tecnología.</p>
      </div>
    `;
    
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('social-profile', SocialProfile);

6. CustomTable (custom-table.js)
carga y muestra una tabla con datos de una API externa en este caso la API de usuarios de jsonplaceholder


// components/custom-table/custom-table.js
class CustomTable extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        let tableHTML = `
          <style>
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid black;
              padding: 8px;
              text-align: left;
            }
          </style>
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
        `;
        
        users.forEach(user => {
          tableHTML += `
            <tr>
              <td>${user.id}</td>
              <td>${user.name}</td>
              <td>${user.email}</td>
            </tr>
          `;
        });
        
        tableHTML += '</table>';
        this.shadowRoot.innerHTML = tableHTML;
      });
  }
}

customElements.define('custom-table', CustomTable);

7. CustomGallery (gallery.js)
carga y muestra una galería de imágenes obtenidas desde una API externa en este caso la API de Pokémon.

// components/gallery/gallery.js
class CustomGallery extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(data => {
        let galleryHTML = `
          <style>
            .gallery {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 10px;
            }
            .item img {
              width: 100%;
              border-radius: 8px;
            }
          </style>
          <div class="gallery">
        `;

        data.results.forEach(pokemon => {
          galleryHTML += `
            <div class="item">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png" alt="${pokemon.name}" />
              <p>${pokemon.name}</p>
            </div>
          `;
        });

        galleryHTML += '</div>';
        this.shadowRoot.innerHTML = galleryHTML;
      });
  }
}

customElements.define('custom-gallery', CustomGallery);

8. Cómo Ejecutar el Proyecto

Abre el archivo index.html en tu navegador:

La aplicación mostrara los diferentes componentes, como el encabezado, pie de página, perfil de usuario, tabla de datos
