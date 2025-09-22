import { AbstractButton } from "../abstract/AbstractButton.js";

export class MenuBarPanelButton extends AbstractButton {
    constructor(containerID, labels, ButtonClass) {
        super();
        this.container = document.getElementById(containerID);
        this.labels = labels;
        this.ButtonClass = ButtonClass;
        this.buttons = [];
    }

    render() {
        this.labels.forEach(label => {
            const button = new this.ButtonClass(label, this.container);
            button.render();
            this.buttons.push(button);
        })
        // const button = document.createElement("button");
        // button.innerText = this.label;
        // button.className = "bg-light p-1 border-0";
        // this.setButton(button);
        // this.menuBarContainer.appendChild(button);
    }
}