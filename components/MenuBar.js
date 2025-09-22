import {AbstractUIPaneComponent} from "./abstract/AbstractUIPaneComponent.js";

export class MenuBar extends AbstractUIPaneComponent{
    constructor() {
        super("menuBarContainer");
    }

    renderMenuBarContainer() {
        const containerBody = document.createElement("div");
        containerBody.style.height = "2rem";
        containerBody.className = "col-1 bg-light text-center p-1";
        containerBody.innerHTML = "<h6 class=''>Editor 3 OOP</h6>"

        this.container.appendChild(containerBody);
    }
}