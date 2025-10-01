import {MenuBar} from '../components/MenuBar.js';
import {TextArea} from '../components/TextArea.js';
import {MenuBarSelectPanelButton} from '../components/buttons/MenuBarSelectPanelButton.js';
import {InstrumentsTab} from "../components/menu-bar/InstrumentsTab.js";

// home-tab-pane
import {InstrumentSelect} from "../components/menu-bar/InstrumentSelect.js";
import {InstrumentButton} from "../components/buttons/InstrumentButton.js";
import {ColorPickerSelect} from "../components/menu-bar/ColorPickerSelect.js";

// insert-tab-pane
import {TableCreator} from "../components/menu-bar/TableCreator.js";


// Commands
import {FontFamilyCommand} from "./commands/FontFamilyCommand.js";
import {FontSizeCommand} from "./commands/FontSizeCommand.js";
import {BoldCommand} from "./commands/BoldCommand.js";
import {ItalicCommand} from "./commands/ItalicCommand.js";
import {UnderlineCommand} from "./commands/UnderlineCommand.js";
import {LineThroughCommand} from "./commands/LineThroughCommand.js";
import {TextLeftCommand} from "./commands/TextLeftCommand.js";
import {TextCenterCommand} from "./commands/TextCenterCommand.js";
import {TextRightCommand} from "./commands/TextRightCommand.js";
import {TextJustifyCommand} from "./commands/TextJustifyCommand.js";

const menuBar = new MenuBar();
const textArea = new TextArea();

menuBar.renderMenuBarContainer();
textArea.renderTextAreaContainer();

// Menu Bar Panel
const buttonLabels = [
    {"name": "home", "id": "home-tab"},
    {"name": "insert", "id": "insert-tab"}
];

buttonLabels.forEach(label => {
    const button = new MenuBarSelectPanelButton(label.name, label.id);
    button.render();
})

// Tab Panels
const tabPanels = ["home-tab", "insert-tab"];

tabPanels.forEach(tabID => {
    const panel = new InstrumentsTab(tabID);
    panel.render();
})

// Menu Bar Input
const selectList = [
    {
        "name": "fonts",
        "alt": "Font Family",
        "value": ["Arial", "Geirgia", "Impact", "Tahoma", "Times New Roman", "Vardana"]
    },
    {"name": "numbers", "alt": "Font Size", "value": [8, 10, 12, 14, 16, 18, 20, 22, 25, 30]},
]

selectList.forEach(item => {
    const select = new InstrumentSelect(item.name, item.value);
    select.render();
})

// Font Weight Button
const fontWeight = [
    {"styleType": "fontWeight", "style": "bold", "sample": "A", "code": ""},
    {"styleType": "fontStyle", "style": "italic", "sample": "B", "code": ""},
    {"styleType": "textDecoration", "style": "underline", "sample": "C", "code": ""},
    {"styleType": "textDecoration", "style": "line-through", "sample": "Abc", "code": ""},
    {
        "styleType": "text-align",
        "style": "left",
        "sample": "",
        "code": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-text-left\" viewBox=\"0 0 16 16\">\n" +
            "  <path fill-rule=\"evenodd\" d=\"M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5\"/>\n" +
            "</svg>"
    },
    {
        "styleType": "text-align",
        "style": "center",
        "sample": "",
        "code": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-text-right\" viewBox=\"0 0 16 16\">\n" +
            "  <path fill-rule=\"evenodd\" d=\"M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5\"/>\n" +
            "</svg>"
    },
    {
        "styleType": "text-align",
        "style": "right",
        "sample": "",
        "code": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-text-center\" viewBox=\"0 0 16 16\">\n" +
            "  <path fill-rule=\"evenodd\" d=\"M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5\"/>\n" +
            "</svg>"
    },
    {
        "styleType": "text-align",
        "style": "justify",
        "sample": "",
        "code": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-justify\" viewBox=\"0 0 16 16\">\n" +
            "  <path fill-rule=\"evenodd\" d=\"M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5\"/>\n" +
            "</svg>"
    },
    {
        "styleType": "", "style": "clearFormatting", "sample": "", "code": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-earmark\" viewBox=\"0 0 16 16\">\n" +
            "  <path d=\"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z\"/>\n" +
            "</svg>"
    }
]

fontWeight.forEach(style => {
    const fontWrightButton = new InstrumentButton(style.styleType, style.style, style.sample, style.code);
    fontWrightButton.render();
})

