export class TextArea {
    constructor() {
        this.textAreaContainer = document.getElementById("textAreaContainer");
    }

    renderTextAreaContainer() {
        const container = document.createElement("div");
        container.className = "col-12";

        this.textAreaContainer.appendChild(container);
    }
}