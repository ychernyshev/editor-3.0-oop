import {AbstractButton} from "../abstract/AbstractButton.js";

export class InstrumentButton extends AbstractButton {
    constructor(styleType, style, sample, code) {
        super();
        this.style = style;
        this.styleType = styleType;
        this.sample = sample;
        this.code = code;
    }

    render() {
        const container = document.getElementById("home-tab-pane");

        const button = document.createElement("button");
        button.className = "btn tbn-light border";
        button.style[this.styleType] = this.style;
        if(this.sample.length !== 0) {
            button.textContent = this.sample;
        }

        if(this.code.length !== 0) {
            button.innerHTML = this.code;
        }

        this.setButton(button);
        container.appendChild(button);
    }
}