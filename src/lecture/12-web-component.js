// 웹 컴포넌트 API (웹 표준)
// globalThis.customElements.define('custom-element', CustomComponent)
// <slot></slot>
// <custom-element></custom-element>

// <custom-element>
//   <h2>headline</h2>
//   <span>span element</span>
// </custom-element>

// 슬롯(Slot)

if ('customElements' in globalThis) {
  customElements.define(
    'euid-stack',
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
              <div class="euid-stack">
                  <h2>
                      <slot name="headline"></slot>
                  </h2>
                  <p>
                      <slot name="description"></slot>
                  </p>
              </div>
          `;
      }
    }
  );
}
