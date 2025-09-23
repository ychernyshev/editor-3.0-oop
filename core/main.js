import  { MenuBar } from '../components/MenuBar.js';
import { TextArea } from '../components/TextArea.js';
import { MenuBarSelectPanelButton } from '../components/buttons/MenuBarSelectPanelButton.js';
import {InstrumentsTab} from "../components/menu-bar/InstrumentsTab.js";

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


// Text Area Panel