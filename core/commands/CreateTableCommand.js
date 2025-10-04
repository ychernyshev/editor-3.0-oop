export class CreateTableCommand{
    constructor(targetElement, trCount, tdCount, tdWidth, tdHeight, tableBorderWith, tableBorderStyle, tableBorderColor ) {
        this.targetElement = targetElement;
        this.trCount = trCount;
        this.tdCount = tdCount;
        this.tdWidth = tdWidth;
        this.tdHeight = tdHeight;
        this.tableBorderWith = tableBorderWith;
        this.tableBorderStyle = tableBorderStyle;
        this.tableBorderColor = tableBorderColor;
    }

    execute() {
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";

    for (let i = 0; i < this.trCount; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < this.tdCount; j++) {
            const td = document.createElement("td");
            td.style.width = this.tdWidth + "px";
            td.style.height = this.tdHeight + "px";
            td.style.border = `${this.tableBorderWith}px ${this.tableBorderStyle} #${this.tableBorderColor}`;
            console.log(`${this.tableBorderWith}px ${this.tableBorderStyle} #${this.tableBorderColor}`);
            td.innerText = "text";

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    this.targetElement.appendChild(table);
}

}