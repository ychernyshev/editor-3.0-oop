import {AbstractUIPaneComponent} from "../abstract/AbstractUIPaneComponent.js";

export class MenuBar extends AbstractUIPaneComponent{
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