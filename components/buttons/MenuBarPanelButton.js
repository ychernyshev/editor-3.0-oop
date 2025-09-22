import { AbstractButton } from "../abstract/AbstractButton.js";

export class MenuBarPanelButton extends AbstractButton {
    constructor(label) {
        super();
        this.label = label;
        this.container = document.getElementById("menuBarContainer");
    }

    render() {
        const button = document.createElement("button");
        button.innerText = this.label;
        button.className = "bg-light p-1 border-0";
        this.setButton(button);
        this.container.appendChild(button);
    }
}