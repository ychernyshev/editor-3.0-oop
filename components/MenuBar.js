import {AbstractUIPaneComponent} from "./abstract/menu-bar/AbstractUIPaneComponent.js";

export class MenuBar extends AbstractUIPaneComponent{
    constructor() {
        super("menuBarContainer");
    }

    createTabContent() {
        const tabContent = document.createElement("div");
        tabContent.className = "tab-content";
        tabContent.id = "myTabContent";

        return tabContent;
    }

    createButtonListContainer() {
        const ul = document.createElement("ul");
        ul.className = "nav nav-tabs";
        ul.id = "MyTabList";
        ul.setAttribute("role", "tablist");

        return ul;
    }

    renderMenuBarContainer() {
        const containerBody = document.createElement("div");
        containerBody.style.height = "2.5rem";
        containerBody.className = "col-12 bg-light p-2 d-flex flex-row align-items-center";
        containerBody.id = "menuItemsContainer";
        containerBody.innerHTML = "<h6 class=''>Editor 3 OOP</h6>"

        const tabContent = this.createTabContent();
        const buttonListContainer = this.createButtonListContainer()
        containerBody.appendChild(buttonListContainer);
        containerBody.appendChild(tabContent);
        this.container.appendChild(containerBody);
    }
}