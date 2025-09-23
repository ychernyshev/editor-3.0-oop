import {AbstractUIPaneComponent} from "./abstract/menu-bar/AbstractUIPaneComponent.js";

export class TextArea extends AbstractUIPaneComponent{
    constructor() {
        super("textAreaContainer");
    }

    renderTextAreaContainer() {
        this.container.className = "container";

        const row = document.createElement("div");
        row.className = "row justify-content-center";

        const col = document.createElement("div");
        col.className = "col-9 mt-4";

        const textarea = document.createElement("textarea");
        textarea.className = "border rounded bg-light w-100";
        textarea.style.padding = "1rem";
        textarea.style.outline = "none";
        textarea.style.height = "90vh";
        textarea.setAttribute("contenteditable", "true");
        // textarea.setAttribute("rows", "30");

        col.appendChild(textarea);
        row.appendChild(col);
        this.container.appendChild(row);
    }
}