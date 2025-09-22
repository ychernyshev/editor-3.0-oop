import { AbstractButton } from "../abstract/AbstractButton.js";

export class MenuBarPanelButton extends AbstractButton {
    constructor(label) {
        super();
        this.label = label;
        this.container = document.getElementById("menuItemsContainer");
    }

    render() {
        const button = document.createElement("button");
        button.className = "btn bg-light border-0";
        button.innerText = this.label;
        this.setButton(button);
        this.container.appendChild(button);
    }
}