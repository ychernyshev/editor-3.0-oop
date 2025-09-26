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

        this.button.className = "nav-link";
        this.setAttributes({
            "id": this.id,
            "innerText": this.name,
            "data-bs-toggle": "tab",
            "data-bs-target": "#" + this.id + "-pane",
            "type": "button",
            "role": "tab",
            "aria-controls": this.id + "-pane",
            "aria-selected": "true",
        })

        buttonListItem.appendChild(this.button)
        this.container.appendChild(buttonListItem);
    }
}