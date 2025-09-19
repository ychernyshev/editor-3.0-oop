import {UIPaneComponent} from "./UIPaneComponent.js";

export class TextArea extends UIPaneComponent{
    constructor() {
        super("textAreaContainer");
    }

    renderTextAreaContainer() {
        const containerBody = document.createElement("div");
        containerBody.className = "col-12";

        this.container.appendChild(containerBody);
    }
}