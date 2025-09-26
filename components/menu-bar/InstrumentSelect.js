import {AbstractInstrumentSelect} from "../abstract/menu-bar/AbstractInstrumentSelect.js";

export class InstrumentSelect extends AbstractInstrumentSelect {
    constructor(name, value) {
        super();
        this.name = name;
        this.value = value;
        this.homeTabPane = document.getElementById("home-tab-pane");
    }

    render() {
        const select = document.createElement("select");
        select.setAttribute("name", this.name);
        select.id = this.name + "ID";
        select.className = "form-control";

        this.value.forEach(val => {
            const option = document.createElement("option");
            option.setAttribute("value", val);
            option.textContent = val;
            option.style.fontFamily = val;
            option.style.fontSize = val + "px";
            select.appendChild(option);
        });

        this.setSelect(select);
        this.homeTabPane.appendChild(select)
    }
}