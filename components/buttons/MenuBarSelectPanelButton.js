import { AbstractButton } from "../abstract/AbstractButton.js";

export class MenuBarSelectPanelButton extends AbstractButton {
    constructor(name, id) {
        super();
        this.name = name;
        this.id = id;
    }

    render() {
        const buttonListItem = document.createElement("li");
        buttonListItem.className = "nav-item";
        buttonListItem.setAttribute("role", "presentation");

        this.container = document.getElementById("MyTabList");

        const button = document.createElement("button");
        button.className = "nav-link";
        button.id = this.id;
        button.innerText = this.name;
        button.setAttribute("data-bs-toggle", "tab");
        button.setAttribute("data-bs-target", "#" + this.id + "-pane");
        button.setAttribute("type", "button");
        button.setAttribute("role", "tab");
        button.setAttribute("aria-controls", this.id + "-pane");
        button.setAttribute("aria-selected", "true");

        this.setButton(button);
        buttonListItem.appendChild(button)
        this.container.appendChild(buttonListItem);
    }
}