// Color Picker
const colorPicker = [
    {
        "colour": ["#ef5350", "#b71c1c", "#d50000", "#560027",
            "#9c27b0", "#6a1b9a", "#38006b", "#6200ea",
            "#5c6bc0", "#1a237e", "#000051", "#2962ff",
            "#6ff9ff", "#00838f", "#f9a825", "#f57f17",
            "#ffa726", "#43a047", "#00c853", "#cddc39",
            "#ffeb3b"]
    }
]

colorPicker.forEach(color => {
    const picker = new ColorPickerSelect(color.colour);
    picker.render();
})

// insert-tab-pane
const tableCreator = new TableCreator();
tableCreator.render();

// Commands
// Font Size & Font Family
const fontSelect = document.getElementById("fontsID");
const fontSizeSelect = document.getElementById("numbersID");
const textAreaElement = document.getElementById("textArea");

const fontFamilyCommand = new FontFamilyCommand(textAreaElement);
const fontSizeCommand = new FontSizeCommand(textAreaElement);

fontSelect.addEventListener("change", (e) => {
    fontFamilyCommand.execute(e.target.value);
});

fontSizeSelect.addEventListener("change", (e) => {
    fontSizeCommand.execute(e.target.value);
});

// Font Weight
const boldButton = document.getElementById("boldButtonID");
const targetElement = document.getElementById("textArea");
const boldCommand = new BoldCommand(targetElement);

boldButton.addEventListener("click", () => {
    if (targetElement.style.fontWeight !== "bold") {
        boldCommand.execute("bold");
    } else {
        targetElement.style.fontWeight = "normal";
    }
})

// Font Style Italic
const italicButton = document.getElementById("italicButtonID");
const italicCommand = new ItalicCommand(targetElement);

italicButton.addEventListener("click", () => {
    if (targetElement.style.fontStyle !== "italic") {
        italicCommand.execute("italic");
    } else {
        targetElement.style.fontStyle = "normal";
    }
})

// Font Style Underline
const underlineButton = document.getElementById("underlineButtonID");
const underlineCommand = new UnderlineCommand(targetElement);

underlineButton.addEventListener("click", () => {
    const current = targetElement.style.textDecoration;

    const hasUnderline = current.includes("underline");
    const hasLineThrough = current.includes("line-through");

    if (!hasLineThrough && !hasUnderline) {
        lineThroughCommand.execute("underline");
    } else if (hasLineThrough && !hasUnderline) {
        lineThroughCommand.execute("underline line-through");
    } else if (hasLineThrough && hasUnderline) {
        lineThroughCommand.execute("line-through");
    } else {
        lineThroughCommand.execute("none");
    }
})

// Line Thought Command
const lineThroughButton = document.getElementById("line-throughButtonID");
const lineThroughCommand = new LineThroughCommand(targetElement);

lineThroughButton.addEventListener("click", () => {
    const current = targetElement.style.textDecoration;

    const hasUnderline = current.includes("underline");
    const hasLineThrough = current.includes("line-through");

    if (!hasLineThrough && !hasUnderline) {
        lineThroughCommand.execute("line-through");
    } else if (!hasLineThrough && hasUnderline) {
        lineThroughCommand.execute("underline line-through");
    } else if (hasLineThrough && hasUnderline) {
        lineThroughCommand.execute("underline");
    } else {
        lineThroughCommand.execute("none");
    }
})

// Text Left Command
const textLeftButton = document.getElementById("leftButtonID");
const textLeftCommand = new TextLeftCommand(targetElement);

textLeftButton.addEventListener("click", () => {
    textLeftCommand.execute("left");
})

// Text Center Command
const textCenterButton = document.getElementById("centerButtonID");
const textCenterCommand = new TextCenterCommand(targetElement);

textCenterButton.addEventListener("click", () => {
    textCenterCommand.execute("center");
})

// Text Right Command
const textRightButton = document.getElementById("rightButtonID");
const textRightCommand = new TextRightCommand(targetElement);

textRightButton.addEventListener("click", () => {
    textRightCommand.execute("right");
})

// Text Justify Command
const textJustifyButton = document.getElementById("justifyButtonID");
const textJustifyCommand = new TextJustifyCommand(targetElement);

textJustifyButton.addEventListener("click", () => {
    textJustifyCommand.execute("justify");
})

// Clear Formatting Command
const clearBtn = document.getElementById("clearFormattingButtonID");

clearBtn.addEventListener("click", () => {
    const plainText = targetElement.innerText;
    targetElement.innerHTML = "";
    targetElement.textContent = plainText;
});


// Text Area Panel