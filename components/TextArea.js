import {AbstractUIPaneComponent} from "./abstract/menu-bar/AbstractUIPaneComponent.js";

export class TextArea extends AbstractUIPaneComponent{
    constructor() {
        super("textAreaContainer");
    }

    renderTextAreaContainer() {
        const containerBody = document.createElement("div");
        containerBody.className = "col-12";

        this.container.appendChild(containerBody);
    }
}