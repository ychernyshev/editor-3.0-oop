import {MenuBar} from '../components/MenuBar.js';
import {TextArea} from '../components/TextArea.js';
import {MenuBarSelectPanelButton} from '../components/buttons/MenuBarSelectPanelButton.js';
import {InstrumentsTab} from "../components/menu-bar/InstrumentsTab.js";
import {InstrumentSelect} from "../components/menu-bar/InstrumentSelect.js";
import {InstrumentButton} from "../components/buttons/InstrumentButton.js";
import {ColorPickerSelect} from "../components/menu-bar/ColorPickerSelect.js";

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

// Text Area Panel