import { customElement, bindable } from "aurelia-framework";

@customElement("sortable")
export class Sortable {
  @bindable name: string = null;

  attached() {
  }
}