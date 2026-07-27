customElements.define('article-card',
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById('article-card-template');
      if (!template) {
        console.error('Template #article-card-template not found.');
        return;
      }

      const shadowRoot = this.attachShadow({ mode: 'open' });

      // Get image URL or fallback
      const imgUrl = this.getAttribute('img') || '../images/placeholder-green.png';

      // Style for background image
      const style = document.createElement('style');
      style.textContent = `
        .article-title {
          background-image: url(${imgUrl});
          background-size: cover;
          background-position: center;
        }
      `;

      // Attach style first, then template
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
);
