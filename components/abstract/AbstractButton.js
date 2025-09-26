export class AbstractButton {
    constructor() {
        this.button = document.createElement("button");
    }

    setAttributes(attributes = {}) {
        Object.entries(attributes).forEach(([key, value]) => {
            if (key === "innerText") {
                this.button.innerText = value;
            } else {
                this.button.setAttribute(key, value);
            }
        });
    }

    render() {
        throw new Error("The button must be implemented");
    }
}