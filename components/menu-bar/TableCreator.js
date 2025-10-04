export class TableCreator {
    constructor() {
    }

    render() {
        const container = document.getElementById("insert-tab-pane");

        const modalContainer = this.createModalContainer();
        const modalDialog = this.createModalDialog();
        const modalContent = this.createModalContent();

        const createModalHeader = this.createModalHeader();
        const createModalBody = this.createModalBody();
        const createModalFooter = this.createModalFooter();

        const createModalTitle = this.createModalTitle();
        const createCloseButton = this.createCloseButton();

        const createTableButton = this.createTableButton();

        const createTableBody = this.createTableBody();
        const createTableTR = this.createTableTR();
        const createTableTD = this.createTableTD();

        createModalHeader.appendChild(createModalTitle);
        createModalHeader.appendChild(createCloseButton);

        createModalFooter.appendChild(createTableButton);

        createTableBody.appendChild(createTableTR);
        createTableTD.forEach(td => {
            createTableTR.appendChild(td);
        })

        createModalBody.appendChild(createTableBody);

        modalContent.appendChild(createModalHeader);
        modalContent.appendChild(createModalBody);
        modalContent.appendChild(createModalFooter);

        modalDialog.appendChild(modalContent);
        modalContainer.appendChild(modalDialog);

        container.appendChild(modalContainer);
        container.appendChild(this.createOpenButton());
    }

    createOpenButton() {
        const openTableCratingModal = document.createElement('button');
        openTableCratingModal.className = "btn btn-light";
        openTableCratingModal.setAttribute("data-bs-toggle", "modal");
        openTableCratingModal.setAttribute("data-bs-target", "#tableCreatingModal");
        openTableCratingModal.innerHTML = this.createTableIcon();

        return openTableCratingModal;
    }

    createCloseButton() {
        const closeButton = document.createElement("button");
        closeButton.className = "btn-close";
        closeButton.id = "buttonX";
        closeButton.setAttribute("type", "button");
        closeButton.setAttribute("data-bs-dismiss", "modal");
        closeButton.setAttribute("aria-label", "Close");

        return closeButton;
    }

    createTableButton() {
        const buttonCreate = document.createElement("button");
        buttonCreate.className = "btn btn-success";
        buttonCreate.id = "buttonCreate";
        buttonCreate.innerText = "Create";
        buttonCreate.setAttribute("data-bs-dismiss", "modal");

        return buttonCreate;
    }

    createTableIcon() {
        const svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-table\" viewBox=\"0 0 16 16\">\n" +
            "  <path d=\"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z\"/>\n" +
            "</svg>"

        return svg;
    }

    createModalContainer() {
        const modalContainer = document.createElement("div");
        modalContainer.className = "modal fade";
        modalContainer.id = "tableCreatingModal";
        modalContainer.setAttribute("tabindex", "-1");

        return modalContainer;
    }

    createModalDialog() {
        const modalDialog = document.createElement("div");
        modalDialog.className = "modal-dialog modal-dialog-centered";
        modalDialog.id = "modalDialog";

        return modalDialog;
    }

    createModalContent() {
        const modalContent = document.createElement("div");
        modalContent.className = "modal-content";
        modalContent.id = "modalContent";

        return modalContent;
    }

    createModalTitle() {
        const modalTitle = document.createElement("div");
        modalTitle.className = "modal-title";
        modalTitle.id = "modalTitle";
        modalTitle.innerText = "Create table";

        return modalTitle;
    }

    createModalHeader() {
        const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header";
        modalHeader.id = "modalHeader";

        return modalHeader;
    }

    createModalBody() {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.id = "modalBody";

        return modalBody;
    }

    createModalFooter() {
        const modalFooter = document.createElement("div");
        modalFooter.className = "modal-footer";
        modalFooter.id = "modalFooter";

        return modalFooter;
    }

    // Table settings fields
    createTableBody() {
        const table = document.createElement("table")
        table.className = "table";

        return table;
    }

    createTableTR() {
        return document.createElement("tr");
    }

    createTableTD() {
        const fields = [
            {label: "Count TR", type: "input"},
            {label: "Count TD", type: "input"},
            {label: "Width of TD", type: "input"},
            {label: "Height of TD", type: "input"},
            {label: "Width of border", type: "input"},
            {
                label: "Style of border",
                type: "select",
                options: ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"]
            },
            {label: "Color of border", type: "input"}
        ];

        return fields.map(field => {
            const td = document.createElement("td");
            td.innerText = field.label;

            let control;

            if (field.type === "select") {
                control = document.createElement("select");
                control.className = "form-select";

                field.options.forEach(style => {
                    const option = document.createElement("option");
                    option.value = style;
                    option.innerText = style;
                    control.appendChild(option);
                });
            } else {
                control = document.createElement("input");
                control.className = "form-control";
            }

            td.appendChild(control);
            return td;
        });
    }


    // createTableTD() {
    //     const fields = ["Count TR", "Count TD", "Width of TD", "Height of TD", "Width of border", "Style of border", "Color of border"];
    //     const styleBorder = ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];
    //
    //     const select = document.createElement("select");
    //
    //
    //     return fields.map(field => {
    //         const td = document.createElement("td");
    //         td.innerText = field;
    //
    //         const input = document.createElement("input");
    //         input.className = "form-control";
    //
    //         styleBorder.map(style => {
    //             const option = document.createElement("option");
    //             option.innerText = style;
    //
    //             return select.appendChild(option);
    //         })
    //
    //         td.appendChild(input);
    //         return td;
    //     })
    // }
}