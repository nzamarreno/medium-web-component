import ReactDOM from "react-dom/client";
import { ISubscriptionProps, Subscription } from "./components/Subscription";
import { normalizeAttribute } from "./utils";

class SubscriptionWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes<ISubscriptionProps>();
    const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
    root.render(<Subscription {...props} />);
  }

  private getPropsFromAttributes<T>(): T {
    const props: Record<string, string> = {};

    for (let index = 0; index < this.attributes.length; index++) {
      const attribute = this.attributes[index];
      props[normalizeAttribute(attribute.name)] = attribute.value;
    }

    return props as T;
  }
}

export default SubscriptionWebComponent;
