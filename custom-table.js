class CustomTableComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            padding: 0.8rem;
            border: 1px solid #ddd;
          }
        </style>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Ciudad</th>
            </tr>
          </thead>
          <tbody id="table-body"></tbody>
        </table>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          const tableBody = this.shadowRoot.querySelector('#table-body');
          data.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>${user.address.city}</td>
            `;
            tableBody.appendChild(row);
          });
        });
    }
  }
  
  customElements.define('custom-table-component', CustomTableComponent);
  