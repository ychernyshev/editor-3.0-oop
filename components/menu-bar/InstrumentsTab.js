import {AbstractInstrumentsTab} from "../abstract/menu-bar/AbstractInstrumentsTab.js";

export class InstrumentsTab extends AbstractInstrumentsTab {
    constructor(tabID) {
        super();
        this.tabID = tabID;
        this.tabContent = document.getElementById("myTabContent");
    }

    render() {
        const tabPanel = document.createElement("div");
        document.getElementById("home-tab").addEventListener("click", () => {
            tabPanel.className = "tab-pane fade d-flex flex-row";
            document.getElementById("insert-tab-pane").className = "tab-pane fade";
        });
        document.getElementById("insert-tab").addEventListener("click", () => {
            tabPanel.className = "tab-pane fade d-flex flex-row";
            document.getElementById("home-tab-pane").className = "tab-pane fade";
        })
        tabPanel.className = "tab-pane fade d-flex flex-row";
        tabPanel.id = this.tabID + "-pane";
        tabPanel.setAttribute("role", "tabpanel");
        tabPanel.setAttribute("aria-labelledby", this.tabID);
        tabPanel.setAttribute("tabindex", "0");

        this.tabContent.appendChild(tabPanel);
    }
}