import {UIPaneComponent} from "./UIPaneComponent.js";

export class MenuBar extends UIPaneComponent{
    constructor() {
        super("menuBarContainer");
    }

    renderMenuBarContainer() {
        const containerBody = document.createElement("div");
        containerBody.className = "col-12";
        containerBody.innerHTML = "<h6>Editor 3 OOP</h6>"

        this.container.appendChild(containerBody);
    }
}