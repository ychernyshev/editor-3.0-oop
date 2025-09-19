export class MenuBar {
    constructor() {
        this.menuBarContainer = document.getElementById("menuBarContainer");
    }

    renderMenuBarContainer() {
        const container = document.createElement("div");
        container.className = "col-12";
        container.innerHTML = "<h6>Editor 3 OOP</h6>"

        this.menuBarContainer.appendChild(container);
    }
}