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

        this.button.className = "btn tbn-light border";
        this.button.style[this.styleType] = this.style;
        this.button.id = this.style + "ButtonID";
        if(this.sample.length !== 0) {
            this.button.textContent = this.sample;
        }

        if(this.code.length !== 0) {
            this.button.innerHTML = this.code;
        }

        container.appendChild(this.button);
    }
}