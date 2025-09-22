import {AbstractUIPaneComponent} from "./abstract/AbstractUIPaneComponent.js";

export class MenuBar extends AbstractUIPaneComponent{
    constructor() {
        super("menuBarContainer");
    }

    renderMenuBarContainer() {
        const containerBody = document.createElement("div");
        containerBody.style.height = "2.5rem";
        containerBody.className = "col-2 bg-light p-2 d-flex flex-row align-items-center";
        containerBody.id = "menuItemsContainer";
        containerBody.innerHTML = "<h6 class=''>Editor 3 OOP</h6>"

        this.container.appendChild(containerBody);
    }


}