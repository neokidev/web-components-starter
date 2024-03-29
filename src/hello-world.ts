import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('hello-world')
export class HelloWorld extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `

  @property()
  name = 'World'

  @property({ type: Number })
  count = 0

  override render() {
    return html`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `
  }

  private _onClick() {
    this.count++
    this.dispatchEvent(new CustomEvent('count-changed'))
  }

  sayHello(name: string): string {
    return `Hello, ${name}`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hello-world': HelloWorld
  }
}
