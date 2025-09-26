import {AbstractButton} from "../abstract/AbstractButton.js";

export class InstrumentButton extends AbstractButton {
    constructor(styleType, style, sample) {
        super();
        this.style = style;
        this.styleType = styleType;
        this.sample = sample;
    }

    render() {
        const container = document.getElementById("home-tab-pane");

        const button = document.createElement("button");
        button.className = "btn tbn-light border";
        button.style[this.styleType] = this.style;
        button.textContent = this.sample;

        this.setButton(button);
        container.appendChild(button);
    }
}