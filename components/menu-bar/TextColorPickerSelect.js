import {AbstractInstrumentSelect} from "../abstract/menu-bar/AbstractInstrumentSelect.js";

export class TextColorPickerSelect extends AbstractInstrumentSelect{
    constructor(colour) {
        super();
        this.colour = colour;
    }

    render() {
        const container = document.getElementById("home-tab-pane");
        const select = document.createElement("select");

        select.className = "form-control text-secondary";
        select.id = "setTextColor";
        select.setAttribute("name", "TextColors");

        this.colour.forEach(color => {
            const option = document.createElement("option");
            option.style.backgroundColor = color;
            option.value = color;
            option.textContent = "Text";
            select.appendChild(option);
        })

        // this.setButton(select);

        container.appendChild(select);
    }
}