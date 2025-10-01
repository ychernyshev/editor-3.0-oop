import {AbstractUIPaneComponent} from "./abstract/menu-bar/AbstractUIPaneComponent.js";

export class TextArea extends AbstractUIPaneComponent {
    constructor() {
        super("textAreaContainer");
    }

    renderTextAreaContainer() {
        this.container.className = "container";

        const row = document.createElement("div");
        row.className = "row justify-content-center";

        const col = document.createElement("div");
        col.className = "col-9 mt-4";

        const editableDiv = document.createElement("div");
        editableDiv.setAttribute("contenteditable", "true");
        editableDiv.id = "textArea";
        editableDiv.className = "border rounded bg-light";
        editableDiv.style.display = "flex";
        editableDiv.style.flexDirection = "column";
        editableDiv.style.padding = "1rem";
        editableDiv.style.outline = "none";
        editableDiv.style.height = "90vh";
        editableDiv.style.wordWrap = "break-word";
        editableDiv.style.overflowWrap = "break-word";
        editableDiv.style.whiteSpace = "pre-wrap";


        col.appendChild(editableDiv);
        row.appendChild(col);
        this.container.appendChild(row);
    }
}