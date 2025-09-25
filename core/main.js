import  { MenuBar } from '../components/MenuBar.js';
import { TextArea } from '../components/TextArea.js';
import { MenuBarSelectPanelButton } from '../components/buttons/MenuBarSelectPanelButton.js';
import {InstrumentsTab} from "../components/menu-bar/InstrumentsTab.js";
import {InstrumentSelect} from "../components/menu-bar/InstrumentSelect.js";

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
    {"name": "fonts", "alt": "Font Family", "value": ["Arial", "Geirgia", "Impact", "Tahoma", "Times New Roman", "Vardana"]},
    {"name": "numbers", "alt": "Font Size", "value": [12, 14, 16, 18, 20, 22, 25, 30]},
]

selectList.forEach(item => {
    const select = new InstrumentSelect(item.name, item.value);
    select.render();
})


// Text Area Panel